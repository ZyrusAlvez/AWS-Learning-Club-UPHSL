import { supabase } from "@/lib/supabase";


export async function submitMember(formData: any) {
  
  // Check if member already exists
  const existingMember = await findMemberId(formData.schoolEmail);
  if (existingMember) {
    throw new Error('You are already a member!');
  }

  const year = new Date().getFullYear().toString();
  const yearSuffix = year.slice(2);

  let memberid: string;
  let inserted = false;
  let newMember: any;
  let attempts = 0;

  // generate unique memberid
  while (!inserted && attempts < 5) { // retry max 5 times
    attempts++;

    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    memberid = `aws${yearSuffix}-${randomNum}`;

    newMember = {
      ...formData,
      memberid
    };

    // convert all keys to lowercase for Supabase
    const lowercasedMember: any = {};
    Object.keys(newMember).forEach(key => {
      lowercasedMember[key.toLowerCase()] = (newMember as any)[key];
    });

    const { data, error } = await supabase
      .from("members")
      .insert([lowercasedMember]);

    if (!error) {
      inserted = true;
      return data;
    } else if (error.code === '23505') { // unique violation
      continue; // try again
    } else {
      throw error; // some other error
    }
  }

  throw new Error("Failed to generate a unique member_id. Try again.");
}

export async function findMemberId(schoolEmail: string) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("schoolemail", schoolEmail.toLowerCase())
    .single(); // returns one row or null

  if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
    throw error; // only throw if real error
  }

  return data || null; // return member object or null
}

export async function validateMembershipId(memberid: string) {
  // Check if memberid starts with 'aws'
  if (!memberid.toLowerCase().startsWith('aws')) {
    throw new Error('Invalid membership ID format');
  }

  // Find member in members table
  const { data: member, error: memberError } = await supabase
    .from("members")
    .select("id, firstname, lastname, middlename, program, position")
    .eq("memberid", memberid.toLowerCase())
    .single();

  if (memberError || !member) {
    throw new Error('Membership ID not found');
  }

  // Find all attendance records for this member with certificate info
  const { data: attendanceRecords, error: attendanceError } = await supabase
    .from("attendance")
    .select("eventid, certificate")
    .eq("memberid", member.id);

  if (attendanceError) {
    throw attendanceError;
  }

  // Get event IDs
  const eventIds = attendanceRecords?.map(record => record.eventid) || [];

  // Fetch event details for all event IDs
  let events = [];
  if (eventIds.length > 0) {
    const { data: allEvents, error: eventsError } = await supabase
      .from("events")
      .select("*");
    
    if (eventsError) {
      console.error('Events table RLS error - please enable read access in Supabase:', eventsError);
    } else if (allEvents) {
      // Match events with their certificate info from attendance
      events = allEvents
        .filter(event => eventIds.includes(event.eventid || event.id))
        .map(event => {
          const attendance = attendanceRecords.find(a => a.eventid === (event.eventid || event.id));
          return {
            ...event,
            certificate: attendance?.certificate || 'No certificate issued'
          };
        })
        .sort((a, b) => {
          const dateA = new Date(a.date || 0).getTime();
          const dateB = new Date(b.date || 0).getTime();
          return dateB - dateA;
        });
    }
  }

  return {
    member: {
      firstname: member.firstname,
      lastname: member.lastname,
      middlename: member.middlename,
      program: member.program,
      position: member.position
    },
    events
  };
}
