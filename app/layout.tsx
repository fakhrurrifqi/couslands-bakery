import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Raleway } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { createClient } from "@/lib/supabase/server";

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
  return (
    <html lang="en" className={`${raleway.variable} antialiased`}>
      <body className="bg-palettePinkLighter dark:bg-paletteTextDark">
        <AppProvider>
          <ClientLayoutWrapper user={user}>{children}</ClientLayoutWrapper>
        </AppProvider>
      </body>
    </html>
  );
}
