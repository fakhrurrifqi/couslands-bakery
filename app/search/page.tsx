import { searchAllProducts } from "@/lib/data";
import ProductsContent from "@/components/ProductsContent";
import { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SearchPageInput from "@/components/SearchPageInput";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata for the search page
export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";
  return {
    title: `Search results for "${query}"`,
    description: `Find the best cakes, pastries, and bread at Cousland's Bakery.`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const supabase = await createClient();
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";
  const products = await searchAllProducts(query, supabase);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-8">
        <Link
          href="/products"
          className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium"
        >
          &larr; Back to all products
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mt-4">
          Search Results
        </h1>
        {query ? (
          <p className="text-lg text-paletteGrayDark dark:text-paletteGrayLight mt-1">
            Showing results for:{" "}
            <span className="font-semibold">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="text-lg text-paletteGrayDark dark:text-paletteGrayLight mt-1">
            Please enter a search term to find products.
          </p>
        )}
      </div>

      <div className="mb-12">
        <SearchPageInput />
      </div>

      {products.length > 0 ? (
        <ProductsContent products={products} />
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-semibold">No products found</p>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight mt-2">
            We couldn&apos;t find any products matching your search. Try a
            different term!
          </p>
        </div>
      )}
    </div>
  );
}
