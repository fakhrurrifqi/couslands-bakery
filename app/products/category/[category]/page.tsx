import { getProductsByCategory } from "@/lib/data";
import ProductsContent from "@/components/ProductsContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  const capitalizedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return {
    title: `${capitalizedCategory} | Cousland's Bakery`,
    description: `Browse our delicious selection of ${categoryName}.`,
  };
}
export default async function CategoryPage({ params }: Props) {
  const supabase = await createClient();
  const { category } = await params;
  const categoryName = decodeURIComponent(category);
  const products = await getProductsByCategory(categoryName, supabase);

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h1 className="text-3xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-4">
          No Products Found
        </h1>
        <p className="text-lg text-paletteGrayDark dark:text-paletteGrayLight mb-6">
          We don&apos;t have any products in the &quot;{categoryName}&quot;
          category right now.
        </p>
        <Link
          href="/products"
          className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium"
        >
          &larr; Browse all products
        </Link>
      </div>
    );
  }

  if (!products) {
    notFound();
  }

  const capitalizedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return (
    <div>
      <div className="text-center my-8 sm:my-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          {capitalizedCategory}
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          Freshly baked and ready to enjoy. Explore our selection of{" "}
          {categoryName}.
        </p>
      </div>
      <ProductsContent products={products} />
    </div>
  );
}
