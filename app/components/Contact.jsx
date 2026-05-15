"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Send, Phone, Mail, MapPin, Building } from "lucide-react";

export default function CorporateContact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Heavy validation logic or API hit handles here
    console.log("Enterprise Form Query Pack:", formData);
  };

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden" id="contact">
      
      {/* 1. VISIBLE BRANDING GRID MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,transparent_10%,#050505_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER BLOCK */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-2 w-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#facc15]" />
            <span className="text-yellow-500 font-mono text-xs font-black tracking-[0.4em] uppercase">Global Inquiries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter"
          >
            LET'S BUILD <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">THE ARCHITECTURE.</span>
          </motion.h2>
        </header>

        {/* MAIN SPLIT STRUCTURAL BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-950/40 border border-zinc-900 rounded-[3.5rem] overflow-hidden backdrop-blur-md shadow-2xl">
          
          {/* LEFT SIDE: THE ENTERPRISE CAPTURE FORM (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* INPUT FIELDS MODULES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-2xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-yellow-500/50 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                    <motion.div className={`absolute bottom-0 left-5 right-5 h-[1px] bg-yellow-400 opacity-0 ${activeField === 'name' ? 'opacity-100' : ''} transition-opacity duration-300`} />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Corporate Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-2xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-yellow-500/50 transition-colors duration-300"
                      placeholder="name@company.com"
                    />
                    <motion.div className={`absolute bottom-0 left-5 right-5 h-[1px] bg-yellow-400 opacity-0 ${activeField === 'email' ? 'opacity-100' : ''} transition-opacity duration-300`} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Company / Organization</label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600">
                    <Building size={18} />
                  </div>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    onFocus={() => setActiveField('company')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-2xl pl-14 pr-5 py-4 text-sm font-semibold focus:outline-none focus:border-yellow-500/50 transition-colors duration-300"
                    placeholder="Enterprise LLC"
                  />
                  <motion.div className={`absolute bottom-0 left-5 right-5 h-[1px] bg-yellow-400 opacity-0 ${activeField === 'company' ? 'opacity-100' : ''} transition-opacity duration-300`} />
                </div>
              </div>

              <div className="relative">
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Project Specifications</label>
                <div className="relative">
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setActiveField('msg')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-zinc-900/60 border border-zinc-800 text-white rounded-3xl px-5 py-4 text-sm font-semibold focus:outline-none focus:border-yellow-500/50 transition-colors duration-300 resize-none"
                    placeholder="Describe your architectural blueprints, timelines, or requirements..."
                  />
                  <motion.div className={`absolute bottom-1 left-5 right-5 h-[1px] bg-yellow-400 opacity-0 ${activeField === 'msg' ? 'opacity-100' : ''} transition-opacity duration-300`} />
                </div>
              </div>

              {/* ACTION EXECUTION MODULE */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full group relative flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black p-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-yellow-950/20 transition-all duration-300"
              >
                <span>Initiate Deployment</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

            </form>

            {/* QUICK STRIP HEADQUARTERS LINKS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-900/80 text-zinc-400 font-medium text-xs">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-yellow-500" />
                <span>contact@rizq.tech</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="text-yellow-500" />
                <span>+91 8576057583</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={14} className="text-yellow-500" />
                <span>Kanpur, India</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: THE BALANCED VISUAL COMPONENT (5 Columns) */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full overflow-hidden bg-zinc-900">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none transition-opacity duration-700">
              {/* 2. NEXT.JS ASSET PARSING VIA CONTACT.WEBP */}
              <Image 
                src="/contact.webp" 
                alt="Corporate Architecture Asset" 
                fill
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
            {/* Dynamic Black-To-Translucent Mask System */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute inset-0 bg-yellow-500/5 mix-blend-color z-10" />

            {/* FLOATING TEXTURE ON OVERLAY */}
            <div className="absolute bottom-12 left-12 right-12 z-20 hidden sm:block">
              <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl">
                <p className="text-white font-black text-xl tracking-tight mb-2">Corporate Node</p>
                <p className="text-zinc-400 text-xs font-semibold leading-relaxed">Our execution engines operate around the clock to translate your engineering blueprints into reality.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}