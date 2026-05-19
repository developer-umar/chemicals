"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers, Zap } from "lucide-react";

// Production Data Object for Tabs inside PU Systems
const puTabsContent = {
  shoes: {
    id: "shoes",
    label: "Footwear & Shoes Matrix",
    title: "High-Density Polyurethane for Premium Footwear",
    tagline: "Sports & Formal Soling Solutions",
    description: "Our footwear PU system offers exceptional dynamic performance, structural memory, and lightweight density distribution. Specifically engineered for premium sports midsoles and high-end formal shoe outer units.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
    specs: ["Density: 0.35 - 0.45 g/cm³", "Hardness: 55-65 Shore A", "Excellent Flex Resistance (>100k cycles)"],
  },
  sleeper: {
    id: "sleeper",
    label: "Sleeper & Comfort Soles",
    title: "Soft Elastomeric Systems for High-Comfort Sleepers",
    tagline: "Ergonomic Cushioning Technology",
    description: "Formulated for maximum impact absorption and household durability. This compound provides a plush, comfortable landing matrix underfoot, perfect for casual sleepers, flip-flops, and specialized orthotic bases.",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec99930a?q=80&w=1400&auto=format&fit=crop",
    specs: ["Density: 0.28 - 0.32 g/cm³", "High Cushioning Coefficient", "Optimal Grip & Anti-Slip Patterning"],
  },
};

export default function PuSystemsPage() {
  const [activeTab, setActiveTab] = useState("shoes");
  const currentData = puTabsContent[activeTab];

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK TO HUB */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Global Operations
        </Link>

        {/* ULTRA-PREMIUM MINIMALIST TAB SWITCHER */}
        <div className="flex border-b border-slate-200 mb-16 gap-8">
          {Object.values(puTabsContent).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-4 text-base font-bold transition-colors duration-300 focus:outline-none"
              style={{ color: activeTab === tab.id ? "#0f172a" : "#94a3b8" }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeCorporateTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* INTERACTIVE DYNAMIC CONTENT AREA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            {/* LEFT DATA BLOCK */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-emerald-600"></span>
                <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">
                  {currentData.tagline}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                {currentData.title}
              </h1>

              <p className="text-slate-600 text-lg font-light leading-relaxed">
                {currentData.description}
              </p>

              {/* TECHNICAL DATA LIST */}
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-600" /> Technical Parameters
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

            {/* RIGHT IMAGE PANEL */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <Image
                src={currentData.image}
                alt={currentData.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </main>
  );
}