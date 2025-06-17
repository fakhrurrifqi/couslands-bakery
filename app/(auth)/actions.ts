"use server";

import { signInFormSchema, signUpFormSchema } from "@/lib/validations/auth";
import { redirect } from "next/navigation";

export interface AuthFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function signInAction(
  prevState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
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

  try {
    console.log("Attempting sign in with:", { email, password });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect("/account");

    return {
      message: "Sign in successfull",
      success: true,
    };
  } catch (error) {
    console.error("Sign in error:", error);
    return {
      message: "Sign-in failed. Please check your credentials and try again.",
      success: false,
      errors: { _form: ["Invalid email or password."] },
    };
  }
}

export async function signUpAction(
  prevState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
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

  try {
    console.log("Attempting to sign up with:", { name, email, password });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect("/account");

    return {
      message: "Account created successfully! Redirecting...",
      success: true,
    };
  } catch (error) {
    console.error("Sign up error:", error);
  }
  return {
    message: "Sign-up failed. Please try again later.",
    success: false,
    errors: { _form: ["An unexpected error occurred."] },
  };
}
