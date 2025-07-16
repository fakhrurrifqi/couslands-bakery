"use server";

import { createClient } from "@/lib/supabase/server";
import { Product } from "@/lib/types";

export async function searchProducts(query: string): Promise<Product[]> {
  if (!query) {
    return [];
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, image_url, category, description, price, alt_text, created_at"
    )
    .ilike("name", `%${query}%`)
    .limit(10);

  if (error) {
    console.error("Error searching products:", error);
    return [];
  }

  return data || [];
}
