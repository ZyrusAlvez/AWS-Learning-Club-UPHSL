import { supabase } from "@/lib/supabase";

export async function validateCertificate(certificate: string) {
  if (certificate === 'No certificate issued') {
    throw new Error('Invalid certificate');
  }

  const { data: attendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("eventid, memberid")
    .eq("certificate", certificate)
    .single();

  if (attendanceError || !attendance) {
    throw new Error('Certificate not found');
  }

  const { data: event, error: eventError } = await supabase
    .from("events")
    .select("*")
    .eq("eventid", attendance.eventid)
    .single();

  if (eventError || !event) {
    throw new Error('Event not found');
  }

  const { data: member, error: memberError } = await supabase
    .from("members")
    .select("firstname, lastname, middlename")
    .eq("id", attendance.memberid)
    .single();

  if (memberError || !member) {
    throw new Error('Member not found');
  }

  const ownerName = `${member.firstname} ${member.middlename} ${member.lastname}`;

  return { event, ownerName };
}
