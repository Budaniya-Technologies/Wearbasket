"use client";

import { FaCreditCard, FaHeadset, FaTruck } from "react-icons/fa";
import TopSellerProducts from "./TopSellerProducts";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* HERO BANNER */}
      <section
        className="relative h-[90vh] md:h-[120vh] w-full flex items-center justify-center bg-center bg-cover pt-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/two-hugging-woman-with-paper-bags_23-2147688807.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            About{" "}
            <span className="text-green-400">Wearbasket Services</span>
          </h1>

          <p className="text-md md:text-lg mt-4 text-gray-200 drop-shadow">
            Discover seamless and fast services crafted for your comfort and convenience.
          </p>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">

          {/* Free Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center md:items-start gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaTruck className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
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
            className="flex items-center md:items-start gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaCreditCard className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
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
            className="flex items-center md:items-start gap-4 justify-center md:justify-start"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaHeadset className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                24X7 Support
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Dedicated help anytime
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* IMAGES GRID SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT LARGE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.freepik.com/free-vector/flat-design-newsletter-template_23-2150743489.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Large Image"
              className="w-full h-[50vh] md:h-[85vh] object-cover rounded-xl"
            />
          </motion.div>

          {/* RIGHT TWO SMALL IMAGES */}
          <div className="grid grid-rows-2 gap-6">
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/free-psd/hand-drawn-fashion-collection-facebook-cover_23-2150319191.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Top Image"
              className="w-full h-[25vh] md:h-[40vh] object-cover rounded-xl"
            />

            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/free-psd/gradient-business-design-template_23-2149699741.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Bottom Image"
              className="w-full h-[25vh] md:h-[40vh] object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* PRODUCT SECTION */}
      <TopSellerProducts />
    </>
  );
}
