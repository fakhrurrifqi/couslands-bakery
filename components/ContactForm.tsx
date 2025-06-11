"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactFormSchema } from "@/lib/validations";
import { submitContactForm } from "@/app/contact/actions";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useActionState, useEffect } from "react";
import SubmitButton from "./ui/SubmitButton";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState = { message: "", errors: {}, success: false };

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      form.reset();
    }
    const serverErrors = state.errors;
    if (serverErrors) {
      if (serverErrors.name?.[0]) {
        form.setError("name", {
          type: "server",
          message: serverErrors.name[0],
        });
      }
      if (serverErrors.email?.[0]) {
        form.setError("email", {
          type: "server",
          message: serverErrors.email[0],
        });
      }
      if (serverErrors.message?.[0]) {
        form.setError("message", {
          type: "server",
          message: serverErrors.message[0],
        });
      }
    }
  }, [state, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="bg-white dark:bg-paletteMaroonDarkest border-paletteGrayLight dark:border-paletteMaroonDark text-paletteTextDark dark:text-paletteTextLight placeholder:text-paletteGrayMedium focus-visible:ring-paletteMaroonMedium"
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
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
                  className="bg-white dark:bg-paletteMaroonDarkest border-paletteGrayLight dark:border-paletteMaroonDark text-paletteTextDark dark:text-paletteTextLight placeholder:text-paletteGrayMedium focus-visible:ring-paletteMaroonMedium"
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-paletteTextDark dark:text-palettePinkLighter">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="min-h-[100px] bg-white dark:bg-paletteMaroonDarkest border-paletteGrayLight dark:border-paletteMaroonDark text-paletteTextDark dark:text-paletteTextLight placeholder:text-paletteGrayMedium focus-visible:ring-paletteMaroonMedium"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <SubmitButton />

        {state?.message && state.success && (
          <p className="mt-4 text-sm text-green-600">{state.message}</p>
        )}
        {state?.message &&
          !state.success &&
          state.errors &&
          Object.keys(state.errors).length > 0 && (
            <p className="mt-4 text-sm text-red-600">{state.message}</p>
          )}
        {/* For general form errors not tied to a field, if your server action returns them in state.errors._form */}
        {state?.errors?._form && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors._form.join(", ")}
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
