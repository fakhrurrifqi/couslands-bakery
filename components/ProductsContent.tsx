"use client";

import React from "react";
import { Product } from "@/lib/product";
import { ProductCard } from "./ProductCard";

interface ProductsContentProps {
  products: Product[];
}

const adaptProductToCardProps = (product: Product): Product => ({
  id: product.id,
  name: product.name,
  description: product.description,
  price: product.price,
  imageUrl: product.imageUrl,
  altText: product.altText,
});

const ProductsContent: React.FC<ProductsContentProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-center py-10">
        No products available at the moment. Please check back soon!
      </p>
    );
  }

  const productsForCards: Product[] = products.map(adaptProductToCardProps);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          Our Delicious Products
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          Browse our full range of cakes, cupcakes, pastries, and more. Each
          item is baked with love and the finest ingredients. Find your new
          favorite treat today!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:gris-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {productsForCards.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContent;
