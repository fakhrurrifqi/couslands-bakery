"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const profileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone_number: z.string().optional(),
  address_line1: z.string().optional(),
  address_line2: z.string().optional(),
  city: z.string().optional(),
  state_province: z.string().optional(),
  postal_code: z.string().optional(),
  country: z.string().optional(),
});

export async function updateProfile(prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  const formDataObj = Object.fromEntries(formData.entries());
  console.log("Form Data:", formDataObj); // Debug log

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { message: "Authentication required", success: false };
  }

  const validateFields = profileSchema.safeParse(formDataObj);
  if (!validateFields.success) {
    console.log("Validation Errors:", validateFields.error.flatten()); // Debug log
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Please correct the form errors.",
      success: false,
    };
  }

  // Debug log before database update
  console.log("Validated Data:", validateFields.data);

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email,
      ...validateFields.data,
    })
    .select()
    .single();

  if (error) {
    console.error("Error upserting profile:", error);
    return { message: "Error updating profile.", success: false };
  }

  revalidatePath("/account");
  return { message: "Profile updated successfully!", success: true };
}
