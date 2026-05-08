"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoreBusiness() {
  const businesses = [
    {
      title: "PU Systems",
      description: "Premium polyurethane systems for footwear, slippers, and industrial applications sourced from trusted global suppliers.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
      tag: "Most Demanding",
    },
    {
      title: "Leather Chemicals",
      description: "High-quality leather processing chemicals including tanning agents, dyes, finishing chemicals, oils, and auxiliaries.",
      image: "/Chemicals.jpg",
    },
    {
      title: "Leather Trading",
      description: "Import and trading of raw, finished, and semi-finished leather materials for industrial and commercial applications.",
      image: "/leather.jpg",
    },
    {
      title: "Leather Goods",
      description: "Premium leather belts, wallets, handbags, and custom leather accessories for trading and export purposes.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Hairon Carpets",
      description: "Luxury leather and hairon carpets crafted for premium interiors and export-grade furnishing applications.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-spacing bg-[#0a0a0a] overflow-hidden" id="services">
      <div className="container-width">
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-emerald-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
              Market Specialties
            </span>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter text-white">
              Core <span className="font-medium italic text-emerald-400">Business</span> Sectors
            </h2>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="max-w-md text-white/50 font-light text-sm md:text-base leading-relaxed"
          >
            Tansol delivers globally sourced industrial materials and premium leather solutions with a focus on reliability and quality.
          </motion.p>
        </div>

        {/* BENTO STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden bg-[#111] border border-white/5 rounded-xl ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* IMAGE AREA */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
                
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-emerald-600 text-[10px] text-white px-3 py-1 uppercase tracking-widest font-bold rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* TEXT CONTENT */}
              <div className="p-8 relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-white/40 text-sm font-light leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-500">
                    <span className="text-white transform group-hover:rotate-[-45deg] transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}