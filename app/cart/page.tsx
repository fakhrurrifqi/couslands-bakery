import CartContent from "@/components/CartContent";
import { getCartItems } from "@/lib/data";


export default async function CartPage() {
 const cartItems = await getCartItems();
  return <CartContent initialCartItems={cartItems} />
};

