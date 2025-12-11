"use client";

import { FiTruck, FiRefreshCw, FiHeadphones, FiShield } from "react-icons/fi";

export default function FeaturesSection() {
  const items = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "On all orders above ₹500",
      icon: <FiTruck className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "100% Money Back",
      subtitle: "30 days refund policy",
      icon: <FiRefreshCw className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Online Support",
      subtitle: "24/7 customer support",
      icon: <FiHeadphones className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Secure Payment",
      subtitle: "Encrypted payments",
      icon: <FiShield className="w-8 h-8" />,
    },
  ];

  return (
    <section className="bg-white border-t border-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Grid System: 1 col very small, 2 col mobile, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-12 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 lg:divide-none">
          
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group pt-8 sm:pt-0"
            >
              {/* Icon Container with subtle animation */}
              <div className="mb-5 p-4 rounded-full bg-gray-50 text-gray-900 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:shadow-lg">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}