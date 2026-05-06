"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Mr. Nadeem Ajmal",
      role: "Proprietor & Director",
      description:
        "18+ years of experience in leather chemicals, footwear raw materials, global sourcing, and industrial trading solutions.",

      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Marketing Team",
      role: "Business Development",
      description:
        "Dedicated professionals handling client communication, order management, and long-term customer relationships.",

      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Technical Experts",
      role: "Industrial Support",
      description:
        "Experienced technical team providing product guidance, manufacturing support, and industrial troubleshooting assistance.",

      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section-spacing bg-slate-50 overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

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

            Leadership & Team
          </div>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">

            The Experts Behind
            FH Chemicals

            <span className="gradient-text">
              {" "}Success
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            Our experienced leadership, technical specialists,
            and marketing professionals work together to deliver
            premium industrial solutions, reliable support,
            and long-term business value.
          </p>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[40px] overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-3 hover-transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                {/* Replace later with your actual team image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={700}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>

                {/* ROLE BADGE */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-md">

                  FH Chemicals
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-3xl font-black text-slate-900">
                  {member.name}
                </h3>

                <p className="text-cyan-600 font-semibold mt-3 text-lg">
                  {member.role}
                </p>

                <p className="text-slate-600 leading-relaxed mt-6">
                  {member.description}
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

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-white border border-slate-200 rounded-[40px] shadow-xl p-10 lg:p-14"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <h3 className="text-4xl font-black text-slate-900 leading-tight">

                Professional Guidance &
                Technical Expertise
              </h3>
            </div>

            {/* RIGHT */}
            <div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our combined marketing and technical teams ensure smooth
                customer communication, industrial guidance, product setup,
                and dependable after-sales support for manufacturing units
                and industrial businesses across India.
              </p>

              <button className="mt-8 primary-gradient text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 hover-transition">

                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}