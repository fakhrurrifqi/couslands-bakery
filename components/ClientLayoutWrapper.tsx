"use client";

import { useAppContext } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SlideInPanel from "@/components/SlideInPanel";
import CartPanelContent from "@/components/CartPanelContent";
import AccountPanelContent from "@/components/AccountPanelContent";
import SearchPanelContent from "@/components/SearchPanelContent";

const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { activePanel, closePanel } = useAppContext();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow text-paletteTextDark dark:text-paletteTextLight font-raleway">
        {children}
      </main>
      <Footer />

      <div
        onClick={closePanel}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${
          activePanel ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div>
        <SlideInPanel isOpen={!!activePanel}>
          {activePanel === "cart" && <CartPanelContent />}
          {activePanel === "account" && <AccountPanelContent />}
          {activePanel === "search" && <SearchPanelContent />}
        </SlideInPanel>
      </div>
    </div>
  );
};

export default ClientLayoutWrapper;
