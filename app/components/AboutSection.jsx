"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-spacing bg-[#fafafa] overflow-hidden" id="about">
      <div className="container-width grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT ASSET: Clean & Industrial */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* MAIN IMAGE: Leather/Industrial Focus */}
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)]">
            <Image
              src="https://images.unsplash.com/photo-1590674867585-81c0534b6244?q=80&w=1400&auto=format&fit=crop"
              alt="Tansol Industrial Excellence"
              width={700}
              height={800}
              className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* FLOATING BADGE: Minimalist */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 md:-right-10 bg-white border border-emerald-100 p-6 md:p-8 rounded-xl shadow-xl z-20"
          >
            <p className="text-sm uppercase tracking-widest text-emerald-600 font-bold mb-1">Since 2012</p>
            <h3 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tighter">
              14<span className="text-emerald-500 font-bold">+</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-tight">Years Industry Trust</p>
          </motion.div>

          {/* DECORATIVE BLUR */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-100/40 rounded-full blur-[100px] -z-10"></div>
        </motion.div>

        {/* RIGHT CONTENT: High-Impact Typography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* TAGLINE */}
          <div className="inline-flex items-center gap-3 text-emerald-700 mb-6 uppercase tracking-[0.3em] text-[10px] font-bold">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            Heritage of Quality
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-slate-950 leading-[1.1]">
            Global Leaders in <br />
            <span className="font-medium italic text-emerald-700 underline decoration-emerald-200 decoration-4 underline-offset-8">Tanning & PU Solutions</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-10 space-y-6 text-slate-600 font-light leading-relaxed text-base md:text-lg">
            <p>
              <strong className="text-slate-900 font-medium">Tansol</strong> is a premier global enterprise specializing in 
              the high-performance trade of Polyurethane (PU) Systems and Advanced Leather Chemicals. 
            </p>
            <p>
              We bridge the gap between global innovation and local manufacturing, sourcing superior raw materials 
              from Turkey, China, and Europe to empower the Indian footwear and leather sectors.
            </p>
          </div>

          {/* MINIMAL FEATURES GRID */}
          <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Global Network</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Direct sourcing from world-class chemical hubs.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Quality Backed</h4>
              <p className="text-sm text-slate-500 leading-relaxed">COA-certified products for industrial precision.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Technical Core</h4>
              <p className="text-sm text-slate-500 leading-relaxed">End-to-end guidance for production units.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">Modern Trade</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Transparent, reliable, and scalable partnerships.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}