"use client";

import React, { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { subscribeToNewsletter } from "@/app/newsletter/actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      onClose();
    } else if (state?.message) {
      toast.error(state.message);
    }
  }, [state, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-full hidden md:block">
            <Image
              src="https://placehold.co/400x500/4D0E18/FBEDEF?text=Delicious+Treats"
              alt="A delicious baked good from Cousland's Bakery"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center bg-white dark:bg-paletteMaroonDarkest">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-paletteMaroonDark dark:text-paletteMaroonRose">
                Get 10% Off!
              </DialogTitle>
              <DialogDescription className="mt-2 text-paletteGrayDark dark:text-paletteGrayLight">
                Join our newsletter and get an exclusive 10% discount on your
                first order. Plus, get baking tips and new product alerts!
              </DialogDescription>
            </DialogHeader>
            <form action={formAction} className="mt-4 space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-12 bg-white dark:bg-paletteMaroonDark border-paletteGrayLight dark:border-paletteMaroonMedium text-paletteTextDark dark:text-white placeholder:text-paletteGrayDark dark:placeholder:text-paletteGrayLight focus:ring-paletteMaroonMedium"
              />
              <Button
                type="submit"
                className="w-full h-12 bg-paletteMaroonMedium hover:bg-paletteMaroonDark text-white font-semibold"
              >
                {isPending && <Loader2 className="mr-2" />}
                Get My Discount
              </Button>
            </form>
            <p className="text-xs text-center mt-4 text-paletteGrayDark dark:text-paletteGrayLight">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default NewsletterPopup;
