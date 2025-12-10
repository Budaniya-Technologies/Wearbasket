"use client";

import { FaCreditCard, FaHeadset, FaTruck } from "react-icons/fa";
import TopSellerProducts from "./TopSellerProducts";
import banner from "../../../public/Banner.png";

export default function Hero() {
  return (
    <>
      {/* HERO BANNER */}
      <section
        className="relative min-h-[70vh] md:min-h-[90vh] w-full flex items-center justify-center bg-center bg-cover pt-20"
        style={{
          backgroundImage: `url(${banner.src})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="text-center text-[#2a2a2a] px-6 max-w-xl">

  {/* ABOUT US */}
  <h1 className="text-3xl md:text-5xl font-serif tracking-[0.25em] text-[#2a2a2a]">
    ABOUT US
  </h1>

  {/* THIN LINE */}
  <div className="w-32 h-px bg-[#b8b1a8] mx-auto mt-6"></div>

  {/* TODAY ONLY */}
  <p className="text-[11px] md:text-sm mt-6 tracking-[0.35em] text-[#6a6a6a] font-serif">
    TODAY ONLY
  </p>

  {/* 25% OFF EVERYTHING */}
  <h2 className="text-3xl md:text-5xl font-serif mt-4 leading-tight text-[#1f1f1f]">
    25% OFF<br />EVERYTHING
  </h2>

  {/* BUTTON */}
  <button
    className="
      mt-10 px-10 py-3 
      border border-[#2a2a2a] 
      text-[#2a2a2a] 
      tracking-[0.3em] 
      text-sm 
      font-serif
      bg-transparent 
      hover:bg-[#e6ded5] 
      transition-all duration-300
    "
  >
    SHOP NOW
  </button>
</div>


      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">

          {/* Free Shipping */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaTruck className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Free Shipping</h2>
              <p className="text-gray-600 text-sm mt-2">
                Fast & safe delivery on all orders
              </p>
            </div>
          </div>

          {/* Flexible Payment */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaCreditCard className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Flexible Payment
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Secure payment methods
              </p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FaHeadset className="text-green-600 text-3xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                24X7 Support
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Dedicated help anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GRID SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT LARGE IMAGE */}
          <div>
            <img
              src="https://img.freepik.com/free-vector/flat-design-newsletter-template_23-2150743489.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Large Image"
              className="w-full h-[45vh] md:h-[85vh] rounded-xl object-cover"
            />
          </div>

          {/* RIGHT TWO STACKED IMAGES */}
          <div className="grid grid-rows-2 gap-6">
            <img
              src="https://img.freepik.com/free-psd/hand-drawn-fashion-collection-facebook-cover_23-2150319191.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Top Image"
              className="w-full h-[30vh] md:h-[40vh] rounded-xl object-cover"
            />

            <img
              src="https://img.freepik.com/free-psd/gradient-business-design-template_23-2149699741.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Bottom Image"
              className="w-full h-[30vh] md:h-[40vh] rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <TopSellerProducts />
    </>
  );
}
