"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const businesses = [
  {
    title: "PU Systems",
    description: "Premium polyurethane systems for footwear, slippers, and industrial applications sourced from trusted global suppliers.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tag: "Market Leader",
    gridClass: "md:col-span-2 md:row-span-1", 
  },
  {
    title: "Leather Chemicals",
    description: "High-quality leather processing chemicals including tanning agents, dyes, and finishing auxiliaries.",
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Leather Trading",
    description: "Global import and trading of raw, finished, and semi-finished leather materials for industrial use.",
    image: "https://images.unsplash.com/photo-1590736961918-71e8c4014744?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Leather Goods",
    description: "Export-grade leather belts, wallets, and custom accessories crafted for premium quality.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Hairon Carpets",
    description: "Luxury leather and hairon carpets designed for premium interiors and furnishing applications.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export default function TansolShowcase() {
  return (
    <section className="relative bg-white py-24 px-4 sm:px-10 overflow-hidden" id="products">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* RE-DESIGNED HEADER */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-xs uppercase">Tansol Exims Global</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6"
          >
            Premium Industrial & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-serif italic font-light">Leather Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Explore our industrial expertise, imported materials, leather solutions, footwear products, and premium-quality business operations through our global sourcing network.
          </motion.p>
        </div>

        {/* SMART MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-200 transition-all duration-500 shadow-sm hover:shadow-xl ${item.gridClass}`}
            >
              {/* Image: Vibrant & High-Resolution */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Dark Overlay: Only appears on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT AREA */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10">
                  {/* Title: Moves up on hover */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  
                  {/* Description: Fades and slides in on hover */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {item.description}
                  </p>
                  
                  {/* Visual Indicator Line */}
                  <motion.div className="h-1 bg-emerald-500 w-0 group-hover:w-12 mt-4 transition-all duration-500" />
                </div>
              </div>

              {/* FLOATING TAG */}
              {item.tag && (
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {item.tag}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}