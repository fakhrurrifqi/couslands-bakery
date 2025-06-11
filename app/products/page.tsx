import React from "react";
import { getAllProducts, Product } from "@/lib/product";
import ProductsContent from "@/components/ProductsContent";

const page = () => {
  const allProductsData: Product[] = getAllProducts();
  return <ProductsContent products={allProductsData} />;
};

export default page;
