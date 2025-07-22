import React from "react";
import { Metadata } from "next";
import { Truck, Undo } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Returns | Cousland's Bakery",
  description:
    "Information about our shipping options, delivery areas, and returns policy.",
};

function ShippingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose">
          Shipping & Returns
        </h1>
        <p className="text-lg mt-2 text-paletteGrayDark dark:text-paletteGrayLight">
          Everything you need to know about getting our treats to your door.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-4 mb-4">
            <Truck className="size-8 text-paletteMaroonMedium" />
            <h2 className="text-2xl font-semibold">Shipping Information</h2>
          </div>
          <div className="space-y-4 text-paletteGrayDark dark:text-paletteGrayLight">
            <p>
              To ensure our products arrive fresh and delicious, we have a few
              different shipping and delivery options. Please note that not all
              items are available for nationwide shipping.
            </p>
            <div>
              <h3 className="font-bold text-lg text-paletteTextDark dark:text-paletteTextLight">
                Local Delivery (Bakerville Area)
              </h3>
              <p>
                We offer local delivery within a 15-mile radius of our bakery.
                Delivery fees are calculated at checkout based on distance.
                Orders are typically delivered within 1-2 business days.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-paletteTextDark dark:text-paletteTextLight">
                Nationwide Shipping
              </h3>
              <p>
                We ship a selection of our more durable goods, such as cookies,
                brownies, and select breads, across the United States. We use
                2-day priority shipping to ensure freshness. Shipping costs are
                calculated at checkout. We currently do not ship highly
                perishable items like frosted cakes or cheesecakes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-paletteTextDark dark:text-paletteTextLight">
                In-Store Pickup
              </h3>
              <p>
                You can always place an order online and select &quot;In-Store
                Pickup&quot; at checkout to collect your items from our bakery
                at 123 Sweet Street, Bakerville, CA, at no additional cost.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <Undo className="size-8 text-paletteMaroonMedium" />
            <h2 className="text-2xl font-semibold">Returns & Refunds</h2>
          </div>
          <div className="space-y-4 text-paletteGrayDark dark:text-paletteGrayLight">
            <p>
              Your satisfaction is our top priority. Due to the perishable
              nature of our products, we cannot accept returns. However, if you
              are unsatisfied with your order for any reason, please contact us
              within 24 hours of receiving it.
            </p>
            <p>
              Please email us at{" "}
              <a
                href="mailto:support@couslandsbakery.com"
                className="text-paletteMaroonMedium hover:underline"
              >
                support@couslandsbakery.com
              </a>{" "}
              with your order number and a description of the issue, including
              photos if possible. We will do our best to resolve the situation,
              which may include a replacement or a refund on a case-by-case
              basis.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShippingPage;
