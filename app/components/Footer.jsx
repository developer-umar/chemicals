"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#05080A] text-white pt-24">
      {/* RADIANT EMERALD GRADIENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* PRE-FOOTER CTA CARD - Updated Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl p-10 md:p-16 mb-24 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                Established 2012
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tighter">
                Let's Build Strong <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic font-serif font-light">Industrial Partnerships</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl font-medium">
                Tansol Exim is a reputed importer and trader of PU Systems, footwear components, and specialized leather chemicals[cite: 12].
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="tel:+919839336620" className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl shadow-emerald-900/20">
                Contact Our Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* MAIN NAVIGATION CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
              TANSOL <span className="text-emerald-500 font-serif italic">EXIM</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              A 100% import-based firm supplying globally sourced raw materials to the Indian footwear and leather market[cite: 40].
            </p>
            <div className="pt-2">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block mb-2">Business Type</span>
               <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Importer & Trader [cite: 10]</p>
            </div>
          </div>

          {/* PRODUCTS COLUMN - Accurate as per PDF */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-b border-white/5 pb-4">Core Portfolio</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {['PU Systems for Shoes', 'Shoe Components', 'Finished Leather', 'Leather Chemicals', 'Industrial Auxiliaries'].map((item) => (
                <li key={item} className="hover:text-emerald-400 transition-colors cursor-default flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-900"></span>
                  {item} 
                </li>
              ))}
            </ul>
          </div>

          {/* NETWORK COLUMN */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-b border-white/5 pb-4">Global Network</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Maintaining long-term relationships with reputed suppliers from China, Turkey, and other global hubs.
            </p>
            <div className="flex items-center gap-3 text-emerald-500">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round"/></svg>
               <span className="text-[10px] font-black uppercase tracking-widest">COA Backed Quality </span>
            </div>
          </div>

          {/* CONTACT COLUMN - 100% Accurate Data */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8 border-b border-white/5 pb-4">Official HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Phone</p>
                  <p className="text-sm font-bold text-slate-200">+91-9839336620 [cite: 6]</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Address</p>
                  <p className="text-sm font-bold text-slate-200 leading-tight">
                    Plot No. 25, Lari Compound, Gajjupurwa, Jajmau, Kanpur [cite: 4]
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} TANSOL EXIM. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-emerald-500/60 text-[10px] font-black uppercase tracking-widest">GST: 09BEJPA6911E1ZR </span>
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-emerald-500 transition-colors">Proprietor: Mr. Nadeem Ajmal </span>
          </div>
        </div>

      </div>
    </footer>
  );
}