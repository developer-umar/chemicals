"use client";

import { motion } from "framer-motion";

export default function ClientShowcase() {

  const clients = [
    "Superhouse Group",
    "Mirza International",
    "Red Chief",
    "Rahman Industries",
    "Tirubala International",
    "Jama Corporation",
    "Black Stone India",
    "Ously Shoes",
    "Aki Castle Shoes",
    "Naaz Exports",
    "Sajid Tanners",
    "Premier Leather Exports",
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-slate-950">

      {/* HUGE BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* TOP CONTENT */}
      <div className="container-width relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-200 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-xl mb-8">

            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

            Trusted Industrial Network
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">

            Supporting India’s
            Growing Leather &
            Footwear Industry
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl text-slate-300 leading-relaxed">
            FH Chemicals supplies industrial materials, leather chemicals,
            PU systems, and footwear raw materials trusted by manufacturers,
            exporters, and industrial businesses across Kanpur and beyond.
          </p>
        </motion.div>
      </div>

      {/* FIRST MARQUEE */}
      <div className="relative mt-24 overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="
                min-w-[320px]
                bg-white/10
                border border-white/10
                backdrop-blur-xl
                rounded-[35px]
                px-8
                py-8
                shadow-2xl
                hover:scale-105
                hover-transition
              "
            >

              {/* TOP */}
              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white text-2xl shadow-xl">

                  🏭
                </div>

                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>

              {/* CLIENT */}
              <h3 className="text-2xl font-black text-white mt-8">

                {client}
              </h3>

              {/* TEXT */}
              <p className="text-slate-300 mt-4 leading-relaxed">

                Industrial footwear, leather, and manufacturing business network.
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECOND MARQUEE */}
      <div className="relative mt-10 overflow-hidden">

        <motion.div
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="
                min-w-[280px]
                bg-gradient-to-br
                from-cyan-500/20
                to-sky-500/10
                border border-white/10
                backdrop-blur-xl
                rounded-[35px]
                px-8
                py-8
                shadow-2xl
                hover:-translate-y-2
                hover-transition
              "
            >

              {/* TOP */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl">

                  🌍
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">

                    {client}
                  </h3>

                  <p className="text-cyan-200 text-sm mt-1">

                    Leather & Footwear
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM STATS */}
      <div className="container-width relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid
            md:grid-cols-3
            gap-8
            mt-24
          "
        >

          {/* STAT */}
          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <h3 className="text-6xl font-black text-cyan-300">

              18+
            </h3>

            <p className="text-slate-300 text-lg mt-4">

              Years Industry Experience
            </p>
          </div>

          {/* STAT */}
          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <h3 className="text-6xl font-black text-cyan-300">

              Global
            </h3>

            <p className="text-slate-300 text-lg mt-4">

              International Supplier Network
            </p>
          </div>

          {/* STAT */}
          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 text-center">

            <h3 className="text-6xl font-black text-cyan-300">

              100%
            </h3>

            <p className="text-slate-300 text-lg mt-4">

              Quality Focused Products
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}