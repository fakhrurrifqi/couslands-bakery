"use client";

import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {  X } from "lucide-react";
import QuantityInput from "@/components/QuantityInput";

const CartContent = () => {
  const { cartTotal, cartItems, removeFromCart } =
    useAppContext();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
        <Link
          href="/products"
          className="text-paletteMaroonMedium hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }
  return (
    <>
      <style>
        {`
          input[type=number]::-webkit-outer-spin-button,
          input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDarkest dark:text-paletteMaroonRose mb-8">
          Shopping Cart
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-paletteMaroonDarkest p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0 dark:border-paletteMaroonDark pb-6 last:border-b-0 last:pb-0"
                >
                  <Image
                    src={item.products.image_url}
                    alt={item.products.alt_text}
                    width={128}
                    height={128}
                    className="rounded-md object-cover w-32 h-32"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">
                      {item.products.name}
                    </h2>
                    <p className="text-paletteGrayDark dark:text-paletteGrayLight">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.products.price)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label htmlFor={`quantity-${item.id}`} className="sr-only">
                      Quantity
                    </label>
                    <QuantityInput itemId={item.id} initialQuantity={item.quantity} />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 bg-transparent hover:bg-red-100 dark:hover:bg-red-900/50 p-2 cursor-pointer"
                  >
                    <X className="size-5" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-paletteMaroonDarkest p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-semibold border-b dark:border-paletteMaroonDark pb-4 mb-4">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(cartTotal)}
                  </span>
                </div>
                <div className="flex justify-between text-paletteGrayDark dark:text-paletteGrayLight">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg border-t dark:border-paletteMaroonDark pt-4 mb-6">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(cartTotal)}
                </span>
              </div>
              <Button className="w-full bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white py-3 cursor-pointer">
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
