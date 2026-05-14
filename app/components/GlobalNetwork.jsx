"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe2, ArrowUpRight, MapPin } from "lucide-react";

const countries = [
  {
    country: "China",
    specialty: "PU Systems & Raw Materials",
    description: "Primary hub for premium industrial polymers and footwear manufacturing essentials.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1400&auto=format&fit=crop",
    coords: { top: "35%", left: "75%" }
  },
  {
    country: "Turkey",
    specialty: "Leather & Finishing",
    description: "Key partner for high-grade leather processing chemicals and industrial auxiliaries.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1400&auto=format&fit=crop",
    coords: { top: "40%", left: "55%" }
  },
  {
    country: "Global Markets",
    specialty: "Strategic Sourcing",
    description: "Continuous expansion across Europe and Asian markets for diversified supply.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1400&auto=format&fit=crop",
    coords: { top: "50%", left: "30%" }
  },
];

export default function GlobalNetwork() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor - Global Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Globe2 className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">Global Sourcing Hub</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Bridging <span className="text-emerald-600 italic font-serif font-medium">World Markets</span> <br /> 
              to Indian Industries
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-500 pl-6"
          >
            Tansol Exims leverages a robust international network to ensure consistent supply of premium industrial materials.
          </motion.p>
        </div>

        {/* INTERACTIVE MAP VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 h-[400px] md:h-[600px] mb-12 group shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
            alt="World Map"
            fill
            className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          
          {/* Pulsing Pins on Map */}
          {countries.map((c, i) => (
            <motion.div
              key={i}
              style={{ top: c.coords.top, left: c.coords.left }}
              className="absolute z-20 hidden md:flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-emerald-500 p-2 rounded-full border-2 border-white shadow-lg">
                   <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
                <span className="text-white font-bold text-sm">{c.country}</span>
              </div>
            </motion.div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </motion.div>

        {/* COUNTRY DETAIL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 border border-slate-100 rounded-[2.5rem] p-4 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-8">
                <Image
                  src={item.image}
                  alt={item.country}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest text-emerald-700">
                    Sourcing Node
                  </span>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 leading-none">{item.country}</h3>
                    <p className="text-emerald-600 font-bold text-xs uppercase mt-2 tracking-wide">{item.specialty}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}