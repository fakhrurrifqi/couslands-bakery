"use server";
import { contactFormSchema } from "@/lib/validations";

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
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
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
    console.log("Form data submitted", { name, email, message });
    return {
      message: "Thank you! Your message has been sent.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Failed to send message:", error);
    return {
      message: "Failed to send message. Please try again later.",
      success: false,
      errors: { _form: ["An unexpected error occurred."] },
    };
  }
}
