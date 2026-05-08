"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Products", "Services", "Contact"];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-black/60 backdrop-blur-2xl border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <div className="relative h-8 w-28 md:h-10 md:w-32">
          <Image
            src="/logo.png"
            alt="FH Chemicals"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA (Desktop Only) */}
        <div className="hidden lg:block">
          <button className="px-7 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] uppercase tracking-widest transition-all rounded-sm font-medium">
            Request Quote
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] z-[70] p-10 border-l border-white/5"
            >
              <button 
                className="absolute top-6 right-6 text-white/50"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col gap-8 mt-20">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase tracking-widest text-white/80 hover:text-emerald-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <button className="mt-4 px-6 py-4 bg-emerald-600 text-white text-xs uppercase tracking-widest font-bold">
                  Get Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}