"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section-spacing bg-white overflow-hidden">

      <div className="container-width grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <div className="relative z-10 overflow-hidden rounded-[35px] shadow-2xl">

            {/* Replace later with your company/factory image */}
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
              alt="FH Chemicals Team"
              width={700}
              height={800}
              className="w-full h-[650px] object-cover image-hover"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -bottom-10 -right-10 bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 z-20 hidden md:block"
          >
            <h2 className="text-5xl font-black text-cyan-600">
              18+
            </h2>

            <p className="text-slate-500 mt-2 font-medium">
              Years Industry Experience
            </p>
          </motion.div>

          {/* BACKGROUND SHAPE */}
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-100 rounded-full blur-3xl opacity-70"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            About FH Chemicals
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">

            Delivering Premium Industrial &
            Leather Solutions Since

            <span className="gradient-text">
              {" "}2008
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            FH Chemicals is a reputed importer and trader specializing
            in Polyurethane (PU) Systems, Leather Chemicals, Shoe Components,
            Finished Leather, and Industrial Raw Materials for the footwear
            and leather industry.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            With strong international sourcing networks across China,
            Turkey, and global markets, we provide reliable products,
            technical support, and long-term business partnerships
            to manufacturers, traders, and industrial units across India.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">

            {/* CARD 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover-transition">

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                <span className="text-2xl">
                  🌍
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Global Sourcing
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Trusted supplier network from China, Turkey, and international markets.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover-transition">

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                <span className="text-2xl">
                  🧪
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Premium Quality
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                COA-backed products ensuring reliability and industrial standards.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover-transition">

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                <span className="text-2xl">
                  🏭
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Industrial Support
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Technical assistance and product guidance for manufacturing units.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover-transition">

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                <span className="text-2xl">
                  🤝
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Trusted Partnership
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Long-term transparent business relationships with reliable support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}