"use client";

import { useState } from "react";
import { FaHeart, FaStar, FaSync } from "react-icons/fa";

export default function TopSellerProducts() {
  const filters = ["All", "Women", "Men", "Accessories"];

  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    // ------------------ WOMEN (CLOTHING ONLY) ------------------
    {
      id: 1,
      category: "Coats",
      name: "Trendy Brown Coat",
      price: 75.0,
      oldPrice: 150.0,
      discount: "50% off",
      rating: 4.8,
      tag: "Women",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-F3rTPcYJnrBIHPSPUf4JeUKHvfzQ_EK36Ef-4qvfRD8jHN28JjWhUQqKCClMRkcdMUhf4sjZbJsRDKaQ9h3FqHMuDWHfYUxmJfjQvxA",
    },
    {
      id: 2,
      category: "Dresses",
      name: "Modern Red Dress",
      price: 85.0,
      oldPrice: 110.0,
      discount: "20% off",
      rating: 4.7,
      tag: "Women",
      img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/31939704/2024/12/12/68699ecc-0e67-4fa0-b5b7-f283a39787341733977399281FIORRAWomenFloralEmbroideredRegularThreadWorkKurtiwithPalazz1.jpg",
    },
    {
      id: 3,
      category: "Tops",
      name: "White Cotton Top",
      price: 45.0,
      oldPrice: 70.0,
      discount: "15% off",
      rating: 4.6,
      tag: "Women",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-F3rTPcYJnrBIHPSPUf4JeUKHvfzQ_EK36Ef-4qvfRD8jHN28JjWhUQqKCClMRkcdMUhf4sjZbJsRDKaQ9h3FqHMuDWHfYUxmJfjQvxA",
    },
    {
      id: 4,
      category: "Jackets",
      name: "Soft Winter Jacket",
      price: 90.0,
      oldPrice: 140.0,
      discount: "30% off",
      rating: 4.8,
      tag: "Women",
      img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/31939704/2024/12/12/68699ecc-0e67-4fa0-b5b7-f283a39787341733977399281FIORRAWomenFloralEmbroideredRegularThreadWorkKurtiwithPalazz1.jpg",
    },
    {
      id: 5,
      category: "Sweaters",
      name: "Woolen Beige Sweater",
      price: 60.0,
      oldPrice: 80.0,
      discount: "10% off",
      rating: 4.5,
      tag: "Women",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-F3rTPcYJnrBIHPSPUf4JeUKHvfzQ_EK36Ef-4qvfRD8jHN28JjWhUQqKCClMRkcdMUhf4sjZbJsRDKaQ9h3FqHMuDWHfYUxmJfjQvxA",
    },

    // ------------------ MEN (CLOTHING ONLY) ------------------
    {
      id: 6,
      category: "Shirts",
      name: "Formal Blue Shirt",
      price: 40.0,
      oldPrice: 60.0,
      discount: "20% off",
      rating: 4.7,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B64XbVyBrrzOwQbJ6bX602-BAlHAr-VnGg&s",
    },
    {
      id: 7,
      category: "Hoodies",
      name: "Black Winter Hoodie",
      price: 55.0,
      oldPrice: 75.0,
      discount: "15% off",
      rating: 4.6,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_B64XbVyBrrzOwQbJ6bX602-BAlHAr-VnGg&s",
    },
    {
      id: 8,
      category: "Jackets",
      name: "Denim Blue Jacket",
      price: 110.0,
      oldPrice: 150.0,
      discount: "25% off",
      rating: 4.8,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUJs59G4O1o9y7eDcAOvwYQQz2Kmk4sBgwQ&s",
    },
    {
      id: 9,
      category: "T-Shirts",
      name: "Classic White T-Shirt",
      price: 25.0,
      oldPrice: 40.0,
      discount: "10% off",
      rating: 4.4,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4wUBO1copSNErWO6gClxSXCY-dUv6mEwgw&s",
    },
    {
      id: 10,
      category: "Sweaters",
      name: "Knitted Winter Sweater",
      price: 70.0,
      oldPrice: 100.0,
      discount: "30% off",
      rating: 4.9,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUJs59G4O1o9y7eDcAOvwYQQz2Kmk4sBgwQ&s",
    },

    // ------------------ ACCESSORIES (CLOTHING-STYLE ONLY) ------------------
    {
      id: 11,
      category: "Scarves",
      name: "Soft Woolen Scarf",
      price: 30.0,
      oldPrice: 50.0,
      discount: "25% off",
      rating: 4.6,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEbjxzjSkivChndk4wUdUMS7QMIxanZGxJQ&s",
    },
    {
      id: 12,
      category: "Shawls",
      name: "Printed Winter Shawl",
      price: 45.0,
      oldPrice: 70.0,
      discount: "30% off",
      rating: 4.8,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEbjxzjSkivChndk4wUdUMS7QMIxanZGxJQ&s",
    },
    {
      id: 13,
      category: "Cardigans",
      name: "Long Knit Cardigan",
      price: 55.0,
      oldPrice: 90.0,
      discount: "35% off",
      rating: 4.9,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd33m6vNJrIKt29TIHWpRhlfjsuO3rISRjKA&s",
    },
    {
      id: 14,
      category: "Sweatshirts",
      name: "Soft Cotton Sweatshirt",
      price: 35.0,
      oldPrice: 55.0,
      discount: "15% off",
      rating: 4.4,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUeaUs8PtzVNWQO92IJ9k86lOIIVnwkVhAig&s",
    },
    {
      id: 15,
      category: "Pullovers",
      name: "Winter Warm Pullover",
      price: 60.0,
      oldPrice: 85.0,
      discount: "20% off",
      rating: 4.7,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd33m6vNJrIKt29TIHWpRhlfjsuO3rISRjKA&s",
    },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.tag === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium tracking-wide">
            Our Products
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-1">
            Top Seller Collections
          </h1>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all duration-300 shadow-sm
                    ${activeFilter === f
                    ? "bg-black text-white border-black scale-105"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT CARDS */}
        {/* Changed grid-cols for mobile to 2, and adjusted gap to 3 for mobile / 8 for desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative">
                {/* Adjusted Height: h-40 for mobile, h-64 for desktop */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 md:h-64 object-cover rounded-t-2xl"
                />

                {/* Discount Tag: slightly smaller font/padding on mobile */}
                <span className="absolute top-3 left-3 bg-black text-white text-xs md:text-sm px-2 py-1 md:px-3 rounded-full shadow-md">
                  {product.discount}
                </span>

                {/* Action Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button className="p-1.5 md:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
                    <FaHeart className="text-gray-700 text-sm md:text-lg hover:text-red-500 transition" />
                  </button>

                  <button className="p-1.5 md:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition">
                    <FaSync className="text-gray-700 text-sm md:text-lg hover:text-blue-500 transition" />
                  </button>
                </div>
              </div>

              {/* PRODUCT INFO - Adjusted Padding for Mobile */}
              <div className="p-3 md:p-5">
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">
                  {product.category}
                </p>

                {/* Title Sizing */}
                <h3 className="text-sm md:text-lg font-bold text-gray-800 mt-1 leading-tight truncate">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                  <FaStar className="text-xs md:text-sm" />
                  <span className="text-xs md:text-sm font-medium">
                    {product.rating}
                  </span>
                </div>

                {/* Price Section */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2 md:mt-4">
                  <span className="text-lg md:text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="line-through text-xs md:text-base text-gray-500">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-3 md:mt-5 py-2 md:py-3 bg-gray-900 text-white rounded-xl text-xs md:text-base font-medium tracking-wide hover:bg-gray-800 transition">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}