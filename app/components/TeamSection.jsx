"use client";

import { ArrowRight, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Nadeem Ajmal",
    role: "Proprietor & Director",
    description: "18+ years of expertise in leather chemicals, global sourcing, and industrial trading solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marketing Team",
    role: "Business Development",
    description: "Dedicated professionals handling global client communication and strategic order management.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Technical Experts",
    role: "Industrial Support",
    description: "Experienced specialists providing product guidance and industrial troubleshooting assistance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Structural Background - 100% CSS No Images */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-[0.2em] text-[10px] uppercase">Leadership & Core Team</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              The Experts Behind <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 italic font-serif">Tansol Exims</span>
            </h2>
          </div>
        </div>

        {/* TEAM CARDS - Built for Stability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Using Standard img for zero-config deployment safety */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Heavy Gradient for text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

              {/* Social Actions */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors border border-white/20">
                  <Linkedin size={18} />
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors border border-white/20">
                  <Mail size={18} />
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{member.name}</h3>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MINIMALIST CTA */}
        <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-bold text-white max-w-md">
            Consult with our technical <span className="text-emerald-500 font-serif italic">specialists</span> today.
          </h3>
          <button className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
            Contact Leadership <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}