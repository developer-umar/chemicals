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
    image: "Chemicals.jpg",
  },
  {
    title: "Leather Trading",
    description: "Import and trading of raw, finished, and semi-finished leather materials for industrial and commercial applications.",
    image: "leather.jpg",
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

export default function BusinessShowcase() {
  // Parent animation container for staggered reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Background Creativity: Subtle light green blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Simple & Strong Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
          >
            What We <span className="text-emerald-600">Provide</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-emerald-500 mt-4 rounded-full"
          />
        </div>

        {/* The Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              variants={itemAnim}
              className="group flex flex-col bg-slate-50 rounded-3xl p-4 border border-slate-100 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              {/* Image Container: Full Color, High Quality */}
              <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {business.tag && (
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {business.tag}
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="pt-8 pb-4 px-2">
                <h3 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {business.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  {business.description}
                </p>
                
                {/* Visual Accent */}
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                  View Solutions 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}