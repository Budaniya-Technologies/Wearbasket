"use client";
import { FaBolt, FaGasPump, FaWifi, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen py-16 font-sans mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-green-600">Wearbasket Services</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
