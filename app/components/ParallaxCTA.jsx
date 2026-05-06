"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ParallaxCTA() {
  return (
    <section className="relative h-[900px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        {/* Replace later with your industrial/company image */}
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop"
          alt="Industrial Background"
          fill
          className="object-cover scale-110"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-slate-950/75"></div>
      </div>

      {/* HUGE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* FLOATING GLASS CARD */}
      <div className="relative z-10 h-full flex items-center">

        <div className="container-width">

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              max-w-5xl
              mx-auto
              rounded-[50px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-2xl
              shadow-2xl
              p-10
              md:p-16
              lg:p-20
            "
          >

            {/* FLOATING LIGHT */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

            {/* TOP TAG */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-200 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-xl">

              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

              Global Industrial Excellence
            </div>

            {/* HEADING */}
            <h2 className="mt-10 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">

              Delivering Premium
              Industrial Materials
              With

              <span className="text-cyan-300">
                {" "}Global Trust
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 text-xl text-slate-300 leading-relaxed max-w-3xl">

              FH Chemicals continues to support the leather,
              footwear, and industrial manufacturing sectors
              with premium imported materials, technical expertise,
              and dependable long-term sourcing partnerships.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 mt-12">

              <button className="primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 hover-transition">

                Explore Products
              </button>

              <button className="bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full text-lg font-bold backdrop-blur-xl hover:bg-white/20 hover-transition">

                Contact Our Team
              </button>
            </div>

            {/* BOTTOM STATS */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">

              {/* STAT */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

                <h3 className="text-5xl font-black text-cyan-300">

                  2008
                </h3>

                <p className="text-slate-300 mt-3">

                  Established Since
                </p>
              </div>

              {/* STAT */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

                <h3 className="text-5xl font-black text-cyan-300">

                  Global
                </h3>

                <p className="text-slate-300 mt-3">

                  Supplier Network
                </p>
              </div>

              {/* STAT */}
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">

                <h3 className="text-5xl font-black text-cyan-300">

                  Premium
                </h3>

                <p className="text-slate-300 mt-3">

                  Industrial Quality
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}