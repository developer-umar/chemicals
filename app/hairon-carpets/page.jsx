"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function HaironCarpetsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Global Operations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Luxury Furnishing Line</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">Premium Natural Hairon Carpets</h1>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Elevating architectural indoor layouts with premium curated Hairon Leather Carpets. Naturally processed, shed-resistant layouts designed for high-end corporate and residential settings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Natural Variations</h4>
                  <p className="text-xs text-slate-500 mt-1">Unique texture patterns organically selected.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Premium Backing</h4>
                  <p className="text-xs text-slate-500 mt-1">Suede anti-slip bottom layer execution.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            <Image src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop" alt="Hairon Carpets" fill className="object-cover" priority />
          </motion.div>
        </div>
      </div>
    </main>
  );
}