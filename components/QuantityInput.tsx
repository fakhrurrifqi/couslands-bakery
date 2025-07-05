"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantityInputProps {
  itemId: number;
  initialQuantity: number;
  size?: "default" | "sm"; // Optional size prop
}

const QuantityInput = ({
  itemId,
  initialQuantity,
  size = "default",
}: QuantityInputProps) => {
  const { updateCartQuantity } = useAppContext();
  const [value, setValue] = useState(initialQuantity.toString());
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    setValue(initialQuantity.toString());
  }, [initialQuantity]);

  const handleUpdate = (newQuantity: number) => {
    const finalQuantity = Math.max(1, newQuantity);
    if (finalQuantity !== initialQuantity) {
      updateCartQuantity(itemId, finalQuantity);
    }
    setValue(finalQuantity.toString());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (inputValue === "") {
      return;
    }

    const newQuantity = parseInt(inputValue, 10);
    if (!isNaN(newQuantity)) {
      const timeout = setTimeout(() => {
        handleUpdate(newQuantity);
      }, 800);
      setDebounceTimeout(timeout);
    }
  };

  const handleBlur = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const newQuantity = parseInt(value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      setValue(initialQuantity.toString());
    } else {
      handleUpdate(newQuantity);
    }
  };

  const increment = () => {
    const newQuantity = initialQuantity + 1;
    setValue(newQuantity.toString());
    updateCartQuantity(itemId, newQuantity);
  };

  const decrement = () => {
    const newQuantity = initialQuantity - 1;
    setValue(newQuantity.toString());
    updateCartQuantity(itemId, newQuantity);
  };

  const buttonSize = size === "default" ? "size-9" : "size-7";
  const inputWidth = size === "default" ? "w-12" : "w-10";
  const iconSize = size === "default" ? "size-4" : "size-3";

  return (
    <div className="flex items-center border rounded-md">
      <Button
        size="icon"
        variant="ghost"
        className={cn("rounded-r-none border-r cursor-pointer", buttonSize)}
        onClick={decrement}
        disabled={initialQuantity <= 1}
      >
        <Minus className={iconSize} />
      </Button>
      <Input
        id={`quantity-${itemId}`}
        type="number"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn(
          "text-center border-none focus-visible:ring-0 rounded-none [appearance:textfield]",
          buttonSize,
          inputWidth
        )}
        min="1"
      />
      <Button
        size="icon"
        variant="ghost"
        className={cn("rounded-l-none border-l cursor-pointer", buttonSize)}
        onClick={increment}
      >
        <Plus className={iconSize} />
      </Button>
    </div>
  );
};

export default QuantityInput;
