import React from "react";
import { getFeaturedTestimonials } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

const TestimonialSection = async () => {
  const supabase = await createClient();
  const featuredTestimonials = await getFeaturedTestimonials(supabase);

  if (!featuredTestimonials || featuredTestimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-paletteMaroonDark dark:text-paletteMaroonRose mb-4 text-center">
        What Our Customers Say
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuredTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/testimonials">
          <span className="text-paletteMaroonMedium dark:text-paletteMaroonRose hover:underline font-medium cursor-pointer">
            More Reviews
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialSection;
