"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building, ShieldCheck, Users, Globe2, Briefcase } from "lucide-react";

export default function TansolFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#090d10] text-white pt-20 border-t border-slate-800/40">
      {/* RADIANT PROFESSIONAL BACKGROUND LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* UPPER DYNAMIC META BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* COL 1: FIRM OVERVIEW (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 block">Global Sourcing Network</span>
              <h3 className="text-3xl font-black tracking-tighter">
                TANSOL <span className="text-emerald-500 font-serif italic font-light">EXIM</span>
              </h3>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md">
              Established in 2012, TANSOL EXIM is a reputed importer and trader of Polyurethane (PU) Systems for slippers & shoes, shoe components, leather, and leather chemicals. With a strong presence across the Indian footwear market, we supply premium materials globally sourced from China, Turkey, and other trade hubs.
            </p>
            <div className="inline-flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-2"><Building size={14} className="text-emerald-500" /> Estd: 2012</span>
              <span className="flex items-center gap-2"><Globe2 size={14} className="text-emerald-500" /> Type: Importer & Trader</span>
            </div>
          </div>

          {/* COL 2: CORE PORTFOLIO (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <Briefcase size={14} className="text-emerald-500" /> Core Products
            </h4>
            <ul className="space-y-3.5 text-slate-400 text-sm font-medium">
              {[
                "PU Systems for Slippers & Shoes",
                "Shoe Components (Soles, Straps)",
                "Finished & Semi-Finished Leather",
                "Leather Chemicals & Auxiliaries"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 hover:text-white transition-colors duration-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: HEADQUARTERS & LOGISTICS (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
              <MapPin size={14} className="text-emerald-500" /> Headquarters
            </h4>
            <div className="space-y-4 text-sm font-medium text-slate-300">
              <div className="flex gap-3.5">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-relaxed text-xs">
                  Plot No. 25, Lari Compound, Gajjupurwa, Jajmau, Shiwans Tenray, Kanpur Nagar, Uttar Pradesh – 208010, India
                </p>
              </div>
              <div className="flex gap-3.5 items-center">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <a href="tel:+919839336620" className="text-slate-200 font-bold hover:text-emerald-400 transition-colors">
                  +91-9839336620
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* MIDDLE EXPERTISE SEGMENT (3 Grid System) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-white/5 text-sm">
          {/* Proprietor Block */}
          <div className="bg-white/[0.01] border border-white/[0.03] p-6 rounded-2xl">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" /> 18+ Years Leadership
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              Guided by Mr. Nadeem Ajmal, utilizing extensive field expertise in technical procurement, sourcing dynamics, and structural market scaling.
            </p>
          </div>

          {/* Technical Team Block */}
          <div className="bg-white/[0.01] border border-white/[0.03] p-6 rounded-2xl">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <Users size={16} className="text-emerald-500" /> Technical Support
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              Provides on-floor technical assistance, machine layout setups, troubleshooting workflows, and deep structural material testing under one roof.
            </p>
          </div>

          {/* Strengths Block */}
          <div className="bg-white/[0.01] border border-white/[0.03] p-6 rounded-2xl">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <Globe2 size={16} className="text-emerald-500" /> Global Supply Matrix
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              Ensuring 100% compliant imported raw materials backed comprehensively by Certificate of Analysis (COA) protocols and safe logistics.
            </p>
          </div>
        </div>

        {/* BOTTOM METADATA & COMPLIANCE AREA */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <p>© {currentYear} TANSOL EXIM. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <span className="text-emerald-500/70">GST: 09BEJPA6911E1ZR</span>
            <span className="text-slate-400">Proprietor: Mr. Nadeem Ajmal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}