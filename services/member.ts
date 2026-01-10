import { supabase } from "@/lib/supabase";

export async function submitMember(formData: any) {
  const year = new Date().getFullYear().toString();
  const yearSuffix = year.slice(2);

  let member_id: string;
  let inserted = false;
  let newMember: any;
  let attempts = 0;

  // generate unique member_id
  while (!inserted && attempts < 5) { // retry max 5 times
    attempts++;

    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(6, '0');
    member_id = `aws${yearSuffix}${randomNum}`;

    newMember = { ...formData, member_id };

    const { data, error } = await supabase
      .from("members")
      .insert([newMember]);

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
