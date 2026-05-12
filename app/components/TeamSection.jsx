"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Nadeem Ajmal",
    role: "Proprietor & Director",
    description: "18+ years of expertise in leather chemicals, global sourcing, and industrial trading solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Marketing Team",
    role: "Business Development",
    description: "Dedicated professionals handling global client communication and strategic order management.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Technical Experts",
    role: "Industrial Support",
    description: "Experienced specialists providing product guidance and industrial troubleshooting assistance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">Leadership & Team</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
            >
              The Experts Behind <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 italic font-serif font-light">Tansol Exims</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-lg max-w-sm border-l-2 border-emerald-100 pl-6"
          >
            Our leadership combines decades of technical knowledge with global trading excellence.
          </motion.p>
        </div>

        {/* TEAM CARDS - Responsive Grid with Scale effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Floating Role Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">
                    Tansol Official
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Icons on Hover */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors cursor-pointer">
                    <Linkedin size={18} />
                  </div>
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors cursor-pointer">
                    <Mail size={18} />
                  </div>
                </div>

                {/* BOTTOM CONTENT (Inside Image) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-emerald-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RE-DESIGNED BOTTOM CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-1 bg-gradient-to-r from-emerald-100 to-transparent rounded-[3rem]"
        >
          <div className="bg-white p-10 md:p-14 rounded-[2.9rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 max-w-md leading-tight">
              Get technical guidance from our <span className="text-emerald-600">Experts.</span>
            </h3>
            
            <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">Connect With Leadership</span>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowRight size={20} />
              </div>
              <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}