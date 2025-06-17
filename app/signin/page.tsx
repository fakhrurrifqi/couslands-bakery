import React from "react";
import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Cousland's Bakery account.",
};

const SignInPage = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-paletteTextDark dark:text-paletteTextLight">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-paletteGrayDark dark:text-paletteGrayLight">
            Or{" "}
            <Link
              href="/signup"
              className="font-medium text-paletteMaroonMedium hover:text-paletteMaroonDark dark:hover:text-paletteMaroonRose"
            >
              create a new account
            </Link>
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
