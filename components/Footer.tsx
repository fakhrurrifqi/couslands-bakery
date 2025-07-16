"use client";

import React from "react";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //handle the newsletter submission
    alert("Thank you for subscribing!");
  };
  return (
    <footer className="bg-paletteMaroonDarkest text-palettePinkLighter border-t-4 border-paletteMaroonDark">
      <div className="contaner mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/CB_logo_dark.svg"
                alt="Cousland's Bakery Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-sm opacity-80">
              Baking moments of joy since 2018. Handcrafted with love and the
              finest ingredients.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-paletteMaroonRose transition-colors"
              >
                <SiFacebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-paletteMaroonRose transition-colors"
              >
                <SiInstagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter/X"
                className="hover:text-paletteMaroonRose transition-colors"
              >
                <SiX size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Youtube"
                className="hover:text-paletteMaroonRose transition-colors"
              >
                <SiYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">
              Shop
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-paletteMaroonRose transition-colors">
                <Link href="/products/category/cake">Cakes</Link>
              </li>
              <li className="hover:text-paletteMaroonRose transition-colors">
                <Link href="/products/category/pastry">Pastries</Link>
              </li>
              <li className="hover:text-paletteMaroonRose transition-colors">
                <Link href="/products/category/bread">Breads</Link>
              </li>
              <li className="hover:text-paletteMaroonRose transition-colors">
                <Link href="/products/category/drink">Drinks</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-paletteMaroonRose transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-paletteMaroonRose transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-paletteMaroonRose transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-paletteMaroonRose transition-colors"
                >
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wider uppercase">
              Join Our Newsletter
            </h4>
            <p className="text-sm opacity-80">
              Get exclusive offers and baking tips straight to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-paletteMaroonDark border-paletteMaroonMedium text-white placeholder:text-paletteGrayLight flex-grow focus:ring-paletteMaroonRose"
              />
              <Button
                type="submit"
                className="bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white shrink-0"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-paletteMaroonDark pt-8 text-center text-sm opacity-70">
          <p>
            &copy; {currentYear} Cousland&apos;s Bakery. All Rights Reserved.
          </p>
          <p className="mt-1">
            123 Sweet Street, Bakerville, CA | (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
