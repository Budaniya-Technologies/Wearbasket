"use client";
import { useState } from "react";
import { FaHeart, FaStar, FaSync } from "react-icons/fa";

export default function TopSellerProducts() {
  const filters = ["All", "Women", "Men", "Accessories"];

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

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.tag === activeFilter);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <h2 className="text-gray-600 font-medium mb-1 text-sm md:text-base">
          Our Products
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our Top Seller Products
          </h1>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition 
                  ${
                    activeFilter === f
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID – RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 relative"
            >
              {/* DISCOUNT BADGE */}
              <span className="absolute bg-green-600 text-white text-xs sm:text-sm px-3 py-1 rounded-bl-xl rounded-tr-xl">
                {product.discount}
              </span>

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-xl"
                />

                {/* ICONS */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <FaHeart
                    size={28}
                    className="text-gray-700 bg-white p-2 rounded-full shadow cursor-pointer hover:text-red-500"
                  />
                  <FaSync
                    size={28}
                    className="text-gray-700 bg-white p-2 rounded-full shadow cursor-pointer hover:text-blue-500"
                  />
                </div>
              </div>

              {/* PRODUCT INFO */}
              <p className="text-sm text-gray-500 mt-3">{product.category}</p>

              <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
                {product.name}
              </h3>

              {/* RATING */}
              <p className="text-yellow-500 mt-1 flex items-center gap-1 text-sm">
                <FaStar /> {product.rating}
              </p>

              {/* PRICE */}
              <div className="mt-2 flex items-center gap-3">
                <span className="font-bold text-lg text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through text-sm sm:text-base">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
