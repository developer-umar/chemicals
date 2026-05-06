"use client";

import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Footwear Industry",
      icon: "👞",
      description:
        "Supplying PU systems, shoe components, and industrial footwear materials.",
    },

    {
      title: "Leather Industry",
      icon: "🧥",
      description:
        "Premium leather chemicals, tanning solutions, and finishing materials.",
    },

    {
      title: "Manufacturing Units",
      icon: "🏭",
      description:
        "Industrial support and raw materials for production facilities and factories.",
    },

    {
      title: "Export Businesses",
      icon: "🌍",
      description:
        "Reliable sourcing and premium-grade materials for export-oriented businesses.",
    },

    {
      title: "Wholesalers & Traders",
      icon: "📦",
      description:
        "Bulk supply solutions with long-term business support and dependable sourcing.",
    },

    {
      title: "Industrial Processing",
      icon: "⚙️",
      description:
        "Advanced industrial chemicals and technical product assistance for production.",
    },
  ];

  return (
    <section className="section-spacing relative overflow-hidden bg-gradient-to-b from-white to-cyan-50">

      {/* HUGE BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="container-width relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 text-cyan-700 px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            Industries We Serve
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">

            Empowering Multiple
            Industrial

            <span className="gradient-text">
              {" "}Sectors
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            FH Chemicals supports a wide range of industrial sectors with
            premium imported materials, leather solutions, technical expertise,
            and global sourcing capabilities tailored for modern businesses.
          </p>
        </motion.div>

        {/* INDUSTRY LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 mt-24">

          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden rounded-[40px]
                border border-white/50
                bg-white/70
                backdrop-blur-xl
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-3
                hover-transition
                
                ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-6"
                }
              `}
            >

              {/* BACKGROUND GLOW */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 hover-transition"></div>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center text-5xl shadow-lg mb-10 group-hover:scale-110 hover-transition">

                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">

                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">

                  {item.description}
                </p>

                {/* BUTTON */}
                <button className="mt-10 flex items-center gap-3 text-cyan-600 font-bold text-lg group-hover:gap-5 hover-transition">

                  Explore Industry

                  <span>
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM HUGE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[45px] bg-gradient-to-r from-cyan-600 to-sky-600 p-14 lg:p-20 shadow-2xl"
        >

          {/* BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">

                Building Long-Term
                Industrial Partnerships
              </h3>

              <p className="mt-8 text-cyan-50 text-lg leading-relaxed">
                We focus on delivering premium imported products,
                technical support, and dependable industrial solutions
                for growing businesses and manufacturing sectors.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex lg:justify-end">

              <button className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 hover-transition">

                Connect With Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}