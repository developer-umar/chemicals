"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const leatherProducts = [
  { id: "premium-travel-duffel", title: "Premium Travel Duffel", category: "Leather Bags", price: "$450", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800" },
  { id: "executive-oxford-shoes", title: "Executive Oxford Shoes", category: "Leather Shoes", price: "$290", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800" },
  { id: "minimalist-bifold-wallet", title: "Minimalist Bifold Wallet", category: "Leather Wallets", price: "$85", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800" },
  { id: "monarch-alligator-briefcase", title: "Monarch Alligator Briefcase", category: "Premium Bags", price: "$890", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800" },
  { id: "urban-heritage-backpack", title: "Urban Heritage Backpack", category: "Leather Bags", price: "$320", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800" },
  { id: "classic-chelsea-boots", title: "Classic Chelsea Boots", category: "Leather Shoes", price: "$310", image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800" },
  { id: "slim-card-sleeve", title: "Slim Card Sleeve", category: "Leather Wallets", price: "$65", image: "https://images.unsplash.com/photo-1588444839799-aea08566df26?q=80&w=800" },
  { id: "vanguard-totebag", title: "Vanguard Artisan Tote", category: "Premium Bags", price: "$410", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800" },
  { id: "aviator-messenger-bag", title: "Aviator Messenger Bag", category: "Leather Bags", price: "$260", image: "https://images.unsplash.com/photo-1590874103328-eacda8821c18?q=80&w=800" },
  { id: "handcrafted-loafers", title: "Handcrafted Loafers", category: "Leather Shoes", price: "$240", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800" },
  { id: "traveler-passport-case", title: "Traveler Passport Case", category: "Leather Wallets", price: "$110", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800" },
  { id: "signature-weekender-bag", title: "Signature Weekender Bag", category: "Premium Bags", price: "$620", image: "https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?q=80&w=800" },
];

export default function LeatherGoodsListing() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Core Operations
        </Link>

        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-emerald-600"></span>
            <span className="text-emerald-700 font-bold tracking-widest text-xs uppercase">B2B Premium Line</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            The Leather Goods <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-serif italic">Inventory Ecosystem</span>
          </h1>
        </div>

        {/* 12 PRODUCTS HIGH RESPONSIVE MATRIX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leatherProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-slate-200 rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-slate-50 mb-6">
                <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{product.category}</span>
              </div>
              
              <div className="flex flex-col justify-between flex-grow px-2 pb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1 group-hover:text-emerald-700 transition-colors duration-300">{product.title}</h3>
                  <p className="text-sm font-semibold text-slate-400">{product.price} <span className="text-[11px] font-normal text-slate-400/80">(MOQ Enabled)</span></p>
                </div>
                <div className="pt-5 mt-auto border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-600 transition-colors">Configure Spec</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <Link href={`/leather-goods/${product.id}`} className="absolute inset-0 z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}