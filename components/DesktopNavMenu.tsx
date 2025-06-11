"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "/products" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const DesktopNavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {navItems.map((item) => {
        const isActive =
          (item.href === "/" && pathname === "/") || // For the homepage
          (item.href !== "/" && pathname.startsWith(item.href)); // For all other pages

        return (
          <Link
            href={item.href} // Use href directly
            key={item.id}
            className={clsx(
              "px-2 py-1 rounded whitespace-nowrap hover:bg-paletteMaroonDark transition",
              isActive && "active-nav-link"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
