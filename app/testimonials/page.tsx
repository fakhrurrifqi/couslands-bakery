import React from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllTestimonials } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Our Customers Say",
  description: "Read reviews and testimonials from our happy customers.",
};

export default async function TestimonialsPage() {
  const supabase = await createClient();
  const testimonials = await getAllTestimonials(supabase);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          What Our Customer Say
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          We love our customers, and we&apos;re proud to share their feedback.
          Here&apos;s what people are saying about their experiences at
          Cousland&apos;s Bakery.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
