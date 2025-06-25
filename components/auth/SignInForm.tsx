"use client";

import React, { useEffect } from "react";
import { signInFormSchema } from "@/lib/validations/auth";
import { AuthFormState } from "@/app/(auth)/actions";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { signInAction } from "@/app/(auth)/actions";
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

type SignInFormValues = z.infer<typeof signInFormSchema>;

const initialState: AuthFormState = { message: "", errors: {}, success: false };

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const [state, formAction] = useActionState(signInAction, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/account");
    }

    if (state.errors) {
      const errors = state.errors;
      if (errors.email)
        form.setError("email", { type: "server", message: errors.email[0] });
      if (errors.password)
        form.setError("password", {
          type: "server",
          message: errors.password[0],
        });
    }
  }, [state, form, router]);
  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
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
          control={form.control}
          name="password"
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
        <SubmitButton
          pendingText="Signin In..."
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-paletteMaroonMedium hover:bg-paletteMaroonDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paletteMaroonMedium dark:focus:ring-offset-paletteMaroonDarkest"
        >
          Sign In
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

export default SignInForm;
