import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedProductsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-1/2 mx-auto mb-6 bg-palettePinkLight dark:bg-paletteMaroonDark" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
      <div className="flex justify-center mt-6">
        <Skeleton className="h-6 w-32 bg-palettePinkLighter dark:bg-paletteMaroonDark" />
      </div>
    </div>
  );
};

export default FeaturedProductsSkeleton;
