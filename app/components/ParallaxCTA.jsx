"use client";

import { motion } from "framer-motion";

export default function ParallaxCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      
      {/* PROFESSIONAL LIGHT BACKGROUND DECOR */}
      {/* 1. Subtle Mesh Grid (Engineering Vibe) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* 2. Soft Emerald Glows for Depth */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-70"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-50 border border-slate-200/60 rounded-[3rem] p-8 md:p-20 shadow-sm overflow-hidden relative">
          
          {/* DECORATIVE ELEMENT */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE: THE PITCH */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-emerald-100/50 border border-emerald-200 text-emerald-700 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
              >
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                Partner with Tansol Exims
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
                Elevate Your <br />
                <span className="text-emerald-600 italic font-serif font-light underline decoration-emerald-200 underline-offset-8">Production Quality</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-lg mb-10 font-medium">
                Connect with our technical experts to explore premium industrial chemicals, footwear materials, and global sourcing solutions tailored for your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold transition-all active:scale-95 shadow-xl shadow-slate-200">
                  Contact Our Team
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                  View Catalog
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: QUICK STATS / TRUST BOX */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">18+</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Years of Trust</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                <p className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">Global</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Import Network</p>
              </div>
              <div className="sm:col-span-2 bg-emerald-600 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl shadow-emerald-200">
                <div>
                  <p className="text-2xl font-bold mb-1 tracking-tight">Need technical help?</p>
                  <p className="text-emerald-100 text-sm font-medium">Our specialists are one call away.</p>
                </div>
                <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all">
                  Get a Callback
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}