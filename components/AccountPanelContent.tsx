"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccountPanelContent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Account</h2>
      <div className="space-y-4">
        <Button
          className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white cursor-pointer"
          asChild
        >
          <Link href="/signin">Login</Link>
        </Button>
        <Button className="w-full cursor-pointer" variant="outline" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default AccountPanelContent;
