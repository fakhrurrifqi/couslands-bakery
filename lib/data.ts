import { createClient } from "./supabase/server";
import { Product } from "@/lib/types";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getAllProducts(
  supabase: SupabaseClient
): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error("Could not fetch products.");
  }

  return products as Product[];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true)
    .limit(3);

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return products as Product[];
}

export async function getProductById(
  supabase: SupabaseClient,
  id: string
): Promise<Product | null> {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      console.log(`Product with id ${id} not found.`);
      return null;
    }
    console.error("Supabase Data Error:", error.message);
    throw new Error("Could not fetch product.");
  }
  return product as Product | null;
}
