import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Cousland's Bakery account.",
};

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-8">
          My Account
        </h1>
        <div className="space-y-6 rounded-lg bg-white dark:bg-paletteMaroonDarkest p-8 shadow-xl">
          <p className="text-lg">
            Welcome back, Baker! (This is a placeholder)
          </p>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
          <div>
            <Button
              variant="destructive"
              className="bg-red-600 hover:bg-red-700"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
