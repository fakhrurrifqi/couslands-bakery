"use client";

import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchPanelContent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Search Our Bakery</h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-paletteGrayMedium" />
        <Input
          placeholder="Search for cakes, pastries..."
          className="pl-10 h-12 text-md rounded-full"
        />
      </div>
      <div className="mt-6">
        <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
          e.g., &quot;Chocolate Cake&quot;, &quot;Sourdough&quot;,
          &quot;Croissants&quot;
        </p>
      </div>
    </div>
  );
};

export default SearchPanelContent;
