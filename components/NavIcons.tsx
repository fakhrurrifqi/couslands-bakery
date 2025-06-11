"use client";

import { Button } from "@/components/ui/button";
import { Moon, Search, User, ShoppingCart, Sun } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export const NavIcons = () => {
  const { theme, toggleTheme, openPanel, cartCount } = useAppContext();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        className="p-2 rounded-md text-white hover:bg-paletteMaroonDark transition"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </Button>
      <Button
        className="p-2 rounded-md text-white hover:bg-paletteMaroonDark transition"
        aria-label="Search"
        onClick={() => openPanel("search")}
      >
        <Search size={18} />
      </Button>
      <Button
        className="p-2 rounded-md text-white hover:bg-paletteMaroonDark transition"
        aria-label="Account"
        onClick={() => openPanel("account")}
      >
        <User size={18} />
      </Button>
      <Button
        className="relative cp-2 rounded-md text-white hover:bg-paletteMaroonDark transition"
        aria-label="Cart"
        onClick={() => openPanel("cart")}
      >
        <span className="relative">
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 size-4 rounded-full bg-paletteMaroonRose text-xs font-bold text-white flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {cartCount}
            </span>
          )}
        </span>
      </Button>
    </div>
  );
};
