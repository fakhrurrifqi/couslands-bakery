import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "@/app/(auth)/actions";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Cousland's Bakery account.",
};

export default async function AccountPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-8">
          My Account
        </h1>
        <div className="space-y-6 rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
          <p className="text-lg">Welcome back, {data.user.email}!</p>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
          <div>
            <form action={signOutAction}>
              <Button
                variant="destructive"
                className="bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                Log Out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
