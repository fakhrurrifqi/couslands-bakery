import React from "react";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex flex-col items-center space-y-3">
          <Skeleton className="h-10 w-3/4 md:w-1/2 bg-palettePinkLight dark:bg-paletteMaroonDark" />
          <Skeleton className="h-5 w-full md:w-3/4 bg-palettePinkLight dark:bg-paletteMaroonDark" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsLoading;
