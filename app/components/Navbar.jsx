"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Products", "Services", "Contact"];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <div className="relative h-10 w-32">
          <Image
            src="/logo.png"
            alt="FH Chemicals"
            fill
            className="object-contain brightness-0 invert" // Professional white logo
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* PREMIUM CTA */}
        <div className="hidden lg:block">
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-[12px] uppercase tracking-widest transition-all rounded-sm">
            Request Quote
          </button>
        </div>
      </div>
    </header>
  );
}