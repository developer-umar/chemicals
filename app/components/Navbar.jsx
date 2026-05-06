"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Products",
    "Services",
    "Team",
    "Contact",
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 hover-transition ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-width flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            
            {/* Replace with your company logo */}
            <Image
              src="/logo.png"
              alt="FH Chemicals"
              width={55}
              height={55}
              className="object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                FH Chemicals
              </h2>

              <p className="text-sm text-slate-500">
                Global Importers & Traders
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="relative text-slate-700 font-medium hover:text-cyan-600 hover-transition group"
              >
                {link}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-500 hover-transition group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <button className="primary-gradient text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover-transition">
              Get Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-slate-900"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-[80%] h-screen bg-white z-[100] shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold">
                FH Chemicals
              </h2>

              <button onClick={() => setMobileMenu(false)}>
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg font-medium text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenu(false)}
                >
                  {link}
                </a>
              ))}

              <button className="primary-gradient text-white py-4 rounded-full font-semibold mt-4">
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}