"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent } from "react";
import { Input } from "./ui/input";

function SearchPageInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("q") || "";

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("q") as string;

    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push("/search");
    }
  };
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-lg mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-paletteGrayMedium" />
      <Input
        name="q"
        defaultValue={defaultQuery}
        placeholder="Search for cakes, pastries..."
        className="w-full h-14 pl-12 pr-4 text-lg rounded-full border-2 border-paletteGrayLight focus:border-paletteMaroonMedium focus:ring-paletteMaroonMedium"
        autoComplete="off"
      />
    </form>
  );
}

export default SearchPageInput;
