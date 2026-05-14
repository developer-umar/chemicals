"use client";

import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Handshake } from "lucide-react";

const features = [
  {
    number: "14+",
    title: "Years Experience",
    description: "Deep expertise in leather chemicals and global footwear sourcing.",
    icon: <Award className="w-8 h-8 transition-colors duration-300 group-hover:text-white" />,
  },
  {
    number: "Global",
    title: "Import Network",
    description: "Strategic partnerships across China, Turkey, and Europe.",
    icon: <Globe className="w-8 h-8 transition-colors duration-300 group-hover:text-white" />,
  },
  {
    number: "100%",
    title: "Quality Assurance",
    description: "Every product is COA-backed for industrial reliability.",
    icon: <ShieldCheck className="w-8 h-8 transition-colors duration-300 group-hover:text-white" />,
  },
  {
    number: "Trusted",
    title: "Business Relations",
    description: "Built on transparency and long-term service commitment.",
    icon: <Handshake className="w-8 h-8 transition-colors duration-300 group-hover:text-white" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#FBFCFC] overflow-hidden">
      {/* PROFESSIONAL BACKGROUND CREATIVITY */}
      {/* 1. Subtle Dot Matrix (Industrial Feel) */}
      <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }}>
      </div>
      
      {/* 2. Soft Emerald Gradients */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-[10px]">Strategic Advantages</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Elevating Industrial <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-serif italic font-medium">Standards Globally</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-200/60 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(16,185,129,0.05)]"
            >
              {/* HOVER GLOW EFFECT (Hidden by default) */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* ICON CONTAINER - Changes to Emerald on Hover */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-12 text-emerald-600 border border-slate-100 group-hover:bg-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.number}
                </h3>
                
                <h4 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* BOTTOM INDICATOR */}
                <div className="mt-8 w-8 h-[2px] bg-slate-100 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}