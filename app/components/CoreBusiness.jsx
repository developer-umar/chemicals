"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const businesses = [
  {
    title: "PU Systems",
    description: "Premium polyurethane systems for footwear and industrial use.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tag: "Most Demanding",
    gridClass: "md:col-span-2 md:row-span-1", // Height kam kar di hai align karne ke liye
  },
  {
    title: "Leather Chemicals",
    description: "Tanning agents and finishing oils.",
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Leather Trading",
    description: "Import of raw and finished leather.",
    image: "https://images.unsplash.com/photo-1590736961918-71e8c4014744?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Leather Goods",
    description: "Wallets, belts, and luxury handbags.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1", 
  },
  {
    title: "Hairon Carpets",
    description: "Luxury carpets for premium interiors.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1", 
  },
];

export default function IndustryStandardGrid() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-10 overflow-hidden min-h-screen flex items-center">
      
      {/* BACKGROUND CREATIVITY: Light & Professional */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] [background-image:radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-emerald-50 rounded-full blur-[120px] opacity-50 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full" id="products">
        
        {/* ENHANCED HEADER */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="h-[2px] w-12 bg-emerald-500"></span>
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">Premium Selection</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Industry <span className="font-serif italic font-light text-emerald-500">Classics</span>
          </motion.h2>
        </div>

        {/* MASONRY GRID - Mobile Optimised */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-200 border border-slate-100 shadow-sm transition-all duration-500 ${item.gridClass}`}
            >
              {/* IMAGE: Full color & sharp */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* OVERLAY: Subtle dark gradient for readability only at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                <div className="overflow-hidden">
                  <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform">
                    {item.title}
                  </motion.h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* TAG: Floating style */}
              {item.tag && (
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                    {item.tag}
                  </span>
                </div>
              )}

              {/* INTERACTIVE GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[2rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}