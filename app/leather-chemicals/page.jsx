"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FlaskConical } from "lucide-react";

const chemicalTabs = {
  wetend: {
    id: "wetend",
    label: "Wet-End Chemicals",
    title: "High-Performance Syntans & Fatliquors",
    tagline: "Beamhouse to Retanning Matrix",
    description: "Our Wet-End solutions offer excellent penetration and stabilization properties. Formulated to provide optimal fullness, grain tightness, and exceptional shaving property to wet-blue and wet-white hides.",
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
    specs: ["Eco-friendly Chrome stabilizer matrix", "Deep fiber leveling properties", "REACH & COA Certified Compliance"],
  },
  finishing: {
    id: "finishing",
    label: "Finishing Auxiliaries",
    title: "Advanced Polyurethane & Acrylic Coatings",
    tagline: "Surface Enhancement Systems",
    description: "Premium leather finishing chemicals that enhance surface durability, rub-fastness, and aesthetic texture without altering the natural leather breathability.",
    image: "https://images.unsplash.com/photo-1517146087580-f8c777f54e45?q=80&w=1400&auto=format&fit=crop",
    specs: ["High rub-fastness (wet & dry)", "Excellent heat and light resistance", "Gloss and Matte profile tuning"],
  },
};

export default function LeatherChemicalsPage() {
  const [activeTab, setActiveTab] = useState("wetend");
  const currentData = chemicalTabs[activeTab];

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Global Operations
        </Link>

        <div className="flex border-b border-slate-200 mb-16 gap-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          {Object.values(chemicalTabs).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-4 text-base font-bold transition-colors duration-300 focus:outline-none"
              style={{ color: activeTab === tab.id ? "#0f172a" : "#94a3b8" }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeChemTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-emerald-600"></span>
                <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">{currentData.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">{currentData.title}</h1>
              <p className="text-slate-600 text-lg font-light leading-relaxed">{currentData.description}</p>
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-600" /> Technical Parameters
                </h3>
                <div className="grid gap-3">
                  {currentData.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <Image src={currentData.image} alt={currentData.title} fill className="object-cover" priority />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}