"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/hero-shoes.png",
    title: "Advanced Polyurethane",
    subtitle: "Durable industrial footwear solutions.",
  },
  {
    id: 2,
    image: "/sleeprs-pu-hero.png",
    title: "Comfort Chemistry",
    subtitle: "Premium lightweight PU for footwear.",
  },
  {
    id: 3,
    image: "/chemicals-hero.png",
    title: "Tanning Excellence",
    subtitle: "Superior finishes for luxury leather.",
  },
  {
    id: 4,
    image: "/leather-hero2.png",
    title: "Premium Leather",
    subtitle: "High-quality finish for luxury goods.",
  },
];



// Slides array same rahega...

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            priority
            // FIXED: scale-110 hata diya, sirf subtle 1.02 rakha hai for motion
            className="object-cover object-center transition-transform duration-[8000ms]"
            style={{ transform: "scale(1.02)" }} 
          />
          {/* PREMIUM OVERLAY: Deep Forest to Black Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#064e3b]/10 backdrop-brightness-[0.8]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex h-full items-center px-6 md:px-20">
        <div className="max-w-4xl text-left"> {/* Center ki jagah Left align for better professional look */}
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-[10px] uppercase tracking-[0.5em] text-emerald-400/80 font-semibold">
              Global Leather & Chemical Excellence
            </span>
            <h1 className="text-6xl font-light tracking-tight text-white md:text-8xl">
              {slides[current].title}
            </h1>
            <p className="mt-6 max-w-lg text-lg font-light text-white/50 border-l border-emerald-500/30 pl-6">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}