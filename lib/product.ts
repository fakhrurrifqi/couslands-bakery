export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  altText: string;
  category?: string;
  isFeatured?: boolean;
}

export const initialProducts: Product[] = [
  {
    id: "cb001",
    name: "Chocolate Dream Cake",
    description: "Rich dark chocolate layers with a creamy ganache",
    price: 25,
    imageUrl:
      "https://placehold.co/250x180/F4C2C8/4D0E18?text=Delicious+Sweet+Bliss+Cake",
    altText: "A freshly baked Choco dream cake",
    category: "Cakes",
    isFeatured: true,
  },
  {
    id: "cb002",
    name: "Classic Croissants (Box of 4)",
    description:
      "Flaky, buttery croissants, baked fresh daily. The perfect breakfast treat.",
    price: 15,
    imageUrl:
      "https://placehold.co/250x180/F4C2C8/4D0E18?text=Delicious+Sweet+Bliss+Cake",
    altText: "A box of four golden brown croissants",
    category: "Pastries",
    isFeatured: true,
  },
  {
    id: "cb003",
    name: "Artisan Sourdough Loaf",
    description:
      "Naturally leavened bread with a crispy crust and chewy interior. Made with locally sourced organic flour.",
    price: 7.5,
    imageUrl:
      "https://placehold.co/250x180/F4C2C8/4D0E18?text=Delicious+Sweet+Bliss+Cake",
    altText: "A freshly baked artisan sourdough loaf",
    category: "Breads",
    isFeatured: true,
  },
  {
    id: "cb004",
    name: "Signature Chocolate Cake",
    description: "Our best-selling rich chocolate cake.",
    price: 30,
    imageUrl:
      "https://placehold.co/400x300/841F34/FBEDEF?text=Signature+Chocolate+Cake",
    altText: "Signature Chocolate Cake",
    category: "Cakes",
    isFeatured: false,
  },
  {
    id: "cb005",
    name: "Fresh Strawberry Shortcake",
    description: "Fresh strawberries and light cream.",
    price: 28,
    imageUrl:
      "https://placehold.co/400x300/BF3148/FBEDEF?text=Fresh+Strawberry+Shortcake",
    altText: "Fresh Strawberry Shortcake",
    category: "Cakes",
    isFeatured: false,
  },
  {
    id: "cb006",
    name: "Zesty Lemon Tart Pastries",
    description: "Zesty lemon curd in a buttery crust.",
    price: 4.5,
    imageUrl:
      "https://placehold.co/400x300/E85972/FBEDEF?text=Zesty+Lemon+Tart+Pastries",
    altText: "Zesty Lemon Tart Pastries",
    category: "Pastries",
    isFeatured: false,
  },
  {
    id: "cb007",
    name: "Assorted Gourmet Cookies",
    description: "A dozen of our finest cookies.",
    price: 20.00,
    imageUrl:
      "https://placehold.co/400x300/4D0E18/FBEDEF?text=Assorted+Gourmet+Cookies",
    altText: "Assorted Gourmet Cookies Box",
    category: "Cakes",
    isFeatured: false,
  },
  {
    id: "cb008",
    name: "Blueberry Bliss Scones",
    description: "Fluffy scones packed with blueberries.",
    price: 3.5,
    imageUrl:
      "https://placehold.co/400x300/841F34/FBEDEF?text=Blueberry+Scones",
    altText: "Blueberry Bliss Scones",
    category: "Cakes",
    isFeatured: false,
  },
  {
    id: "cb009",
    name: "Caramel Pecan Rolls",
    description: "Sweet rolls with caramel and pecans.",
    price: 4,
    imageUrl:
      "https://placehold.co/400x300/BF3148/FBEDEF?text=Caramel+Pecan+Rolls",
    altText: "Caramel Pecan Rolls",
    category: "Cakes",
    isFeatured: false,
  },
];

// Optional: functions to get all products or a single product
export const getAllProducts = (): Product[] => initialProducts;
export const getFeaturedProducts = (): Product[] =>
  initialProducts.filter((product) => product.isFeatured);
export const getProductById = (id: string): Product | undefined =>
  initialProducts.find((product) => product.id === id);
