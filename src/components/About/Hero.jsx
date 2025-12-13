"use client";

import { FaCreditCard, FaHeadset, FaTruck } from "react-icons/fa";
import TopSellerProducts from "./TopSellerProducts";
import banner from "../../../public/Banner.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section
        className="relative min-h-[70vh] md:min-h-[90vh] w-full flex items-center justify-center bg-center bg-cover pt-20"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="text-center text-[#2a2a2a] px-6 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-serif tracking-[0.25em]">
            ABOUT US
          </h1>

          <div className="w-32 h-px bg-[#b8b1a8] mx-auto mt-6"></div>

          <p className="text-[11px] md:text-sm mt-6 tracking-[0.35em] text-[#6a6a6a] font-serif">
            TODAY ONLY
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mt-4 leading-tight text-[#1f1f1f]">
            25% OFF <br /> EVERYTHING
          </h2>

          <button
            className="mt-10 px-10 py-3 border border-[#2a2a2a] text-[#2a2a2a] tracking-[0.3em] text-sm font-serif bg-transparent hover:bg-[#e6ded5] transition-all duration-300"
          >
            SHOP NOW
          </button>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">
          {/* Free Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaTruck className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Free Shipping
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Fast & safe delivery on all orders
              </p>
            </div>
          </motion.div>

          {/* Flexible Payment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaCreditCard className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Flexible Payment
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Secure payment methods
              </p>
            </div>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaHeadset className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                24X7 Support
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Dedicated help anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= IMAGES GRID ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Image */}
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://img.freepik.com/free-vector/flat-design-newsletter-template_23-2150743489.jpg?semt=ais_hybrid&w=740&q=80"
            className="w-full h-[50vh] md:h-[85vh] object-cover rounded-xl"
          />

          {/* Small Images */}
          <div className="grid grid-rows-2 gap-6">
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/free-psd/hand-drawn-fashion-collection-facebook-cover_23-2150319191.jpg?semt=ais_hybrid&w=740&q=80"
              className="w-full h-[25vh] md:h-[40vh] object-cover rounded-xl"
            />

            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/free-psd/gradient-business-design-template_23-2149699741.jpg?semt=ais_hybrid&w=740&q=80"
              className="w-full h-[25vh] md:h-[40vh] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= TOP SELLER ================= */}
      <TopSellerProducts />
    </>
  );
}
