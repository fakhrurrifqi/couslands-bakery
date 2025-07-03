import { createClient as createRequestClient } from "./supabase/server";
import { Product, CartItem } from "@/lib/types";
import { SupabaseClient } from "@supabase/supabase-js";

function makeProductSerializable(product: unknown): Product {
  if (
    !product ||
    typeof product !== "object" ||
    product === null ||
    !("id" in product)
  ) {
    return {} as Product;
  }
  const p = product as {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    alt_text: string;
    category: string;
    is_featured: boolean;
    created_at?: string;
  };
  return {
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    image_url: p.image_url,
    alt_text: p.alt_text,
    category: p.category as Product["category"],
    is_featured: p.is_featured,
    created_at: p.created_at
      ? new Date(p.created_at).toISOString()
      : new Date().toISOString(),
  };
}

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

  return (products || []).map(makeProductSerializable);
}

export async function getFeaturedProducts(
  supabase: SupabaseClient
): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true)
    .limit(3);

  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return (products || []).map(makeProductSerializable);
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
    console.error("Supabase Data Error:", error.message);
    return null;
  }
  if (!product) return null;
  return makeProductSerializable(product);
}

export async function getCartItems(): Promise<CartItem[]> {
  const supabase = await createRequestClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("carts")
    .select(`id, user_id, quantity, products(id,
        name,
        description,
        price,
        image_url,
        alt_text,
        category,
        is_featured,
        created_at)`)
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase Cart Fetch Error:", error.message);
    throw new Error("Could not fetch cart items.");
  }

  if (!data) {
    return [];
  }


  const result: CartItem[] = data
    .filter((item) => item.products && typeof item.products === "object")
    .map((item) => {
      const product = makeProductSerializable(
        Array.isArray(item.products) ? item.products[0] : item.products
      );

      return {
        id: Number(item.id),
        user_id: String(item.user_id),
        quantity: Number(item.quantity),
        products: product,
      };
    });

  return JSON.parse(JSON.stringify(result));
}
