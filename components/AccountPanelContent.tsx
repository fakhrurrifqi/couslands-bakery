"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signOutAction } from "@/app/(auth)/actions";
import { useAppContext } from "@/context/AppContext";
import { SerializableUser } from "@/lib/types";

interface AccountPanelContentProps {
  user: SerializableUser | null; // Accept the user object as a prop
}

const AccountPanelContent: React.FC<AccountPanelContentProps> = ({ user }) => {
  const { closePanel } = useAppContext();
  const handleLinkClick = () => {
    closePanel();
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Account</h2>
      {user ? (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
            Welcome back, <span className="font-medium">{user.name}</span>
          </p>
          <Link href="/account" passHref onClick={handleLinkClick}>
            <Button className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white cursor-pointer">
              My Account Dashboard
            </Button>
          </Link>
          <form action={signOutAction}>
            <Button
              variant="outline"
              className="w-full border-paletteMaroonMedium text-paletteMaroonMedium hover:bg-paletteMaroonMedium/10 dark:border-paletteMaroonRose dark:text-paletteMaroonRose dark:hover:bg-paletteMaroonRose/10 cursor-pointer"
            >
              Log Out
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
            Manage your orders and account details.
          </p>
          <Link href="/signin" passHref onClick={handleLinkClick}>
            <Button className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white cursor-pointer">
              Log In
            </Button>
          </Link>
          <Link href="/signup" passHref onClick={handleLinkClick}>
            <Button
              variant="outline"
              className="w-full border-paletteMaroonMedium text-paletteMaroonMedium hover:bg-paletteMaroonMedium/10 dark:border-paletteMaroonRose dark:text-paletteMaroonRose dark:hover:bg-paletteMaroonRose/10 cursor-pointer"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountPanelContent;
