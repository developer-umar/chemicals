"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// 1. Industry Standard Import
import Link from "next/link"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Products", "Services", "Contact"];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <div className="relative h-9 w-32 md:h-11 md:w-36 transition-transform active:scale-95">
          <Image
            src="/logo-new.png"
            alt="Tansol Exim"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU - Refactored with Link */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-emerald-600 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link 
            href="#contact"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl shadow-md shadow-emerald-600/10 active:scale-95 inline-block"
          >
            Request Quote
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled ? "text-slate-800 hover:bg-slate-100" : "text-slate-900 hover:bg-white/20"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[70] p-8 border-l border-slate-100 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-8 border-b border-slate-100">
                  <div className="relative h-8 w-24">
                    <Image src="/logo-new.png" alt="Tansol Exim" fill className="object-contain" />
                  </div>
                  <button 
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={22} />
                  </button>
                </div>
                
                {/* Mobile Links - Refactored with Link */}
                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-bold uppercase tracking-widest text-slate-700 hover:text-emerald-600 transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Link 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-emerald-600/10"
                >
                  Get A Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}