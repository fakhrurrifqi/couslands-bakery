"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-paletteMaroonMedium hover:bg-paletteMaroonDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-paletteMaroonMedium dark:focus:ring-offset-paletteMaroonDarkest"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
};

export default SubmitButton;
