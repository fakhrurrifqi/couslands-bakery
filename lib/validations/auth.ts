import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters long.",
      })
      .max(50, {
        message: "Name must be less than 50 characters long.",
      }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match.",
    path: ["confirmPassword"],
  });

export const verifyOtpFormSchema = z.object({
  email: z.string().email(),
  token: z.string().min(6, { message: "Your code must be 6 digits." }).max(6),
});
