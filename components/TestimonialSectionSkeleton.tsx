import React from "react";
import TetsimonialCardSkeleton from "@/components/TetsimonialCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const TestimonialSectionSkeleton = () => {
  return (
    <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl">
      <Skeleton className="h-8 w-3/4 sm:w-1/2 mx-auto mb-6 bg-palettePinkLight dark:bg-paletteMaroonDark" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TetsimonialCardSkeleton />
        <TetsimonialCardSkeleton />
      </div>

      <div className="text-center mt-8">
        <Skeleton className="h-6 w-32 mx-auto bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </div>
    </div>
  );
};

export default TestimonialSectionSkeleton;
