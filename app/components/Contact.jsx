"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Phone, Mail, MapPin, Building } from "lucide-react";

export default function TansolContact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tansol Form Submission:", formData);
  };

  return (
    <section className="relative bg-slate-50 py-24 px-4 md:px-10 overflow-hidden" id="contact">
      
      {/* BACKGROUND CREATIVITY: Soft Light Accent Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_20%,#f8fafc_90%)]" />
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
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">Connect Globally</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Let&apos;s Start A <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-serif italic font-light">Business Conversation.</span>
          </motion.h2>
        </header>

        {/* MAIN SPLIT STRUCTURAL BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl">
          
          {/* LEFT SIDE: FORM INPUTS (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between bg-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300"
                      placeholder="Your Name"
                    />
                    <div className={`absolute bottom-0 left-5 right-5 h-[2px] bg-emerald-500 scale-x-0 ${activeField === 'name' ? 'scale-x-100' : ''} transition-transform duration-300`} />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Business Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300"
                      placeholder="name@company.com"
                    />
                    <div className={`absolute bottom-0 left-5 right-5 h-[2px] bg-emerald-500 scale-x-0 ${activeField === 'email' ? 'scale-x-100' : ''} transition-transform duration-300`} />
                  </div>
                </div>
              </div>

              {/* Company Input */}
              <div className="relative">
                <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Company / Organization</label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Building size={18} />
                  </div>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    onFocus={() => setActiveField('company')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl pl-14 pr-5 py-4 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300"
                    placeholder="Company Name"
                  />
                  <div className={`absolute bottom-0 left-5 right-5 h-[2px] bg-emerald-500 scale-x-0 ${activeField === 'company' ? 'scale-x-100' : ''} transition-transform duration-300`} />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <label className="block text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Message & Requirements</label>
                <div className="relative">
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setActiveField('msg')}
                    onBlur={() => setActiveField(null)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your sourcing needs, required volumes, or specifications..."
                  />
                  <div className={`absolute bottom-1 left-5 right-5 h-[2px] bg-emerald-500 scale-x-0 ${activeField === 'msg' ? 'scale-x-100' : ''} transition-transform duration-300`} />
                </div>
              </div>

              {/* ACTION EXECUTION BUTTON */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full group flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-5 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-emerald-600/10"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

            </form>

            {/* QUICK CONTACT FOOTER */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100 text-slate-600 font-semibold text-xs">
              <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Mail size={14} className="text-emerald-600" />
                <span>contact@rizq.tech</span>
              </div>
              <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Phone size={14} className="text-emerald-600" />
                <span>+91 8576057583</span>
              </div>
              <div className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <MapPin size={14} className="text-emerald-600" />
                <span>Kanpur, India</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: FULL COLOR VISUAL ASSET (5 Columns) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-100">
            <Image 
              src="/contact.webp" 
              alt="Tansol Exims Global Operations" 
              fill
              sizes="(max-w-7xl) 40vw, 100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-102"
              priority
            />
            {/* Soft Overlay to tie it into the light look */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/40 via-transparent to-transparent z-10" />
            
            {/* FLOATING TEXTURE CARD ON OVERLAY */}
            <div className="absolute bottom-8 left-8 right-8 z-20 hidden sm:block">
              <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-lg">
                <p className="text-slate-900 font-extrabold text-lg tracking-tight mb-1">Global Trade Node</p>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">Our execution operations connect trusted global factories seamlessly to fulfill critical business timelines.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}