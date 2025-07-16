"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { LoaderCircle, Search, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { searchProducts } from "@/app/search/actions";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const categories = [
  { name: "Pastry", href: "/products/category/pastry" },
  { name: "Cake", href: "/products/category/cake" },
  { name: "Bread", href: "/products/category/bread" },
  { name: "Drink", href: "/products/category/drink" },
];

const SearchPanelContent = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isPending, setTransition] = useTransition();

  const { closePanel } = useAppContext();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length > 0) {
        setTransition(async () => {
          const products = await searchProducts(query);
          setResults(products);
        });
      } else {
        setResults([]);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      closePanel();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-6">Search Our Bakery</h2>

      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-paletteGrayMedium" />
          <Input
            placeholder="Search for cakes, pastries..."
            className="pl-10 h-12 text-md rounded-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isPending && (
            <LoaderCircle className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-paletteGrayMedium animate-spin" />
          )}
        </div>
      </form>

      <div className="mt-6 flex-grow overflow-y-auto">
        {query.length > 1 && results.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-paletteGrayDark dark:text-paletteGrayLight mb-2">
              Products
            </h3>
            <ul className="space-y-2">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.id}`}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-palettePinkLighter dark:hover:bg-paletteMaroonDark"
                  >
                    <Image
                      src={product.image_url || "/placeholder.png"}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-md object-cover"
                    />
                    <span className="font-medium">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {query.length > 1 && !isPending && results.length === 0 && (
          <div className="text-center py-10">
            <UtensilsCrossed className="mx-auto size-10 text-paletteGrayMedium mb-2" />
            <p className="font-semibold">
              No results found for &quot;{query}&quot;
            </p>
            <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
              Try a different search or browse our categories.
            </p>
          </div>
        )}

        {query.length <= 1 && (
          <div>
            <h3 className="text-sm font-semibold text-paletteGrayDark dark:text-paletteGrayLight mb-3">
              Popular Categories
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-center font-semibold p-4 rounded-lg bg-palettePinkLighter dark:bg-paletteMaroonDarkest hover:bg-palettePinkMedium dark:hover:bg-paletteMaroonDark transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
                e.g., &quot;Chocolate Cake&quot;, &quot;Sourdough&quot;,
                &quot;Croissants&quot;
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanelContent;
