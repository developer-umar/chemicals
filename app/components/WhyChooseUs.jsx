"use client";

import { motion } from "framer-motion";
import { Award, Globe, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const features = [
  {
    number: "18+",
    title: "Years Experience",
    description: "Deep expertise in leather chemicals and global footwear sourcing.",
    icon: <Award className="w-8 h-8 text-cyan-600" />,
  },
  {
    number: "Global",
    title: "Import Network",
    description: "Strategic partnerships across China, Turkey, and Europe.",
    icon: <Globe className="w-8 h-8 text-cyan-600" />,
  },
  {
    number: "100%",
    title: "Quality Assurance",
    description: "Every product is COA-backed for industrial reliability.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
  },
  {
    number: "Trusted",
    title: "Business Relations",
    description: "Built on transparency and long-term service commitment.",
    icon: <Handshake className="w-8 h-8 text-cyan-600" />,
  },
];

// Animation Variants for Performance & Cleanliness
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-100/50 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[1px] bg-cyan-500"></span>
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs">
              Why FH Chemicals
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Trusted Industrial & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
              Global Trading Partner
            </span>
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">{item.number}</h3>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="w-full h-[1px] bg-slate-100 group-hover:bg-cyan-200 transition-colors" />
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Call-to-Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to elevate your production?
            </h3>
            <p className="text-slate-400">Join 500+ manufacturers using our premium chemicals.</p>
          </div>
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold transition-all group">
            Explore Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}