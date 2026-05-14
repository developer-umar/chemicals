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
    <section className="relative overflow-hidden py-32 bg-slate-950">
      
      {/* INDUSTRIAL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Trusted Global Network
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif font-light">Industrial Giants</span>
          </h2>
        </motion.div>
      </div>

      {/* LOGO MARQUEE - Using Typography as Logos */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full items-center"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group min-w-[280px] bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2.5rem] px-8 py-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-emerald-500/10 hover:border-emerald-500/40"
            >
              {/* TYPOGRAPHY LOGO (Modern Initials or Icon) */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-800/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                 <span className="text-emerald-500 font-black text-xl tracking-tighter">
                    {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
                 </span>
              </div>
              
              <h3 className="text-lg font-bold text-white text-center tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                {client}
              </h3>
              
              <div className="mt-4 h-[1px] w-0 bg-emerald-500/50 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA */}
      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="p-12 text-center border-b md:border-b-0 md:border-r border-white/10 hover:bg-emerald-500/5 transition-colors group">
            <span className="text-6xl font-black text-emerald-500 block mb-2 group-hover:scale-110 transition-transform">14+</span>
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Years Excellence</span>
          </div>
          <div className="p-12 text-center border-b md:border-b-0 md:border-r border-white/10 hover:bg-emerald-500/5 transition-colors group">
            <span className="text-6xl font-black text-emerald-500 block mb-2 group-hover:scale-110 transition-transform">Global</span>
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Sourcing Hub</span>
          </div>
          <div className="p-12 text-center hover:bg-emerald-500/5 transition-colors group">
            <span className="text-6xl font-black text-emerald-500 block mb-2 group-hover:scale-110 transition-transform">100%</span>
            <span className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">COA Certified</span>
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