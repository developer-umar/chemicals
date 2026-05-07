// components/HeroSection.jsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/hero-shoes.png",
    title: "PU Chemicals For Safety Shoes",
    subtitle:
      "High-performance polyurethane solutions engineered for durable industrial footwear applications.",
  },
  {
    id: 2,
    image: "/sleeprs-pu-hero.png",
    title: "PU Chemicals For Slippers",
    subtitle:
      "Flexible and lightweight PU chemical solutions designed for premium comfort footwear manufacturing.",
  },
  {
    id: 3,
    image: "/chemicals-hero.png",
    title: "Leather Tanning & Finished Chemicals",
    subtitle:
      "Advanced leather processing chemicals crafted for superior finish, durability and texture.",
  },
  {
    id: 4,
    image: "/leather-hero2.png",
    title: "Luxury Leather Goods",
    subtitle:
      "Premium leather craftsmanship with elegant finishing for modern fashion and lifestyle products.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            {/* Top Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <p className="ml-3 text-xs font-medium uppercase tracking-[0.3em] text-white/80">
                Premium Industrial Solutions
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
              {slides[current].title}
            </h1>

            {/* Orange Line */}
            <div className="mt-7 h-[4px] w-32 rounded-full bg-orange-500" />

            {/* Subtitle */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              {slides[current].subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                Explore Products
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index
                ? "w-14 bg-orange-500"
                : "w-7 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Premium Glow Effects */}
      <div className="absolute left-[-120px] top-[20%] h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-80px] h-[260px] w-[260px] rounded-full bg-white/10 blur-[120px]" />
    </section>
  );
}