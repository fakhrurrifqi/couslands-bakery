import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg bg-white dark:bg-paletteMaroonDarkest">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-56 bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Skeleton className="h-6 w-3/4 mb-2 bg-palettePinkLight dark:bg-paletteMaroonDark" />
        <Skeleton className="h-4 w-full bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col space-y-4 items-start">
        <Skeleton className="h-7 w-1/4 bg-palettePinkLight dark:bg-paletteMaroonDark" />
        <Skeleton className="h-10 w-full rounded-lg bg-palettePinkLight dark:bg-paletteMaroonDark" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
