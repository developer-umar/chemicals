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
    <section className="relative overflow-hidden py-24 sm:py-32 min-h-[800px] flex flex-col justify-center">
      
      {/* FULL RESPONSIVE INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Very Light Overlay - Just to make white text pop without losing image clarity */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
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
            <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] drop-shadow-md">
              Industry Leaders
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-2xl">
            Powering India's <br />
            <span className="text-emerald-400 italic font-serif">Manufacturing Giants</span>
          </h2>
        </motion.div>
      </div>

      {/* DYNAMIC MARQUEE - Rectangular Corporate Cards */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full items-center py-4"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group relative min-w-[320px] h-[180px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-emerald-500/50 hover:bg-slate-900 shadow-2xl"
            >
              <div className="flex justify-between items-start">
                {/* Rectangular Logo Slot */}
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <span className="font-black text-lg text-emerald-500 group-hover:text-white transition-colors">
                    {client[0]}
                  </span>
                </div>
                <div className="text-[10px] font-black text-emerald-500/40 uppercase tracking-widest">
                  Verified Partner
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight line-clamp-1">
                  {client}
                </h3>
                <div className="h-1 w-0 bg-emerald-500 mt-2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA - Bottom Floating Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl md:rounded-full overflow-hidden">
          <div className="px-10 py-8 text-center border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-4xl font-black text-emerald-400">14+</p>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Years Legacy</p>
          </div>
          <div className="px-10 py-8 text-center border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-4xl font-black text-emerald-400">Global</p>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Sourcing Hub</p>
          </div>
          <div className="px-10 py-8 text-center">
            <p className="text-4xl font-black text-emerald-400">100%</p>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">COA Certified</p>
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