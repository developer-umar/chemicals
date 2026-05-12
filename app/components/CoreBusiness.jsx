"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Leather Trading",
    description: "Import and trading of raw, finished, and semi-finished leather materials for industrial and commercial applications.",
    image: "https://images.unsplash.com/photo-1590736961918-71e8c4014744?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Leather Goods",
    description: "Premium leather belts, wallets, handbags, and custom leather accessories for trading and export purposes.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Hairon Carpets",
    description: "Luxury leather and hairon carpets crafted for premium interiors and export-grade furnishing applications.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function CreativeBusinessShowcase() {
  return (
    <section className="relative bg-[#fafafa] py-24 px-4 overflow-hidden min-h-screen">
      
      {/* 1. CREATIVE BACKGROUND: Animated Grid & Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 2. HEADER AREA */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Our Industrial Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900"
          >
            Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Solutions</span>
          </motion.h2>
        </div>

        {/* 3. THE CREATIVE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-5 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              {/* IMAGE WRAPPER with floating effect */}
              <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-inner bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Floating Tag */}
                {item.tag && (
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/80 border border-white/20 px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-tighter">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* TEXT CONTENT */}
              <div className="mt-8 px-2 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-emerald-500/30"></span>
                  <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
                    Sector 0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-slate-850 leading-tight">
                  {item.title}
                </h3>
                
                <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* INTERACTIVE BUTTON */}
                <motion.div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                    Explore Details
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}