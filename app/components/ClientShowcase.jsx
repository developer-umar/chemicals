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
      {/* RADIANT EMERALD GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Trusted Global Network
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif font-light">Industrial Giants</span>
          </h2>

          <p className="mt-8 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Tansol Exims provides premium chemicals and PU systems trusted by the largest manufacturers and exporters in the leather and footwear sector.
          </p>
        </motion.div>
      </div>

      {/* INFINITE MARQUEE - ROW 1 */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group min-w-[280px] bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[2.5rem] px-10 py-12 flex flex-col items-center justify-center transition-all duration-500 hover:bg-emerald-500/10 hover:border-emerald-500/30"
            >
              <div className="w-12 h-12 mb-6 text-emerald-500 opacity-50 group-hover:opacity-100 transition-all group-hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center group-hover:text-emerald-400 transition-colors">
                {client}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>

      {/* INFINITE MARQUEE - ROW 2 (Reverse) */}
      <div className="flex overflow-hidden select-none gap-6 mt-6 mask-fade-edges">
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group min-w-[240px] bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-full px-8 py-4 flex items-center gap-4 transition-all duration-500 hover:border-emerald-500/20"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-400 font-bold text-sm whitespace-nowrap group-hover:text-white">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM STATS AREA */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-10 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center group hover:border-emerald-500/20 transition-all duration-500">
            <span className="text-5xl font-black text-emerald-500 block mb-2">14+</span>
            <span className="text-slate-400 font-medium uppercase tracking-widest text-xs">Years Experience</span>
          </div>
          <div className="p-10 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center group hover:border-emerald-500/20 transition-all duration-500">
            <span className="text-5xl font-black text-emerald-500 block mb-2">Global</span>
            <span className="text-slate-400 font-medium uppercase tracking-widest text-xs">Sourcing Network</span>
          </div>
          <div className="p-10 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center group hover:border-emerald-500/20 transition-all duration-500">
            <span className="text-5xl font-black text-emerald-500 block mb-2">100%</span>
            <span className="text-slate-400 font-medium uppercase tracking-widest text-xs">COA Certified</span>
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