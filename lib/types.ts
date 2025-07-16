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
  created_at: string;
}

export interface CartItem {
  id: number;
  user_id: string;
  quantity: number;
  products: Product;
}

export interface SerializableUser {
  id: string;
  email?: string;
  name?: string;
}

export interface Testimonial {
  id: number;
  created_at: string;
  author_name: string;
  quote: string;
  avatar_url?: string;
  rating?: number;
  is_featured?: boolean;
}

export interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  phone_number: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state_province: string | null;
  postal_code: string | null;
  country: string | null;
}
