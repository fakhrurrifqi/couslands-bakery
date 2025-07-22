import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Raleway } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { createClient } from "@/lib/supabase/server";
import { getCartItems } from "@/lib/data";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cousland's Bakery",
    template: "%s | Cousland's Bakery",
  },
  description: "Delicious treats, cakes, and pastries from Cousland's Bakery.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const initialCartItems = await getCartItems();

  const serializableUser = user
    ? {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || user.email,
      }
    : null;

  return (
    <html lang="en" className={`${raleway.variable} antialiased`}>
      <body className="bg-palettePinkLighter dark:bg-paletteTextDark">
        <AppProvider initialCart={initialCartItems}>
          <ClientLayoutWrapper user={serializableUser}>
            {children}
          </ClientLayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
