"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NewsletterPopup from "./NewsletterPopup";

const COOKIE_NAME = "couslands-newsletter-popup";

function PopupProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get(COOKIE_NAME);
    if (cookie) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    Cookies.set(COOKIE_NAME, "true", { expires: 30 });
    setIsOpen(false);
  };
  return <NewsletterPopup isOpen={isOpen} onClose={handleClose} />;
}

export default PopupProvider;
