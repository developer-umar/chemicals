"use client";

import { motion } from "framer-motion";

export default function XuchuanPartnership() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* INDUSTRIAL GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#065f46 1px, transparent 1px), linear-gradient(90deg, #065f46 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-[#05080A] rounded-[3.5rem] p-8 md:p-20 shadow-2xl overflow-hidden relative border border-white/5">
          
          {/* DECORATIVE AMBIENCE */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: PARTNERSHIP TEXT */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Official Strategic Partnership
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8">
                Official Dealer of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Xuchuan Chemical</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                Tansol Exim is proud to announce its exclusive dealership in Kanpur for **Xuchuan Chemical's world-class Polyurethane (PU) Systems**[cite: 12]. Bringing global innovation and high-performance chemical solutions to the Indian footwear and leather industry[cite: 13, 40].
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10">
                <div>
                  <p className="text-white font-bold text-xl font-mono">Kanpur Region</p>
                  <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Authorized Distribution</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl font-mono">PU Systems</p>
                  <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Premium Grade</p>
                </div>
              </div>
            </div>

            {/* RIGHT: DUAL BRANDING DISPLAY */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center justify-around shadow-inner group">
                
                {/* XUCHUAN LOGO SLOT */}
                <div className="text-center group-hover:scale-105 transition-transform duration-500">
                  <div className="h-24 flex items-center justify-center mb-4">
                    {/* Ensure xuchuanLogo.png is in your /public folder */}
                    <img 
                      src="/public/xuchuanLogo.webp" 
                      alt="Xuchuan Chemical Logo" 
                      className="max-h-full object-contain brightness-0 invert" 
                    />
                  </div>
                  <p className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.3em]">Global PU Leader</p>
                </div>

                {/* CONNECTION LINE */}
                <div className="h-20 w-[1px] bg-gradient-to-b from-emerald-500/50 to-transparent"></div>

                {/* TANSOL LOGO / NAME */}
                <div className="text-center">
                  <h3 className="text-white font-black text-3xl tracking-tighter uppercase">
                    TANSOL <span className="text-emerald-500 font-serif italic">EXIM</span> [cite: 2]
                  </h3>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Kanpur Industrial Hub [cite: 5]</p>
                </div>

                {/* FLOATING BADGE */}
                <div className="absolute -top-6 -right-6 bg-emerald-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-center p-4 shadow-2xl rotate-12 border-4 border-slate-900 group-hover:rotate-0 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase leading-tight">Official Dealer</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}