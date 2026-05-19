"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // IMPORT THE LINK OBJECT

const businesses = [
  {
    slug: "pu-systems", // Dynamic routing key
    title: "PU Systems",
    description: "Premium polyurethane systems for footwear and industrial applications.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    tag: "Market Leader",
    gridClass: "md:col-span-2 md:row-span-1", 
  },
  {
    slug: "leather-chemicals",
    title: "Leather Chemicals",
    description: "High-quality leather processing chemicals and auxiliaries.",
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "leather-trading",
    title: "Leather Trading",
    description: "Global trading of raw, finished, and semi-finished leather materials.",
    image: "https://images.unsplash.com/photo-1590736961918-71e8c4014744?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "leather-goods",
    title: "Leather Goods",
    description: "Export-grade leather belts, wallets, and custom accessories.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    slug: "hairon-carpets",
    title: "Hairon Carpets",
    description: "Luxury leather carpets designed for premium furnishing.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export default function TansolShowcase() {
  return (
    <section className="relative bg-[#FAFAFA] py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">Tansol Exims Global</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Industrial Excellence <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-serif italic">Beyond Boundaries</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[320px]">
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl cursor-pointer ${item.gridClass}`}
            >
              {/* WE WRAP THE CLICKS DIRECTLY WITHOUT MODIFYING STYLES */}
              <Link href={`/services/${item.slug}`} className="absolute inset-0 z-20" />

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end overflow-hidden">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
                  </div>
                  <div className="p-2 bg-emerald-600 rounded-full text-white translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {item.tag && (
                <div className="absolute top-6 left-6 z-30">
                  <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase">
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