"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      number: "18+",
      title: "Years Experience",
      description:
        "Strong industry expertise in leather chemicals, footwear raw materials, and global sourcing.",
      icon: "🏆",
    },

    {
      number: "Global",
      title: "Import Network",
      description:
        "Trusted sourcing partnerships from China, Turkey, and international supplier markets.",
      icon: "🌍",
    },

    {
      number: "100%",
      title: "Quality Assurance",
      description:
        "COA-backed products ensuring premium industrial quality and reliable performance.",
      icon: "🧪",
    },

    {
      number: "Trusted",
      title: "Business Relations",
      description:
        "Transparent business practices with long-term support and dependable service.",
      icon: "🤝",
    },
  ];

  return (
    <section className="section-spacing bg-slate-50 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

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

            Why Choose FH Chemicals
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">

            Trusted Industrial &
            Global Trading

            <span className="gradient-text">
              {" "}Partner
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            We combine premium industrial products, reliable sourcing,
            technical expertise, and transparent business practices
            to deliver long-term value for manufacturers, traders,
            wholesalers, and production units.
          </p>
        </motion.div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[35px] border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-3 hover-transition overflow-hidden"
            >

              {/* ICON */}
              <div className="w-20 h-20 rounded-3xl bg-cyan-100 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 hover-transition">

                {item.icon}
              </div>

              {/* NUMBER */}
              <h3 className="text-5xl font-black gradient-text">
                {item.number}
              </h3>

              {/* TITLE */}
              <h4 className="text-2xl font-bold text-slate-900 mt-5">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-slate-600 leading-relaxed mt-5">
                {item.description}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 hover-transition"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-[40px] border border-slate-200 shadow-xl p-10 lg:p-14"
        >

          <div className="grid lg:grid-cols-3 gap-10 items-center">

            {/* LEFT */}
            <div>
              <h3 className="text-3xl font-black text-slate-900 leading-tight">

                Delivering Industrial Excellence
                Through Quality &
                Global Sourcing
              </h3>
            </div>

            {/* CENTER */}
            <div>
              <p className="text-lg text-slate-600 leading-relaxed">
                FH Chemicals continues to serve the footwear and leather
                industry with premium imported materials, technical support,
                and dependable business partnerships across India.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex lg:justify-end">

              <button className="primary-gradient text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover-transition">

                Explore Our Products
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}