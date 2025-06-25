"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Product } from "@/lib/types";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col bg-white dark:bg-paletteMaroonDarkest rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group cursor-pointer"
    >
      <div className="relative w-full h-56">
        <Image
          src={product.image_url}
          alt={product.alt_text}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold text-paletteTextDark dark:text-paletteTextLight mb-2 group-hover:text-paletteMaroonMedium dark:group-hover:text-paletteMaroonRose">
          {product.name}
        </h4>
        <p className="text-paletteGrayDark dark:text-paletteGrayLight text-sm my-2">
          {product.description}
        </p>
        {/* <div className="flex-grow" /> */}
        <div className="mt-auto pt-4">
          <p className="text-lg font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-4">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <Button
            onClick={handleAddToCart}
            className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white font-semibold py-2 px-4 rounded-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};
