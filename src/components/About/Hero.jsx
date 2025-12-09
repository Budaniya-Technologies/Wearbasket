"use client";

import { FaCreditCard, FaHeadset, FaTruck } from "react-icons/fa";
import TopSellerProducts from "./TopSellerProducts";

export default function Hero() {
  return (
   <>
    <section
      className="relative h-[120vh] w-full flex items-center justify-center bg-center bg-cover pt-20"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/two-hugging-woman-with-paper-bags_23-2147688807.jpg?semt=ais_hybrid&w=740&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
          About <span className="text-green-400">Wearbasket Services</span>
        </h1>

        <p className="text-lg mt-4 text-gray-200 drop-shadow">
          Discover seamless and fast services crafted for your comfort and
          convenience.
        </p>
      </div>
    </section>
   <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6">

    {/* Free Shipping */}
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <FaTruck className="text-green-600 text-3xl" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Free Shipping</h2>
        <p className="text-gray-600 text-sm mt-3">Fast & safe delivery on all orders</p>
      </div>
    </div>

    {/* Flexible Payment */}
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <FaCreditCard className="text-green-600 text-3xl" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Flexible Payment</h2>
        <p className="text-gray-600 text-sm mt-3">Secure payment methods</p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <FaHeadset className="text-green-600 text-3xl" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">24X7 Support</h2>
        <p className="text-gray-600 text-sm mt-3">Dedicated help anytime</p>
      </div>
    </div>

  </div>
</section>

<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* LEFT LARGE IMAGE */}
    <div>
      <img
        src="https://img.freepik.com/free-vector/flat-design-newsletter-template_23-2150743489.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Large Image"
        className="w-full h-[85vh] object-cover"
      />
    </div>

    {/* RIGHT TWO STACKED IMAGES */}
    <div className="grid grid-rows-2 gap-6">
      <img
        src="https://img.freepik.com/free-psd/hand-drawn-fashion-collection-facebook-cover_23-2150319191.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Top Image"
        className="w-full h-[40vh] object-cover"
      />

      <img
        src="https://img.freepik.com/free-psd/gradient-business-design-template_23-2149699741.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Bottom Image"
        className="w-full h-[40vh] object-cover"
      />
    </div>

  </div>
</section>

<TopSellerProducts/>






   </>
  );
}
