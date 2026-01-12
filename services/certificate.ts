import { supabase } from "@/lib/supabase";

export async function validateCertificate(certificate: string) {
  // Check if certificate is not "No certificate issued"
  if (certificate === 'No certificate issued') {
    throw new Error('Invalid certificate');
  }

  // Find attendance record by certificate
  const { data: attendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("eventid")
    .eq("certificate", certificate)
    .single();

  if (attendanceError || !attendance) {
    throw new Error('Certificate not found');
  }

  // Find event by eventid
  const { data: event, error: eventError } = await supabase
    .from("events")
    .select("*")
    .eq("eventid", attendance.eventid)
    .single();

  if (eventError || !event) {
    throw new Error('Event not found');
  }

  return event;
}
