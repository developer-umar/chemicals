"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white" id="cta-partnership">
      
      {/* PROFESSIONAL LIGHT BACKGROUND DECOR */}
      {/* 1. Subtle Mesh Grid (Engineering Vibe) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      {/* 2. Soft Emerald Glows for Depth */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative bg-slate-950 border border-slate-900 rounded-[3.5rem] p-8 md:p-20 shadow-2xl overflow-hidden">
          
          {/* 3. OPTIMIZED NEXT.JS IMAGE LAYER */}
          <div className="absolute inset-0 z-0 opacity-45 pointer-events-none transition-opacity duration-500">
            <Image 
              src="/cta.webp" 
              alt="Industrial Background" 
              fill
              priority
              sizes="(max-w-7xl) 100vw"
              className="object-cover object-center scale-100"
            />
          </div>
          {/* Balanced Transparent Gradient Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30 z-0" />
          <div className="absolute inset-0 bg-black/20 z-0" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT SIDE: THE PITCH */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8"
              >
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Partner with Tansol Exims
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8"
              >
                Elevate Your <br />
                <span className="text-emerald-400 italic font-serif font-light underline decoration-emerald-500/30 underline-offset-8">Production Quality</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-300 text-lg leading-relaxed max-w-lg mb-10 font-medium"
              >
                Connect with our technical experts to explore premium industrial chemicals, footwear materials, and global sourcing solutions tailored for your business.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-emerald-950/50">
                  Contact Our Team
                </button>
                
              </motion.div>
            </div>

            {/* RIGHT SIDE: INTERACTIVE 3D/PARALLAX STATS BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ParallaxCard>
                <p className="text-4xl font-black text-white mb-1 tracking-tighter">14+</p>
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Years of Trust</p>
              </ParallaxCard>

              <ParallaxCard>
                <p className="text-4xl font-black text-white mb-1 tracking-tighter">Global</p>
                <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Import Network</p>
              </ParallaxCard>

              {/* Clean layout block without buttons */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sm:col-span-2 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90 backdrop-blur-md p-10 rounded-[2.5rem] text-white flex flex-col justify-center min-h-[140px] shadow-xl shadow-emerald-950/20"
              >
                <p className="text-2xl font-bold tracking-tight">Need technical help?</p>
                <p className="text-emerald-100 text-sm font-medium">Our specialists are one call away.</p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ParallaxCard({ children }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-900/60 backdrop-blur-md p-8 rounded-[2rem] border border-slate-800 shadow-xl hover:border-emerald-500/50 transition-colors duration-300 cursor-pointer select-none"
    >
      <div style={{ transform: "translateZ(20px)" }} className="transition-transform duration-300">
        {children}
      </div>
    </motion.div>
  );
}