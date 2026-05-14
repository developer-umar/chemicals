"use client";

import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const features = [
  {
    number: "14+",
    title: "Years Experience",
    description: "Deep expertise in leather chemicals and global footwear sourcing.",
    icon: <Award className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: "Global",
    title: "Import Network",
    description: "Strategic partnerships across China, Turkey, and Europe.",
    icon: <Globe className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: "100%",
    title: "Quality Assurance",
    description: "Every product is COA-backed for industrial reliability.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
  },
  {
    number: "Trusted",
    title: "Business Relations",
    description: "Built on transparency and long-term service commitment.",
    icon: <Handshake className="w-8 h-8 text-emerald-600" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-[100px] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-emerald-500"></span>
            <span className="text-emerald-700 font-bold uppercase tracking-tighter text-xs">Why Tansol Exims</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Setting the Standard in <br/>
            <span className="text-emerald-600 italic font-serif">Global Industrial Solutions</span>
          </h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">{item.number}</h3>
              <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}