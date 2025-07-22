"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const emailSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: "Please enter a valid email address.",
  });

export async function subscribeToNewsletter(
  prevState: unknown,
  formData: FormData
) {
  const supabase = await createClient();
  const emailValue = formData.get("email");

  if (typeof emailValue !== "string" || emailValue.length === 0) {
    return {
      message: "Please enter a valid email address.",
      success: false,
    };
  }

  const validationResult = emailSchema.safeParse(emailValue);
  if (!validationResult.success) {
    return {
      message: validationResult.error.issues[0].message,
      success: false,
    };
  }

  const { error } = await supabase
    .from("subscribers")
    .upsert(
      { email: validationResult.data, is_subscribed: true },
      { onConflict: "email" }
    );

  if (error) {
    console.error("Error subscribing to newsletter:", error);
    return {
      message: "Could not subscribe. Please try again later.",
      success: false,
    };
  }

  return {
    message: "Thanks for subscribing! Your discount code is WELCOME10.",
    success: true,
  };
}
