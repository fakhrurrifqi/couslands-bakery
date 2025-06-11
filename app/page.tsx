import HomeContents from "@/components/HomeContents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Cousland's Bakery",
  description: "Discover the sweet bliss of our freshly baked goods.",
};

export default function HomePage() {
  return <HomeContents />;
}
