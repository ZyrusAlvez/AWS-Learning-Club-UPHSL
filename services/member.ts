import { supabase } from "@/lib/supabase";

export async function submitMember(formData: {
  firstName: string;
  lastName: string;
  middleName: string;
  age: string;
  contactNumber: string;
  facebookLink: string;
  personalEmail: string;
  schoolEmail: string;
  program: string;
  yearSection: string;
  interest: string;
}) {
  const { data, error } = await supabase
    .from("members")
    .insert([formData]); // insert expects array

  if (error) throw error;
  return data;
}
