"use server";

import {
  signInFormSchema,
  signUpFormSchema,
  verifyOtpFormSchema,
} from "@/lib/validations/auth";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { EmailOtpType } from "@supabase/supabase-js";

export interface AuthFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    token?: string[];
    _form?: string[];
  };
  success?: boolean;
  email?: string;
}

export async function signInAction(
  prevState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const supabase = await createClient();
  const validateFields = signInFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      message: "Invalid form data. Please correct the errors.",
      errors: validateFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { email, password } = validateFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      message: "Sign-in failed.",
      errors: { _form: [error.message] },
      success: false,
    };
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUpAction(
  prevState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const supabase = await createClient();
  const validateFields = signUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      message: "Invalid form data. Please correct the errors.",
      errors: validateFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, password } = validateFields.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (error) {
    return {
      message: "Sign-up failed.",
      errors: { _form: [error.message] },
      success: false,
    };
  }

  return {
    message: "Account created! Please check your email to confirm.",
    success: true,
    email: email,
  };
}

export async function verifyOtpAction(
  prevState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const supabase = await createClient();
  const validatedFields = verifyOtpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: "Invalid form data",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { email, token } = validatedFields.data;
  const type: EmailOtpType = "signup";

  const { error } = await supabase.auth.verifyOtp({ email, token, type });

  if (error) {
    return {
      message: "Verification failed. The code may be invalid or expired.",
      errors: { _form: [error.message] },
      success: false,
    };
  }

  redirect("/account");
}

export async function signOutAction() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign Out error:", error);
  }
  redirect("/signin");
}
