import React from "react";
import { Testimonial } from "@/lib/types";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-paletteMaroonDarkest p-6 rounded-lg shadow-lg">
      <blockquote className="flex flex-col h-full">
        <div className="flex-grow">
          <p className="text-paletteGrayDark dark:text-paletteGrayLight italic">
            &quot;{testimonial.quote}&quot;
          </p>
        </div>
        <footer className="mt-4 flex items-center">
          <Image
            src={
              testimonial.avatar_url ||
              "https://placehold.co/40x40/F4C2C8/4D0E18?text=CB"
            }
            alt={testimonial.author_name}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          <cite className="not-italic font-semibold text-paletteTextDark dark:text-paletteTextLight">
            - {testimonial.author_name}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
