import { useAppContext } from "@/context/AppContext";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface SlideInPanelProps {
  children: ReactNode;
  isOpen: boolean;
}

const SlideInPanel: React.FC<SlideInPanelProps> = ({ children, isOpen }) => {
  const { theme, closePanel } = useAppContext();
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 w-[400px] max-x-[90vw] h-full shadow-2xl transition-transform duration-300 ease-in-out p-6 z-[50] overflow-y-auto",
        theme === "light"
          ? "bg-white text-paletteTextDark"
          : "bg-paletteMaroonDarkest text-paletteTextLight",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={closePanel}
        aria-label="Close panel"
        className="absolute top-4 left-4 rounded-full size-8 text-paletteGrayDark dark:text-paletteGrayLight hover:bg-black/10 dark:hover:bg-white/10"
      >
        <X size={20} />
      </Button>
      <div className="pt-10">{children}</div>
    </div>
  );
};

export default SlideInPanel;
