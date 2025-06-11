import React from "react";
import type { Metadata } from "next";
import { getProductById, getAllProducts } from "@/lib/product";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function geenrateMetaData({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.altText}
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-4">
            {product.name}
          </h1>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight text-lg mb-6 h-10 leading-relaxed">
            {product.description}
          </p>
          <p className="text-3xl font-bold text-paletteTextDark dark:text-paletteTextLight mb-6">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <Button className="w-full max-w-sm bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white text-lg font-semibold py-3 px-6 rounded-lg">
            Add to Cart
          </Button>
          <Link href="/products" className="mt-6">
            <h4 className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium">
              &#8592; All Products
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
