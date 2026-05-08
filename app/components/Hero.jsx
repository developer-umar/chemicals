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
            className="object-cover object-center transition-transform duration-[8000ms]"
            style={{ transform: "scale(1.02)" }} 
          />
          
          {/* RESPONSIVE OVERLAY: Mobile par niche se gradient, Desktop par side se */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 lg:bg-gradient-to-tr lg:from-black lg:via-black/40 lg:to-transparent opacity-90" />
          <div className="absolute inset-0 bg-[#064e3b]/10 backdrop-brightness-[0.75] lg:backdrop-brightness-[0.8]" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 flex h-full items-center px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-5xl text-center lg:text-left"> {/* Mobile: Center, Desktop: Left */}
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline: Text size smaller for mobile */}
            <span className="mb-4 block text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-semibold">
              Global Leather & Chemical Excellence
            </span>

            {/* Heading: Fluid font sizes */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extralight tracking-tighter text-white leading-[1.1]">
              {slides[current].title.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "font-medium italic" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Subtitle: Hidden margin on desktop, centered on mobile */}
            <p className="mt-6 mx-auto lg:mx-0 max-w-md text-sm sm:text-base md:text-lg font-light text-white/60 border-emerald-500/30 lg:border-l lg:pl-8">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* MOBILE SLIDER INDICATORS */}
      <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center lg:justify-start lg:left-20 gap-3">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-[1px] transition-all duration-700 ${
              current === index ? "w-10 bg-emerald-500" : "w-5 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-900/20 blur-[120px] pointer-events-none" />
    </section>
  );
}