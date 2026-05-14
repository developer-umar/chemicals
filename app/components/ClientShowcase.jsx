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
    <section className="relative overflow-hidden py-32 bg-[#050505]">
      
      {/* FULL INDUSTRIAL BACKGROUND IMAGE - No Blue Tones */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/client/industries.webp" 
          alt="Industrial Background" 
          className="w-full h-full object-cover opacity-20 grayscale transition-opacity duration-1000 group-hover:opacity-30"
        />
        {/* Deep Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
        {/* Radial Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* CORPORATE TAG */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 text-emerald-500/80 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Strategic Global Partners
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
            Powering India's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif font-light">Industrial Giants</span>
          </h2>
        </motion.div>
      </div>

      {/* DYNAMIC MARQUEE - Corporate Glass Cards */}
      <div className="flex overflow-hidden select-none gap-6 mask-fade-edges relative z-10">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-6 min-w-full items-center"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group min-w-[320px] bg-white/[0.01] border border-white/5 backdrop-blur-3xl rounded-[2.5rem] px-8 py-16 flex flex-col items-center justify-center transition-all duration-500 hover:bg-emerald-500/[0.05] hover:border-emerald-500/30 hover:-translate-y-2 shadow-2xl"
            >
              {/* BLUEPRINT INITIALS */}
              <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-125 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 w-20 h-20 rounded-[2rem] bg-black border border-white/5 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors shadow-inner">
                   <span className="text-white font-black text-3xl tracking-tighter group-hover:text-emerald-500 transition-colors">
                      {client.split(' ').map(word => word[0]).join('').substring(0, 2)}
                   </span>
                </div>
                
                {/* ID Tag */}
                <div className="absolute -bottom-2 bg-emerald-600 text-[9px] font-black px-2 py-0.5 rounded-full text-white shadow-lg">
                  TN-{index < 10 ? `0${index}` : index}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 text-center tracking-tight mb-2 group-hover:text-white transition-colors">
                {client}
              </h3>
              
              <p className="text-[10px] text-emerald-500/60 font-black uppercase tracking-[0.2em]">
                Enterprise Client
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* STATS AREA - Pure Corporate Look */}
      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-[4rem] overflow-hidden backdrop-blur-md bg-black/40 shadow-2xl">
          <div className="p-16 text-center border-b md:border-b-0 md:border-r border-white/5 hover:bg-emerald-500/[0.02] transition-all group">
            <span className="text-7xl font-black text-white group-hover:text-emerald-500 block mb-4 transition-colors">14+</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Years Excellence</span>
          </div>
          <div className="p-16 text-center border-b md:border-b-0 md:border-r border-white/5 hover:bg-emerald-500/[0.02] transition-all group">
            <span className="text-7xl font-black text-white group-hover:text-emerald-500 block mb-4 transition-colors">Global</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Sourcing Hub</span>
          </div>
          <div className="p-16 text-center hover:bg-emerald-500/[0.02] transition-all group">
            <span className="text-7xl font-black text-white group-hover:text-emerald-500 block mb-4 transition-colors">100%</span>
            <span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">COA Certified</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </section>
  );
}