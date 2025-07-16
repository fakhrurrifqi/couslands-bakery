"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { User, Menu, X, Search, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { MobileNavMenu } from "./MobileNavMenu";
import { NavIcons } from "@/components/NavIcons";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const {
    setIsMobileMenuOpen,
    isMobileMenuOpen,
    openPanel,
    cartCount,
    toggleTheme,
    theme,
  } = useAppContext();

  return (
    <header className="bg-paletteMaroonDarkest text-paletteTextLight top-0 z-50 sticky shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <button
            className="lg:hidden w-fit p-2 rounded-md text-white hover:bg-paletteMaroonDark transition col-start-1 justify-start"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden lg:flex">
            <DesktopNavMenu />
          </div>

          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/CB_logo_dark.svg"
                alt="Cousland's Bakery Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div className="flex justify-end items-center gap-3">
            <div className="hidden lg:flex">
              <NavIcons />
            </div>
            <Button
              className="relative lg:hidden cp-2 rounded-md text-white hover:bg-paletteMaroonDark transition"
              aria-label="Cart"
              onClick={() => openPanel("cart")}
            >
              <span className="relative">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 size-4 rounded-full bg-paletteMaroonRose text-[10px] font-bold text-white flex items-center justify-center leading-none pointer-events-none">
                    {cartCount}
                  </span>
                )}
              </span>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-paletteMaroonDarkest/95 w-full shadow-lg px-4 py-3 space-y-4"
            >
              <div className="flex items-center gap-2 border border-white focus-within:outline focus-within:outline-offset-2 focus-within:outline-paletteMaroonRose text-white rounded-full px-3 py-1.5 w-full bg-paletteMaroonDarkest">
                <Search />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent focus:outline-none text-sm flex-1"
                />
              </div>

              <MobileNavMenu />

              <hr className="border-white/20" />

              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="flex w-full justify-start items-center gap-2 !px-4 !py-3 bg-paletteMaroonDarkest hover:bg-paletteMaroonDark/95 transition rounded-md text-left text-white cursor-pointer"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                <span>
                  Switch to {theme === "light" ? "Dark" : "Light"} Mode
                </span>
              </Button>

              <Link
                href="/account"
                className="flex items-center gap-2 px-4 py-3 bg-paletteMaroonDarkest hover:bg-paletteMaroonDark/95 transition rounded-md"
              >
                <User size={18} />
                <span>Account</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
