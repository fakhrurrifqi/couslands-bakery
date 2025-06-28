import { useAppContext } from "@/context/AppContext";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CartPanelContent = () => {
  const { cartItems, removeFromCart, cartTotal, closePanel } = useAppContext();
  const router = {
    push: (href: string) => {
      window.location.href = href;
      closePanel();
    },
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-grow space-y-4 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.products.image_url}
                  alt={item.products.alt_text}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-sm">
                    {item.products.name}
                  </h3>
                  <p className="text-sm text-paletteGrayDark dark:text-paletteGrayLight">
                    {item.quantity} x{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.products.price)}
                  </p>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
                >
                  <X />
                </Button>
              </div>
            ))}
          </div>
          <div className="border-t dark:border-paletteMaroonDark mt-6 pt-4">
            <div className="flex justify-between font-semibold mb-4">
              <span>Subtotal:</span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(cartTotal)}
              </span>
            </div>
            <Button
              onClick={() => router.push("/cart")}
              className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white"
            >
              View Full Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPanelContent;
