"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe2, MapPin, ArrowRight } from "lucide-react";

const countries = [
  {
    country: "China",
    specialty: "PU Systems Hub",
    coords: { top: "30%", left: "80%" }
  },
  {
    country: "Turkey",
    specialty: "Chemical Auxiliaries",
    coords: { top: "38%", left: "58%" }
  },
  {
    country: "Europe",
    specialty: "Premium Polymers",
    coords: { top: "25%", left: "48%" }
  },
  {
    country: "India",
    specialty: "HQ & Distribution",
    coords: { top: "50%", left: "70%" }
  }
];

export default function GlobalNetwork() {
  return (
    <section className="relative py-24 bg-[#FCFCFC] overflow-hidden">
      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-emerald-600 rounded-lg shadow-lg shadow-emerald-200">
                <Globe2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-emerald-700 font-black tracking-[0.2em] text-[10px] uppercase">Global Supply Chain</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Sourcing the <span className="text-emerald-600 italic font-serif">Best of World</span> <br /> 
              for Indian Markets
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:mb-4"
          >
            <p className="max-w-xs text-slate-500 font-semibold leading-relaxed border-l-4 border-emerald-500 pl-6">
              Tansol Exims connects global manufacturing hubs to provide uninterrupted industrial supply.
            </p>
          </motion.div>
        </div>

        {/* HERO MAP VISUAL (Main Content) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3.5rem] overflow-hidden bg-slate-900 h-[500px] md:h-[650px] shadow-2xl border-4 border-white"
        >
          {/* Background Map Image */}
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
            alt="Tansol Global Network"
            fill
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Animated Sourcing Nodes */}
          {countries.map((c, i) => (
            <motion.div
              key={i}
              style={{ top: c.coords.top, left: c.coords.left }}
              className="absolute z-20 flex flex-col items-center group/pin"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            >
              {/* Tooltip (Visible on Hover/Always on Mobile) */}
              <div className="mb-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-emerald-100 opacity-0 group-hover/pin:opacity-100 md:group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0">
                <p className="text-slate-900 font-black text-xs whitespace-nowrap">{c.country}</p>
                <p className="text-emerald-600 font-bold text-[10px] whitespace-nowrap">{c.specialty}</p>
              </div>

              {/* Pulsing Pin */}
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-40 scale-[2.5]"></div>
                <div className="relative bg-emerald-500 p-3 rounded-full border-2 border-white shadow-2xl cursor-pointer group-hover/pin:bg-white group-hover/pin:text-emerald-600 transition-colors">
                   <MapPin className="w-5 h-5 text-white group-hover/pin:text-emerald-600" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Info Strip (Inside Map) */}
          <div className="absolute bottom-10 left-10 right-10 z-30">
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                   <div className="text-white">
                      <p className="text-3xl font-black italic">5000+ Tons</p>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Annual Import Volume</p>
                   </div>
                   <div className="w-[1px] h-10 bg-white/20 hidden md:block"></div>
                   <div className="text-white">
                      <p className="text-3xl font-black italic">12+ Nations</p>
                      <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Sourcing Network</p>
                   </div>
                </div>
                <button className="bg-emerald-500 hover:bg-white hover:text-emerald-600 text-white px-8 py-4 rounded-full font-black text-sm transition-all flex items-center gap-2 group">
                  Partnership Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}