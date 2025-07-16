import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "@/app/(auth)/actions";
import { getProfile } from "@/lib/data";
import AccountForm from "@/components/AccountForm";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Cousland's Bakery account.",
};

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  const profile = await getProfile(supabase);
  if (!profile) {
    return <div>Could not load profile. Please contact support.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose">
              My Account
            </h1>
            <p className="text-paletteGrayDark dark:text-paletteGrayLight mt-1">
              Welcome back, {profile.name || user.email}!
            </p>
          </div>

          <form action={signOutAction}>
            <Button variant="outline" className="cursor-pointer">
              Log Out
            </Button>
          </form>
        </div>

        <div className="rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
          <h2 className="text-xl font-semibold mb-6">Profile Details</h2>
          <AccountForm profile={profile} />
        </div>
      </div>
    </div>
  );
}
