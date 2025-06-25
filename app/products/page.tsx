import React from "react";
import ProductsContent from "@/components/ProductsContent";
import { getAllProducts } from "@/lib/data";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our delicious range of cakes, pastries, and more.",
};

const ProductPage = async () => {
  const supabase = await createClient();
  const allProductsData = await getAllProducts(supabase);
  return <ProductsContent products={allProductsData} />;
};

export default ProductPage;
