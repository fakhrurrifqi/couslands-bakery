import React from "react";
import ContactForm from "@/components/ContactForm";
import BakeryMap from "@/components/BakeryMap";

const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-12 py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose mb-3">
          Get In Touch
        </h1>
        <p className="text-md sm:text-lg text-paletteGrayDark dark:text-paletteGrayLight max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question, a
          special request, or just want to say hello, feel free to reach out.
          Visit us at our store or send us a message.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-paletteTextDark dark:text-paletteTextLight mb-6">
            Send Us a Message
          </h2>
          <ContactForm />
        </div>
        <div className="bg-white dark:bg-paletteMaroonDarkest p-6 sm:p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-paletteTextDark dark:text-paletteTextLight mb-6">
            Visit Us
          </h2>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight mb-2">
            <strong className="font-medium">Address:</strong> 123 Sweet Street,
            Bakerville, CA 90210
          </p>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight mb-2">
            <strong className="font-medium">Phone:</strong> (555) 123-4567
          </p>
          <p className="text-paletteGrayDark dark:text-paletteGrayLight mb-2">
            <strong className="font-medium">Email:</strong>{" "}
            contact@couslandsbakery.com
          </p>
          <h3 className="text-xl font-semibold text-paletteTextDark dark:text-paletteTextLight mb-2">
            Hours
          </h3>
          <ul className="list-disc list-inside text-paletteGrayDark dark:text-paletteGrayLight">
            <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
            <li>Saturday: 8:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
          <div className="mt-6 h-64 bg-paletteGrayLight dark:bg-paletteMaroonDark rounded-md flex items-center justify-center">
            <BakeryMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
