"use client";

import React, { useEffect } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signUpFormSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { signUpAction, AuthFormState } from "@/app/(auth)/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/SubmitButton";

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

const initialState: AuthFormState = { message: "", errors: {}, success: false };

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [state, formAction] = useActionState(signUpAction, initialState);

  useEffect(() => {
    if (state.success && state.email) {
      router.push(`/auth/confirm?email=${encodeURIComponent(state.email)}`);
    }
    if (state.errors) {
      const errors = state.errors;
      if (errors.name)
        form.setError("name", { type: "server", message: errors.name[0] });
      if (errors.email)
        form.setError("email", { type: "server", message: errors.email[0] });
      if (errors.password)
        form.setError("password", {
          type: "server",
          message: errors.password[0],
        });
      if (errors.confirmPassword)
        form.setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword[0],
        });
    }
  }, [state, form, router]);
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="placeholder:text-paletteGrayMedium"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  {...field}
                  className="placeholder:text-paletteGrayMedium"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  className="placeholder:text-paletteGrayMedium"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••••••"
                  {...field}
                  className="placeholder:text-paletteGrayMedium"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          pendingText="Creating Account..."
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-paletteMaroonMedium hover:bg-paletteMaroonDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paletteMaroonMedium dark:focus:ring-offset-paletteMaroonDarkest"
        >
          Create Account
        </SubmitButton>

        {state.message && (
          <p
            className={`mt-4 text-sm font-medium ${
              state.success ? "text-green-500" : "text-red-500"
            } `}
          >
            {state.message}
          </p>
        )}
      </form>
    </Form>
  );
};

export default SignUpForm;
