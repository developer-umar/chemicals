"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* TOP CTA SECTION */}
      <div className="container-width relative z-10 pt-28">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[50px]
            border
            border-white/10
            bg-white/10
            backdrop-blur-2xl
            p-10
            md:p-16
            lg:p-20
            shadow-2xl
          "
        >

          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-200 px-5 py-3 rounded-full text-sm font-semibold mb-8">

                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>

                FH Chemicals
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight">

                Let’s Build Strong
                Industrial Partnerships
              </h2>

              <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">

                Premium leather chemicals, PU systems,
                footwear raw materials, and global sourcing
                solutions tailored for modern industrial businesses.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex lg:justify-end">

              <button className="primary-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:scale-105 hover-transition">

                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container-width relative z-10 py-24">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* COLUMN 1 */}
          <div>

            <h3 className="text-3xl font-black">

              FH Chemicals
            </h3>

            <p className="mt-6 text-slate-400 leading-relaxed">

              Trusted importers and traders of premium
              industrial materials, leather chemicals,
              PU systems, footwear raw materials,
              and global sourcing solutions.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover-transition cursor-pointer">

                🌍
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover-transition cursor-pointer">

                📧
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover-transition cursor-pointer">

                📱
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>

            <h4 className="text-2xl font-bold mb-8">

              Quick Links
            </h4>

            <div className="space-y-5 text-slate-400">

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                Home
              </p>

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                About Us
              </p>

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                Products
              </p>

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                Services
              </p>

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                Global Network
              </p>

              <p className="hover:text-cyan-300 hover-transition cursor-pointer">
                Contact
              </p>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>

            <h4 className="text-2xl font-bold mb-8">

              Core Products
            </h4>

            <div className="space-y-5 text-slate-400">

              <p>
                PU Systems
              </p>

              <p>
                Leather Chemicals
              </p>

              <p>
                Shoe Components
              </p>

              <p>
                Finished Leather
              </p>

              <p>
                Leather Goods
              </p>

              <p>
                Hairon Carpets
              </p>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>

            <h4 className="text-2xl font-bold mb-8">

              Contact Info
            </h4>

            <div className="space-y-8">

              {/* PHONE */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Phone
                  </p>

                  <h5 className="font-semibold mt-1">
                    +91-9839336620
                  </h5>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <h5 className="font-semibold mt-1">
                    info@fhchemicals.com
                  </h5>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    Address
                  </p>

                  <h5 className="font-semibold mt-1 leading-relaxed">
                    Plot No. 25, Lari Compound,
                    Gajjupurwa, Jajmau,
                    Kanpur Nagar, Uttar Pradesh
                  </h5>
                </div>
              </div>

              {/* GST */}
              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">

                  <Globe size={22} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">
                    GST Number
                  </p>

                  <h5 className="font-semibold mt-1">
                    09BEJPA6911E1ZR
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col lg:flex-row gap-6 items-center justify-between">

          <p className="text-slate-400 text-center lg:text-left">

            © 2026 FH Chemicals. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-center lg:text-right">

            Premium Industrial & Global Trading Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}