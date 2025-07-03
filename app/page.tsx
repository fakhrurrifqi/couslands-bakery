import HomeContents from "@/components/HomeContents";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Welcome to Cousland's Bakery",
  description: "Discover the sweet bliss of our freshly baked goods.",
};

export default async function HomePage() {
  const supabase = await createClient();
  return <HomeContents supabase={supabase} />;
}
