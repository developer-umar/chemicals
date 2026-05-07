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
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a0a0a] font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover transition-transform duration-[6000ms] scale-110"
            style={{ transform: "scale(1.05)" }}
          />
          {/* Professional Overlay: Lighter, more sophisticated gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-black/20 backdrop-brightness-75" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Minimal Tagline */}
            <span className="mb-4 block text-[10px] uppercase tracking-[0.6em] text-white/50">
              Future of Materials
            </span>

            {/* Typography: Using 'tracking-tighter' for that premium editorial look */}
            <h1 className="text-6xl font-extralight tracking-tighter text-white md:text-8xl lg:text-9xl">
              {slides[current].title.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "font-medium italic" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm font-light tracking-wide text-white/60 md:text-lg">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modern Minimal Indicators */}
      <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 items-center gap-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="group relative py-4"
          >
            <div className={`h-[1px] transition-all duration-700 ${
              current === index ? "w-12 bg-white" : "w-6 bg-white/20 group-hover:bg-white/50"
            }`} />
            <span className={`absolute -top-2 left-0 text-[8px] transition-opacity ${
              current === index ? "opacity-100" : "opacity-0"
            }`}>
              0{index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Soft Ambient Light (Static) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </section>
  );
}