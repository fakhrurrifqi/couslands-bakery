import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { NavItem } from "./DesktopNavMenu";

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "/products" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const MobileNavMenu = () => {
  const { setIsMobileMenuOpen } = useAppContext();
  return (
    <nav className="block space-y-3">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`${item.href}`}
          className="block px-4 py-2 rounded hover:bg-paletteMaroonDark transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
