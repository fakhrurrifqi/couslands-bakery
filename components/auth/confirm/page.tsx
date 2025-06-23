"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import VerifyOtpForm from "@/components/auth/VerifyOtpForm";

const ConfirmPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  if (!email) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <h2 className="text-2xl font-bold">Invalid Confirmation Link</h2>
          <p className="mt-2 text-paletteGrayDark dark:text-paletteGrayLight">
            Please trying signing up again
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-paletteTextDark dark:text-paletteTextLight">
            Check your email
          </h2>
          <p className="mt-2 text-center text-sm text-paletteGrayDark dark:text-paletteGrayLight">
            We&apos;ve sent a 6-digit confirmation code to{" "}
            <span className="font-medium">{email}</span>.
          </p>
        </div>
        <VerifyOtpForm email={email} />
      </div>
    </div>
  );
};

export default ConfirmPage;
