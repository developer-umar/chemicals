"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cyan-50 to-white pt-36">

      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200/40 rounded-full blur-3xl"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-screen">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            Trusted Global Importers Since 2008
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">

            Premium

            <span className="gradient-text"> PU Systems </span>

            & Leather Chemical Solutions
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
            FH Chemicals is a trusted importer and trader of premium
            polyurethane systems, leather chemicals, shoe components,
            finished leather, and industrial raw materials sourced from
            global suppliers across China, Turkey, and other international markets.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="primary-gradient text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover-transition">
              Explore Products
            </button>

            <button className="border border-slate-300 text-slate-800 px-8 py-4 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-600 hover-transition">
              Contact Us
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                18+
              </h2>

              <p className="text-slate-500 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                500+
              </h2>

              <p className="text-slate-500 mt-2">
                Business Clients
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900">
                Global
              </h2>

              <p className="text-slate-500 mt-2">
                Import Network
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* MAIN IMAGE CARD */}
          <div className="relative bg-white rounded-[40px] shadow-2xl p-5 border border-slate-200 max-w-[600px]">

            {/* Replace this image later with your industrial/company image */}
            <Image
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1400&auto=format&fit=crop"
              alt="Industrial Chemicals"
              width={700}
              height={700}
              className="rounded-[30px] object-cover"
              priority
            />

            {/* FLOATING CARD 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-10 bg-white shadow-xl rounded-2xl p-5 border border-slate-200 hidden md:block"
            >
              <h3 className="text-3xl font-bold text-cyan-600">
                100%
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                Import Based Firm
              </p>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 bottom-10 bg-white shadow-xl rounded-2xl p-5 border border-slate-200 hidden md:block"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                China • Turkey
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                Global Suppliers
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}