"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Scissors, Briefcase } from "lucide-react";

export default function LeatherGoodsPage() {
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
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Export Grade Manufacturing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">B2B Bespoke Accessories & Goods</h1>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Engineering premium export-grade leather utilities including dynamic wallets, luxury belts, and custom accessories. Built directly on robust production lines for global markets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <Scissors className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Precision Stitching</h4>
                  <p className="text-xs text-slate-500 mt-1">High tear-strength structural bonding alignment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Bulk OEM Layout</h4>
                  <p className="text-xs text-slate-500 mt-1">Custom branding configurations for premium retail labels.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            <Image src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop" alt="Leather Goods" fill className="object-cover" priority />
          </motion.div>
        </div>
      </div>
    </main>
  );
}