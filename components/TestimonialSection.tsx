import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-paletteMaroonDark dark:text-paletteMaroonRose mb-4 text-center">
        What Our Customers Say
      </h3>
      <blockquote className="text-center italic text-paletteGrayDark dark:text-paletteGrayLight text-lg">
        <p>
          &quot;The cake I had was absolutely divine! It was moist, rich, and
          incredibly indulgent. Cousland&apos;s Bakery is my new favorite!&quot;
        </p>
        <cite className="block mt-2 not-italic font-semibold">
          - Hari Button
        </cite>
      </blockquote>
      <div className="text-center mt-6">
        <button className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium">
          More Reviews
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
