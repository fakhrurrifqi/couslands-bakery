import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Cousland's Bakery",
  description:
    "Find answers to frequently asked questions about our products, ordering, and shipping.",
};

function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-paletteGrayDark dark:text-paletteMaroonRose">
          Frequently Asked Questions
        </h1>
        <p className="text-lg mt-2 text-paletteGrayDark dark:text-paletteGrayLight">
          Have a question? We&apos;re here to help.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            Do you offer gluten-free options?
          </AccordionTrigger>
          <AccordionContent className="text-base text-paletteGrayDark dark:text-paletteGrayLight">
            Yes! We have a dedicated selection of gluten-free cakes and
            pastries. While we take precautions to prevent cross-contamination,
            please be aware that our kitchen handles gluten. You can find all
            gluten-free items under their respective categories, marked with a
            special symbol.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            How far in advance do I need to place a custom cake order?
          </AccordionTrigger>
          <AccordionContent className="text-base text-paletteGrayDark dark:text-paletteGrayLight">
            For custom cake orders, we recommend placing your order at least one
            week in advance. For intricate designs or large event cakes, two to
            three weeks is preferred to ensure we can give your creation the
            attention it deserves.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            What is your shipping policy?
          </AccordionTrigger>
          <AccordionContent className="text-base text-paletteGrayDark dark:text-paletteGrayLight">
            We currently ship a selection of our hardier goods, like cookies and
            certain breads, nationwide. Perishable items like frosted cakes are
            available for local delivery or in-store pickup only. Please see our
            Shipping & Returns page for more detailed information.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            How should I store my baked goods?
          </AccordionTrigger>
          <AccordionContent className="text-base text-paletteGrayDark dark:text-paletteGrayLight">
            For maximum freshness, we recommend storing cakes and pastries in an
            airtight container in the refrigerator for up to 3 days. Breads
            should be kept in a cool, dry place in their original packaging or a
            bread box. All items are best enjoyed at room temperature.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold">
            Can I include a gift message with my order?
          </AccordionTrigger>
          <AccordionContent className="text-base text-paletteGrayDark dark:text-paletteGrayLight">
            Absolutely! During the checkout process, you will have the option to
            add a personalized gift message. We&apos;ll handwrite it on a lovely
            card to include with your order.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQPage;
