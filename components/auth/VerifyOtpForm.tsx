"use client";

import React, { useActionState, useEffect } from "react";
import { z } from "zod";
import { verifyOtpFormSchema } from "@/lib/validations/auth";
import { AuthFormState, verifyOtpAction } from "@/app/(auth)/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import SubmitButton from "@/components/ui/SubmitButton";

type VerifyOtpFormValues = z.infer<typeof verifyOtpFormSchema>;

const initialState: AuthFormState = { message: "", errors: {}, success: false };

interface VerifyOtpFormProps {
  email: string;
}

const VerifyOtpForm = ({ email }: VerifyOtpFormProps) => {
  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpFormSchema),
    defaultValues: { email: email, token: "" },
  });

  const [state, formAction] = useActionState(verifyOtpAction, initialState);

  useEffect(() => {
    if (state.errors?.token) {
      form.setError("token", {
        type: "server",
        message: state.errors.token[0],
      });
    }
  }, [state, form]);

  return (
    <Form {...form}>
      <form action={formAction}>
        <input type="hidden" {...form.register("email")} />
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Verification Code
              </FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="w-full flex justify-center">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-center text-sm mb-3">
                Enter the 6-digit code sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          pendingText="Verifying..."
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-paletteMaroonMedium hover:bg-paletteMaroonDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paletteMaroonMedium dark:focus:ring-offset-paletteMaroonDarkest"
        >
          Verify Account
        </SubmitButton>
        {form.formState.errors.root?.serverError && (
          <p className="mt-4 text-sm font-medium text-paletteError text-center">
            {form.formState.errors.root.serverError.message}
          </p>
        )}
      </form>
    </Form>
  );
};

export default VerifyOtpForm;
