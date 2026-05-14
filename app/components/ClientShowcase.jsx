"use client";

import { motion } from "framer-motion";

const clients = [
  "Superhouse Group",
  "Mirza International",
  "Red Chief",
  "Rahman Industries",
  "Tirubala International",
  "Jama Corporation",
  "Black Stone India",
  "Ously Shoes",
  "Aki Castle Shoes",
  "Naaz Exports",
  "Sajid Tanners",
  "Premier Leather Exports",
];

export default function ClientShowcase() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 min-h-[700px] flex flex-col justify-center bg-slate-900">
      
      {/* HIGH-QUALITY RESPONSIVE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Excellence" 
          className="w-full h-full object-cover object-center md:object-right-top transition-transform duration-1000"
        />
        {/* Very subtle gradient instead of heavy blur to preserve quality */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* HEADER AREA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px]">
              Tansol Industry Partners
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 italic font-serif font-light">Production Hubs</span>
          </h2>
        </motion.div>
      </div>

      {/* DYNAMIC MARQUEE - Sharp Rectangular Cards */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full items-center py-4"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group relative min-w-[300px] h-[160px] bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 shadow-xl backdrop-blur-sm"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                  <span className="font-black text-emerald-400 text-lg">
                    {client[0]}
                  </span>
                </div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                  Active Member
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {client}
                </h3>
                <div className="h-[1px] w-0 bg-emerald-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA - Integrated Design */}
      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10 w-full">
        <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-l-2 border-emerald-500/30 pl-8">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-white">14+</span>
            <span className="text-emerald-500/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Years Industrial Presence</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-white">Global</span>
            <span className="text-emerald-500/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Strategic Sourcing Hub</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black text-white">100%</span>
            <span className="text-emerald-500/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">COA Certified Logistics</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}