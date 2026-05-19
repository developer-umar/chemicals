"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Box, View, Sparkles, ShieldCheck } from "lucide-react";

// Production Data mock mapping dynamically generated IDs
const productSpecsData = {
  "premium-travel-duffel": { title: "Premium Travel Duffel", desc: "Full-grain aniline leather execution optimized for durability during transnational travel pipelines.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200", modelUrl: "/models/duffel.glb" },
  "executive-oxford-shoes": { title: "Executive Oxford Shoes", desc: "Hand-buffered premium calfskin with bespoke inner dynamic structural orthopedic support layer geometry.", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1200", modelUrl: "/models/oxford.glb" },
  "minimalist-bifold-wallet": { title: "Minimalist Bifold Wallet", desc: "RFID-shielded ultra-slim profile crafted with cross-grain robust edge stitching configurations.", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200", modelUrl: "/models/wallet.glb" },
};

export default function ProductDetailPage() {
  const { id } = useParams();
  
  // Default protection optimization if specific id doesn't exist in model parameters mock
  const product = productSpecsData[id] || {
    title: "Handcrafted Luxury Derivative",
    desc: "Bespoke high-end custom item matching international export specifications and chemical durability matrix parameters.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200",
    modelUrl: "/models/default_bag.glb"
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10">
      {/* LOAD GOOGLE MODEL VIEWER SCRIPTS OPTIMIZED */}
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" strategy="lazyOnload" />

      <div className="max-w-6xl mx-auto">
        <Link href="/leather-goods" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Inventory Listing
        </Link>

        {/* TOP SPLIT ROW: LEFT CONTENT BLOCK | RIGHT PRODUCT IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-slate-200 pb-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">Material Specification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">{product.title}</h1>
            <p className="text-slate-600 text-lg font-light leading-relaxed">{product.desc}</p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex gap-4 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">COA Certified Standard</h4>
                  <p className="text-xs text-slate-500 mt-1">Chemical threshold testing matched to REACH compliance blueprints.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex gap-4 items-start">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Custom Branding Available</h4>
                  <p className="text-xs text-slate-500 mt-1">Logo embossing metrics supported for direct corporate orders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
            <Image src={product.image} alt={product.title} fill className="object-cover" priority />
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH ROW: HIGH PERFORMANCE 3D INTERACTIVE ENGINE & AR MATRIX */}
        <div className="mt-20 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                <Box className="w-6 h-6 text-emerald-600" /> Interactive Spatial Diagnostics
              </h2>
              <p className="text-sm text-slate-500 mt-1">Rotate element below to examine micro-stitch layout configurations. Use mobile viewport to experience AR.</p>
            </div>
            
            {/* THE NEW MODERN BLUEPRINT FEATURE: QUICK ACCESSIBLE WEB AR INDICATOR */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-xl text-xs font-bold animate-pulse">
              <View className="w-4 h-4" /> WebAR Engine Synchronized
            </div>
          </div>

          {/* HIGH PERFORMANCE 3D VIEWPORT EMBED */}
          <div className="w-full h-[500px] md:h-[650px] bg-white border border-slate-200 shadow-inner rounded-[2.5rem] relative overflow-hidden group">
            {/* @ts-ignore - model-viewer handles custom native element rendering directly inside document window tree */}
            <model-viewer
              src={product.modelUrl}
              ios-src=""
              alt={`3D Spatial Rendering of ${product.title}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              poster={product.image}
              shadow-intensity="1.5"
              exposure="0.8"
              shadow-softness="1"
              auto-rotate
              style={{ width: "100%", height: "100%", outline: "none" }}
            >
              {/* Custom AR Trigger CTA Button Inside Model Environment */}
              <button slot="ar-button" className="absolute bottom-6 right-6 bg-slate-950 hover:bg-emerald-600 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-2 z-30">
                <View className="w-4 h-4" /> Project Element to Room (AR)
              </button>
            {/* @ts-ignore */}
            </model-viewer>
          </div>
        </div>

      </div>
    </main>
  );
}