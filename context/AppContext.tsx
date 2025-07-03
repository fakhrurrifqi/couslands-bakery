"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import type { CartItem, Product } from "@/lib/types";
import {
  addToCartAction,
  removeFromCartAction,
  updateCartQuantityAction,
} from "@/app/cart/actions";
import { getCartItems } from "@/lib/data";
import { toast } from "sonner";

export type Theme = "light" | "dark";
export type SectionID = "home" | "products" | "about" | "contact";
type PanelType = "cart" | "account" | "search" | null;

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;

  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;

  openPanel: (panel: PanelType) => void;
  closePanel: () => void;
  activePanel: PanelType;

  cartItems: CartItem[];
  addToCart: (produc: Product) => Promise<void>;
  removeFromCart: (cartItemId: number) => Promise<void>;
  updateCartQuantity: (cartItemId: number, quantity: number) => Promise<void>;
  cartCount: number;
  cartTotal: number;
  isCartPending: boolean;
  refetchCart: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
  initialCart: CartItem[];
}

export const AppProvider: React.FC<AppProviderProps> = ({
  children,
  initialCart,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const [isCartPending, startTransition] = useTransition();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.products.price * item.quantity,
    0
  );

  useEffect(() => {
    setCartItems(initialCart);
  }, [initialCart]);

  const refetchCart = useCallback(async () => {
    try {
      const updatedItems = await getCartItems();
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Failed to refetch cart", error);
      toast.error("Could not update cart. Please refresh the page.");
    }
  }, []);

  const addToCart = async (product: Product) => {
    startTransition(async () => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(
          (item) => item.products.id === product.id
        );
        if (existingItem) {
          return prevItems.map((item) =>
            item.products.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        const newCartItem: CartItem = {
          id: Math.random(),
          user_id: "",
          quantity: 1,
          products: product,
        };
        return [...prevItems, newCartItem];
      });

      const result = await addToCartAction(product.id);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
    openPanel("cart");
  };

  const removeFromCart = async (cartItemId: number) => {
    startTransition(async () => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== cartItemId)
      );
      const result = await removeFromCartAction(cartItemId);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  const updateCartQuantity = async (cartItemId: number, quantity: number) => {
    startTransition(async () => {
      if (quantity <= 0) {
        removeFromCart(cartItemId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity } : item
        )
      );

      const result = await updateCartQuantityAction(cartItemId, quantity);
      if (!result.success) {
        toast.error(result.message);
      }
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const openPanel = (panel: PanelType) => setActivePanel(panel);
  const closePanel = () => setActivePanel(null);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        openPanel,
        closePanel,
        activePanel,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartCount,
        cartTotal,
        isCartPending,
        refetchCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
