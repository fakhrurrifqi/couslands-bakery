"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import React from "react";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  pendingText?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  pendingText,
  className,
  ...props
}) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className} {...props}>
      {pending ? pendingText || "Saving..." : children}
    </Button>
  );
};

export default SubmitButton;
