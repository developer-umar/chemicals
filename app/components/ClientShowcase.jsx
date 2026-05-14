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
    <section className="relative overflow-hidden py-32 ">
      
      {/* THE MAIN INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* Subtle Dark Gradients - Just enough to read text */}
        <div className="absolute inset-0 "></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          {/* MINIMAL TAG */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-emerald-500"></span>
            <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px]">Trusted Partners</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif">Industrial Excellence</span>
          </h2>
        </motion.div>
      </div>

      {/* DYNAMIC MARQUEE - Circular Image-Showing Cards */}
      <div className="flex overflow-hidden select-none gap-8 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-8 min-w-full items-center"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group relative min-w-[280px] h-[350px] flex flex-col items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/5 shadow-2xl"
            >
              {/* CIRCULAR LOGO PLACEHOLDER */}
              <div className="w-24 h-24 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-500 overflow-hidden shadow-inner">
                {/* Space for Logo - Shows Initials for now */}
                <span className="text-white font-black text-2xl tracking-tighter opacity-80 group-hover:text-emerald-400 group-hover:opacity-100 transition-all font-mono">
                   {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white/90 text-center px-6 leading-tight group-hover:text-white">
                {client}
              </h3>
              
              <div className="absolute bottom-10 w-8 h-[2px] bg-white/10 group-hover:w-16 group-hover:bg-emerald-500 transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA - Sleek & Transparent */}
      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <div className="text-left group">
            <span className="text-5xl font-bold text-white group-hover:text-emerald-500 transition-colors">14+</span>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Years of Industry Heritage</p>
          </div>
          <div className="text-left group">
            <span className="text-5xl font-bold text-white group-hover:text-emerald-500 transition-colors">Global</span>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Strategic Sourcing Network</p>
          </div>
          <div className="text-left group">
            <span className="text-5xl font-bold text-white group-hover:text-emerald-500 transition-colors">100%</span>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mt-2">Quality COA Assurance</p>
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