import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Production data matrix synced perfectly with your theme layout
const servicesData = {
  "pu-systems": {
    title: "Polyurethane (PU) Systems",
    tagline: "Industrial Grade Polymers",
    description: "Our state-of-the-art PU Systems deliver world-class resilience, durability, and density management for high-demand footwear soles and technical auto-components.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    benefits: ["Optimized density structure", "Superior abrasion wear resistance", "Tailored chemical formulations"],
  },
  "leather-chemicals": {
    title: "Leather Chemicals",
    tagline: "Advanced Processing Matrix",
    description: "Sourcing premium Syntans, fatliquors, and processing matrix from eco-compliant chemical hubs to redefine Indian leather processing benchmarks.",
    image: "https://images.unsplash.com/photo-1616423641454-ec9935946192?q=80&w=1400&auto=format&fit=crop",
    benefits: ["Uniform leather fiber penetration", "Eco-friendly global compliance", "Enhanced thermal stability"],
  },
};

// Next.js static parameters parsing optimization
export async function generateStaticParams() {
  return [{ slug: "pu-systems" }, { slug: "leather-chemicals" }];
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* BACK TO DASHBOARD NAVIGATION */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-700 transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Core Operations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* TEXT DESCRIPTION FRAME */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-widest text-[10px] uppercase">
                {service.tagline}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              {service.title}
            </h1>

            <p className="text-slate-600 text-lg font-light leading-relaxed">
              {service.description}
            </p>

            {/* INDUSTRIAL BENCHMARKS SPECIFICATIONS */}
            <div className="pt-8 border-t border-slate-200 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Technical Advantages</h3>
              <div className="grid gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FLUID IMAGE DISPLAY BOX */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </main>
  );
}