import React from "react";
import MonthlySalesChart from "@/components/MonthlySalesChart";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12 py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          About Cousland&apos;s Bakery
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          Learn more about our passion for baking, our history, and the values
          that drive us. We believe in quality ingredients, traditional recipes,
          and a sprinkle of innovation in everything we create.
        </p>
      </div>
      <div className="bg-white dark:bg-paletteMaroonDarkest rounded-lg p-6 sm:p-8 shadow-xl mb-8">
        <h2 className="text-2xl font-semibold text-paletteTextDark dark:text-paletteTextLight mb-4">
          Our Story
        </h2>
        <p className="text-paletteGrayDark dark:text-paletteGrayLight mb-4 leading-relaxed">
          Cousland&apos;s Bakery started as a small family dream, born from a
          love of sharing delightful baked goods with our community. For
          generations, our family recipes have been passed down, each one
          perfected with care and a commitment to quality. We opened our first
          small shop over 20 years ago, and thanks to the wonderful support of
          our customers, we&apos;ve grown into a beloved local bakery known for
          its warm atmosphere and delicious treats.
        </p>
        <p className="text-paletteGrayDark dark:text-paletteGrayLight leading-relaxed">
          Our mission is simple: to bring joy to your day with every bite. We
          use only the freshest, locally-sourced ingredients whenever possible,
          and every cake, pastry, and cookie is handcrafted with precision and
          passion by our talented team of bakers.
        </p>
      </div>
      <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl">
        <MonthlySalesChart />
      </div>
    </div>
  );
};

export default AboutPage;
