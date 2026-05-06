"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoreBusiness() {
  const businesses = [
    {
      title: "PU Systems",
      description:
        "Premium polyurethane systems for footwear, slippers, and industrial applications sourced from trusted global suppliers.",

      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Leather Chemicals",
      description:
        "High-quality leather processing chemicals including tanning agents, dyes, finishing chemicals, oils, and auxiliaries.",

      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Leather Trading",
      description:
        "Import and trading of raw, finished, and semi-finished leather materials for industrial and commercial applications.",

      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Shoe Components",
      description:
        "Supplying soles, straps, footwear accessories, and industrial shoe materials for manufacturing units.",

      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Leather Goods",
      description:
        "Premium leather belts, wallets, handbags, and custom leather accessories for trading and export purposes.",

      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Hairon Carpets",
      description:
        "Luxury leather and hairon carpets crafted for premium interiors and export-grade furnishing applications.",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-spacing bg-slate-50 overflow-hidden">

      <div className="container-width">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            Our Core Businesses
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">

            Industrial Materials &
            Global Trading

            <span className="gradient-text">
              {" "}Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            FH Chemicals delivers globally sourced industrial materials,
            leather solutions, footwear raw materials, and premium leather
            goods with a strong focus on quality, reliability, and long-term business partnerships.
          </p>
        </motion.div>

        {/* BUSINESS CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {businesses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[35px] overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-3 hover-transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                {/* Replace later with your own business image if needed */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                {/* FLOATING LABEL */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-md">

                  FH Chemicals
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5">
                  {item.description}
                </p>

                {/* BUTTON */}
                <button className="mt-8 flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 hover-transition">

                  Learn More

                  <span>
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}