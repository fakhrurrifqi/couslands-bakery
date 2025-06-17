import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account with Cousland's Bakery.",
};

const SignUpPage = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-paletteTextDark dark:text-paletteTextLight">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-paletteGrayDark dark:text-paletteGrayLight">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-paletteMaroonMedium hover:text-paletteMaroonDark dark:hover:text-paletteMaroonRose"
            >
              Sign in here
            </Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
