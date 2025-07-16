"use server";
import { contactFormSchema } from "@/lib/validations";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface FormState {
  message: string;
  errors?: {
    // Make errors optional
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[]; // For general form errors not tied to a specific field
  };
  success?: boolean; // Make success optional or ensure it's always present
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: user?.email || formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors in the form",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data: rpcResponse, error: rpcError } = await supabase.rpc(
      "insert_message_with_rate_limit",
      {
        p_name: name,
        p_email: email,
        p_message: message,
        p_user_id: user?.id || null,
      }
    );

    if (rpcError) {
      throw new Error(rpcError.message);
    }

    if (rpcResponse === "RATE_LIMITED") {
      return {
        message: "You are sending messages too quickly. Please wait a moment.",
        success: false,
        errors: { _form: ["Too many requests."] },
      };
    }

    if (rpcResponse === "SUCCESS") {
      revalidatePath("/contact");
      return {
        message: "Thank you! Your message has been sent.",
        success: true,
        errors: {},
      };
    }
    throw new Error("An unexpected response was received from the server.");
  } catch (error) {
    console.error("Failed to send message:", error);
    return {
      message:
        "Database Error: Failed to send message. Please try again later.",
      success: false,
      errors: { _form: ["An unexpected error occurred."] },
    };
  }
}
