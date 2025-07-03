import React from "react";
import { ProductCard } from "./ProductCard";
import { getFeaturedProducts } from "@/lib/data";
import { Product } from "@/lib/types";
import Link from "next/link";
import { SupabaseClient } from "@supabase/supabase-js";

const adaptProductToCardProps = (product: Product): Product => ({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price,
  image_url: product.image_url,
  alt_text: product.alt_text,
  created_at: product.created_at
});

interface FeaturedProductsSectionProps {
  supabase: SupabaseClient;
}

export default async function FeaturedProductsSection({supabase}: FeaturedProductsSectionProps) {
  const featuredProductsData = await getFeaturedProducts(supabase);
  const productsForCards = featuredProductsData.map(adaptProductToCardProps);

  if (!productsForCards || productsForCards.length === 0) {
    return <p>No featured products at the moment.</p>;
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-paletteMaroonDark dark:text-paletteMaroonRose mb-6 text-center">
        Featured Delights
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {productsForCards.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href="/products" className="flex justify-center mt-6">
        <h4 className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium">
          All Products →
        </h4>
      </Link>
    </div>
  );
}
