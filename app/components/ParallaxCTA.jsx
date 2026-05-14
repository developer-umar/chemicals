"use client";

import { motion } from "framer-motion";

export default function ParallaxCTA() {
  return (
    <section className="relative h-[700px] overflow-hidden bg-slate-900">
      
      {/* HIGH-END INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop"
          alt="Tansol Industrial Facility"
          className="w-full h-full object-cover opacity-30 grayscale transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Subtle Gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>

      {/* DYNAMIC EMERALD GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* TOP TAG */}
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Global Sourcing Leader
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: TEXT CONTENT */}
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tighter mb-8">
                Ready to Scale <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif">Your Production?</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10 font-medium">
                Tansol Exims serves the footwear and leather industry with premium imported materials and dependable technical support across India.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
                  Explore Catalog
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                  Contact Experts
                </button>
              </div>
            </div>

            {/* RIGHT: INTEGRATED STATS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
                <span className="text-4xl font-black text-white block mb-1">18+</span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Years Expertise</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
                <span className="text-4xl font-black text-white block mb-1">COA</span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Certified Quality</span>
              </div>
              <div className="col-span-2 bg-emerald-600/10 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-emerald-400 block">Global</span>
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Supply Network</span>
                </div>
                <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* BACKGROUND DECOR */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}