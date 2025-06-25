import HeroSection from "./HeroSection";
import TestimonialSection from "./TestimonialSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";

const HomeContents = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          Welcome To Cousland&apos;s Bakery!
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          This is the main landing page for Cousland&apos;s Bakery. Here
          you&apos;ll find our latest creations, customer favorites, and what
          makes our bakery special. Explore our offerings and taste the bliss!
        </p>
      </div>
      <div className="mb-12 sm:mb-16">
        <HeroSection />
      </div>
      <div className="mb-12 sm:mb-16">
        <TestimonialSection />
      </div>
      <div className="mb-12 sm:mb-16">
        <FeaturedProductsSection />
      </div>
    </div>
  );
};

export default HomeContents;
