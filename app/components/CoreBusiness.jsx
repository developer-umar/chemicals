"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const businesses = [
  {
    title: "PU Systems",
    description: "Premium polyurethane systems for footwear and industrial use.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tag: "Most Demanding",
    gridClass: "md:col-span-2 md:row-span-2", // Bada Card
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
    gridClass: "md:col-span-1 md:row-span-2", // Lamba Card
  },
  {
    title: "Hairon Carpets",
    description: "Luxury carpets for premium interiors.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-2 md:row-span-1", // Wide Card
  },
];

export default function MasonryShowcase() {
  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple & Clean Header */}
        <div className="mb-12 space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Products <span className="text-emerald-500 italic">Category</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </div>

        {/* The Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[900px]">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl bg-slate-100 ${item.gridClass}`}
            >
              {/* Full Vibrant Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Tag for Highlight */}
              {item.tag && (
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {item.tag}
                  </span>
                </div>
              )}

              {/* Glassmorphism Overlay - Always visible but pops on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                <motion.div 
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm max-w-xs line-clamp-2 md:line-clamp-none">
                    {item.description}
                  </p>
                </motion.div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[4px] border-emerald-500/30 rounded-3xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}