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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
                <Input placeholder="123456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton pendingText="Verifying...">Verify Account</SubmitButton>
        {state?.errors?._form && (
          <p className="mt-4 text-sm font-medium text-paletteError">
            {state.errors._form[0]}
          </p>
        )}
      </form>
    </Form>
  );
};

export default VerifyOtpForm;
