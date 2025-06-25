export type ProductCategory = "cake" | "bread" | "drink" | "pastry";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  alt_text: string;
  category?: ProductCategory;
  is_featured?: boolean;
}
