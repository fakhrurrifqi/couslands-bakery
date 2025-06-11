"use client";

import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentYear] = useState<number>(new Date().getFullYear());
  return (
    <footer className="bg-paletteMaroonDarkest text-palettePinkLighter py-8 sm:py-12">
      <div className="container mx-auto text-center sm:px-6 px-4 lg:px-8">
        <p className="mb-2">&copy; {currentYear} Cousland&apos;s Bakery</p>
        <p className="text-sm opacity-80">
          123 Sweet Street, Bakerville, CA | (555) 123-4567
        </p>
        <div className="mt-4 space-x-4">
          <Link href="#" className="hover:text-paletteMaroonRose">
            Facebook
          </Link>
          <Link href="#" className="hover:text-paletteMaroonRose">
            Instagram
          </Link>
          <Link href="#" className="hover:text-paletteMaroonRose">
            Tiktok
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
