"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalNetwork() {
  const countries = [
    {
      country: "China",
      description:
        "Premium industrial materials, PU systems, and footwear raw materials sourced from trusted Chinese suppliers.",

      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1400&auto=format&fit=crop",
    },

    {
      country: "Turkey",
      description:
        "High-quality leather materials, finishing products, and industrial solutions imported from Turkey.",

      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1400&auto=format&fit=crop",
    },

    {
      country: "Global Markets",
      description:
        "Expanding sourcing partnerships with international manufacturers and industrial suppliers worldwide.",

      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden relative">

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container-width relative z-10">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold mb-8">

            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>

            International Import Network
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">

            Global Sourcing &
            International

            <span className="gradient-text">
              {" "}Supply Network
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            FH Chemicals maintains long-term sourcing relationships with trusted
            international suppliers to deliver premium industrial materials,
            leather chemicals, footwear raw materials, and specialized products
            for the Indian market.
          </p>
        </motion.div>

        {/* MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-20 bg-slate-50 border border-slate-200 rounded-[40px] overflow-hidden p-10 lg:p-20 shadow-xl"
        >

          {/* WORLD MAP IMAGE */}
          <div className="relative">

            {/* Replace later if you want your own global map */}
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
              alt="Global Network"
              width={1600}
              height={900}
              className="w-full rounded-[30px] object-cover max-h-[550px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-slate-900/40 rounded-[30px]"></div>

            {/* FLOATING CARD 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-10 left-10 bg-white shadow-2xl rounded-3xl p-6 hidden md:block"
            >

              <h3 className="text-3xl font-black text-cyan-600">
                China
              </h3>

              <p className="text-slate-500 mt-2">
                PU Systems & Raw Materials
              </p>
            </motion.div>

            {/* FLOATING CARD 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-10 bg-white shadow-2xl rounded-3xl p-6 hidden md:block"
            >

              <h3 className="text-3xl font-black text-cyan-600">
                Turkey
              </h3>

              <p className="text-slate-500 mt-2">
                Leather & Industrial Products
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* COUNTRY CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {countries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-slate-50 border border-slate-200 rounded-[35px] overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover-transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.country}
                  width={700}
                  height={500}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

                {/* BADGE */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-md">

                  Global Network
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-3xl font-black text-slate-900">
                  {item.country}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5">
                  {item.description}
                </p>

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