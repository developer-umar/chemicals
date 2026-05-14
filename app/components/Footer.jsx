"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0A0F14] text-white pt-24">
      {/* RADIANT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* PRE-FOOTER CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-16 mb-24 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tighter">
                Let's Build Strong <br />
                <span className="text-emerald-500 italic font-serif font-light">Industrial Futures</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Partner with Tansol Exims for premium leather chemicals, PU systems, and dependable global sourcing solutions.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl shadow-emerald-900/20">
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>

        {/* MAIN NAVIGATION CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
              Tansol <span className="text-emerald-500">Exims</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A premier global trading house specializing in high-performance industrial chemicals and specialized footwear components.
            </p>
            {/* SOCIAL PLACEHOLDERS */}
            <div className="flex gap-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/40 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>

          {/* LINKS COLUMN */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {['Home', 'Company Profile', 'Product Range', 'Global Network', 'Technical Support'].map((link) => (
                <li key={link} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-emerald-500 group-hover:w-3 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS COLUMN */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 mb-8">Core Portfolio</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {['Polyurethane Systems', 'Leather Tanning Agents', 'Finishing Auxiliaries', 'Finished Leather', 'Industrial Logistics'].map((item) => (
                <li key={item} className="hover:text-emerald-400 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-500 mb-8">Official HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Phone</p>
                  <p className="text-sm font-bold text-slate-200">+91-9839336620</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Address</p>
                  <p className="text-sm font-bold text-slate-200 leading-tight">Plot No. 25, Lari Compound, Jajmau, Kanpur</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT AREA */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © {currentYear} <span className="text-slate-300">Tansol Exims Global</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">GST: 09BEJPA6911E1ZR</span>
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-emerald-500 transition-colors">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}