"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  const { theme } = useAppContext();

  const cardBaseClasses =
    "rounded-xl shadow-2xl p-6 sm:p-10 md:p-12 text-center max-w-3xl mx-auto";
  const cardThemeClasses =
    theme === "light"
      ? "bg-paletteTextDark text-paletteTextLight"
      : "bg-palettePinkLighter text-paletteTextDark";

  const learnMoreBase =
    "btn-secondary w-full sm:w-auto font-bold py-5 px-6 rounded-lg text-lg  border-2";
  const learnMoreTheme =
    theme === "light"
      ? "border border-paletteTextLight text-paletteTextLight hover:bg-paletteTextLight hover:text-paletteMaroonDarkest"
      : "border border-paletteTextDark text-paletteTextDark hover:bg-paletteTextDark hover:text-palettePinkLighter";

  const buyNowBase =
    "btn-primary w-full sm:w-auto font-bold py-5 px-6 rounded-lg text-lg";
  const buyNowTheme =
    theme === "light"
      ? "bg-paletteTextLight text-paletteMaroonDarkest hover:bg-palettePinkLighter"
      : "bg-paletteMaroonDarkest text-paletteTextLight hover:bg-paletteTextDark";
  return (
    <div className={`${cardBaseClasses} ${cardThemeClasses}`}>
      <Image
        src="https://placehold.co/250x180/F4C2C8/4D0E18?text=Delicious+Sweet+Bliss+Cake"
        alt="Sweet Bliss Cake - A delicious signature cake from Cousland's Bakery"
        width={250}
        height={180}
        className="mx-auto mb-6 rounded-lg shadow-lg"
      />
      <h2 className="text-4xl sm:text-5xl font-bold mb-3">Sweet Bliss</h2>
      <p className="text-xl sm:text-2xl mb-8">
        Indulge in a slice of happiness at our cake shop!
      </p>
      <div className="space-y-3 sm:space-y-0 sm:space-x-4">
        <Button className={`${learnMoreBase} ${learnMoreTheme}`}>
          Learn More
        </Button>
        <Button className={`${buyNowBase} ${buyNowTheme}`}>Buy Now</Button>
      </div>
    </div>
  );
};

export default HeroSection;
