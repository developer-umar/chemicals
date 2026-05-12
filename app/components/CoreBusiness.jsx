"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Data stays exactly as you provided
const businesses = [ /* ... your data array ... */ ];

export default function PremiumShowcase() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header - Minimalist & Bold */}
        <div className="mb-32 flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-10">
          <h2 className="text-6xl md:text-[120px] font-thin tracking-[ -0.05em] text-white">
            Our <span className="italic font-serif text-emerald-500">Core</span>
          </h2>
          <p className="text-white/40 text-sm md:text-lg max-w-sm uppercase tracking-widest leading-tight">
            Premium industrial solutions for the global leather and chemical market.
          </p>
        </div>

        {/* Product List - Interactive Reveal Style */}
        <div className="space-y-0">
          {businesses.map((item, index) => (
            <ProductRow key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductRow({ item, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className="group relative flex flex-col md:flex-row items-center py-16 border-b border-white/5 last:border-0"
    >
      {/* Index Number */}
      <span className="hidden md:block text-white/20 font-mono text-sm absolute left-0">
        0{index + 1}
      </span>

      {/* Product Info */}
      <div className="z-10 w-full md:w-1/2 md:pl-16">
        <h3 className="text-4xl md:text-6xl text-white font-light group-hover:translate-x-4 transition-transform duration-500 ease-out">
          {item.title}
        </h3>
        <p className="mt-6 text-white/40 text-sm md:text-lg max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {item.description}
        </p>
      </div>

      {/* Hover Image Reveal - This is the "Industry Level" touch */}
      <div className="relative mt-10 md:mt-0 w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s]"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Floating Decorative Tag */}
      {item.tag && (
        <div className="absolute top-10 right-0 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-4 py-1 text-[10px] uppercase tracking-tighter rounded-full">
          {item.tag}
        </div>
      )}
    </motion.div>
  );
}