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
    <section className="relative overflow-hidden py-32 bg-[#020617]">
      
      {/* INDUSTRIAL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-10 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/95 to-[#020617]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Partnering With The Best
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif font-light">Industrial Giants</span>
          </h2>
        </motion.div>
      </div>

      {/* DYNAMIC MARQUEE */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full items-center"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group min-w-[300px] bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-[2.5rem] px-8 py-14 flex flex-col items-center justify-center transition-all duration-500 hover:bg-emerald-500/[0.08] hover:border-emerald-500/30 hover:-translate-y-2"
            >
              {/* INDUSTRIAL BLUEPRINT ICON (Logo Placeholder) */}
              <div className="relative w-20 h-20 mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {/* Rotating Border Frame */}
                <div className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                
                {/* Initials with Industrial Font */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                   <span className="text-emerald-500 font-black text-2xl tracking-tighter">
                      {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
                   </span>
                </div>
                
                {/* Floating Micro-data */}
                <div className="absolute -top-1 -right-1 bg-emerald-500 text-[8px] font-black px-1.5 py-0.5 rounded text-slate-950">
                  ID-{index < 10 ? `0${index}` : index}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white text-center tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                {client}
              </h3>
              
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                Strategic Partner
              </p>
              
              {/* Modern Glow Line */}
              <div className="mt-6 h-[1px] w-12 bg-emerald-500/20 group-hover:w-full group-hover:bg-emerald-500/50 transition-all duration-700"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA */}
      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md bg-white/[0.01]">
          <div className="p-14 text-center border-b md:border-b-0 md:border-r border-white/5 hover:bg-emerald-500/[0.03] transition-all group">
            <span className="text-7xl font-black text-emerald-500 block mb-3 group-hover:scale-105 transition-transform duration-500">14+</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[9px]">Years Excellence</span>
          </div>
          <div className="p-14 text-center border-b md:border-b-0 md:border-r border-white/5 hover:bg-emerald-500/[0.03] transition-all group">
            <span className="text-7xl font-black text-emerald-500 block mb-3 group-hover:scale-105 transition-transform duration-500">Global</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[9px]">Sourcing Hub</span>
          </div>
          <div className="p-14 text-center hover:bg-emerald-500/[0.03] transition-all group">
            <span className="text-7xl font-black text-emerald-500 block mb-3 group-hover:scale-105 transition-transform duration-500">100%</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[9px]">COA Certified</span>
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