"use client"

import CartContent from "@/components/CartContent";
import { useAppContext } from "@/context/AppContext";
import { Loader2 } from "lucide-react";

export default function CartPage() {
  const {isCartPending} = useAppContext();

  return (
    <div className="relative">
      {isCartPending && (
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 flex items-center justify-center z-50">
          <Loader2 className="size-8 animate-spin text-paletteMaroonMedium" />
        </div>
      )}
  <CartContent />
    </div>
)
};

