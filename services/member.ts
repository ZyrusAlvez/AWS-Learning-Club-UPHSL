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

    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(4, '0');
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
