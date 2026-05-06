"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Leather Processing",
      image:
        "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1400&auto=format&fit=crop",
      height: "h-[500px]",
    },

    {
      title: "Industrial Chemicals",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1400&auto=format&fit=crop",
      height: "h-[320px]",
    },

    {
      title: "Footwear Materials",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop",
      height: "h-[420px]",
    },

    {
      title: "Leather Goods",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1400&auto=format&fit=crop",
      height: "h-[520px]",
    },

    {
      title: "Global Imports",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
      height: "h-[340px]",
    },

    {
      title: "Hairon Carpets",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
      height: "h-[440px]",
    },
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container-width relative z-10">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            Industrial Showcase
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">

            Premium Industrial &
            Leather

            <span className="gradient-text">
              {" "}Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            Explore our industrial expertise, imported materials,
            leather solutions, footwear products, and premium-quality
            business operations through our global sourcing network.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[40px] shadow-xl ${item.height}`}
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 hover-transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                {/* LABEL */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5">

                  FH Chemicals
                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-white leading-tight">

                  {item.title}
                </h3>

                {/* BUTTON */}
                <button className="mt-6 flex items-center gap-3 text-cyan-200 font-semibold text-lg group-hover:gap-5 hover-transition">

                  View Showcase

                  <span>
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HUGE BOTTOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[50px] bg-slate-900 p-14 lg:p-20 shadow-2xl"
        >

          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-200 px-5 py-2 rounded-full text-sm font-semibold mb-8">

                Global Industrial Excellence
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">

                Premium Products Backed By
                International Sourcing
              </h3>

              <p className="mt-8 text-slate-300 text-lg leading-relaxed">
                FH Chemicals continues to deliver industrial-quality
                products, leather solutions, and trusted sourcing
                partnerships for modern manufacturing and trading businesses.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex lg:justify-end">

              <button className="primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 hover-transition">

                Explore Products
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}