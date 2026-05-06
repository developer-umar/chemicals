"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductCategories() {
  const categories = [
    {
      title: "Raw Hide Chemicals",
      description:
        "Chemicals used for cleaning, swelling, and hair removal during raw leather processing.",

      products:
        "GS Powder, Lime, Caustic Soda, Salt, Wetting Agents",

      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Acid Chemicals",
      description:
        "Industrial acids used for pickling, tanning preparation, and pH control.",

      products:
        "Formic Acid, Sulphuric Acid, Acetic Acid, Lactic Acid",

      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Tanning Chemicals",
      description:
        "Essential tanning materials that convert raw hide into durable leather.",

      products:
        "Chrome Powder, Katch, Vegetable Tan, Resin Tan, Syntan",

      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Dye & Pigment Chemicals",
      description:
        "Premium leather dyes and pigments for rich finishing and coloring applications.",

      products:
        "Nigrosine, Black Dye, Brown Dye, Leather Pigments",

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Oil & Fatliquor Chemicals",
      description:
        "Softening oils and fatliquors that improve leather flexibility and smoothness.",

      products:
        "Synthetic Oil, Silicone Oil, Sulphated Oil, Fatliquor",

      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop",
    },

    {
      title: "Finishing Chemicals",
      description:
        "Final-stage finishing materials for gloss, waterproofing, and premium leather appearance.",

      products:
        "PU Finish, Wax, Acrylic Finish, Top Coat, Lacquer",

      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-spacing bg-white overflow-hidden">

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

            Leather Chemical Categories
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">

            Specialized Industrial
            Chemical

            <span className="gradient-text">
              {" "}Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            We provide premium-grade leather processing chemicals,
            industrial auxiliaries, tanning agents, finishing materials,
            and footwear raw materials sourced from reliable global suppliers.
          </p>
        </motion.div>

        {/* CATEGORY GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-slate-50 rounded-[35px] overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 hover-transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                {/* Replace later with your product/category image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={500}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                {/* CATEGORY BADGE */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-md">

                  FH Chemicals
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5">
                  {item.description}
                </p>

                {/* PRODUCTS */}
                <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-5">

                  <h4 className="font-bold text-slate-900 mb-3">
                    Common Products
                  </h4>

                  <p className="text-slate-500 leading-relaxed">
                    {item.products}
                  </p>
                </div>

                {/* BUTTON */}
                <button className="mt-8 flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-4 hover-transition">

                  Explore Category

                  <span>
                    →
                  </span>
                </button>
              </div>

              {/* BACKGROUND GLOW */}
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 hover-transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}