import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TetsimonialCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-paletteMaroonDarkest p-6 rounded-lg shadow-lg">
      <div className="space-y-3">
        <Skeleton className="h-4 w-full bg-palettePinkLight dark:bg-paletteMaroonDark" />
        <Skeleton className="h-4 w-full bg-palettePinkLight dark:bg-paletteMaroonDark" />
        <Skeleton className="h-4 w-3/4 bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </div>
      <div className="mt-4 flex items-center">
        <Skeleton className="size-10 rounded-full mr-4 bg-palettePinkLight dark:bg-paletteMaroonDark" />
        <Skeleton className="h-5 w-1/2 bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </div>
    </div>
  );
};

export default TetsimonialCardSkeleton;
