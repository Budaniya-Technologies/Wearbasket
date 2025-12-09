"use client";
import React, { useState } from "react";

function ProductDetails() {
  const categories = [
    "For Home",
    "For Music",
    "For Office",
    "For Storage",
    "New Arrival",
    "Best Seller",
    "Discount",
  ];

  const products = [
    {
      id: 1,
      name: "Phone Holder Saki",
      price: 29.9,
      tag: "For Home",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YFAJcq07KHT8l__P2biCpGywyFLCpQHeTA&s",
    },
    {
      id: 2,
      name: "Headsound",
      price: 12.0,
      tag: "For Music",
      img: "https://m.media-amazon.com/images/I/71pioS1MvbL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Adudu Cleaner",
      price: 29.3,
      tag: "For Office",
      img: "https://5.imimg.com/data5/MW/RN/GLADMIN-1242750/modicare-duz-all-advanced-concentrated-multipurpose-cleaner-250-ml.jpg",
    },
    {
      id: 4,
      name: "Smart Storage Box",
      price: 19.5,
      tag: "For Storage",
      img: "https://www.rasoishop.com/cdn/shop/products/8906076987337_1.jpg?v=1685273678&width=533",
    },
    {
      id: 5,
      name: "New Trend Speaker",
      price: 49.3,
      tag: "New Arrival",
      img: "https://image.made-in-china.com/202f0j00tMVkCEuraWqB/New-Trend-Surround-3-1-Home-Theatre-System-Speaker-Music-for-Home-Theatre-Speaker-Black-Color.webp",
    },
    {
      id: 6,
      name: "Premium Headphone",
      price: 35.6,
      tag: "Best Seller",
      img: "https://www.ooberpad.com/cdn/shop/products/Px8McLarenEdition.jpg?v=1670575933",
    },
    {
      id: 7,
      name: "Ultra Desk Lamp",
      price: 15.2,
      tag: "For Home",
      img: "https://m.media-amazon.com/images/I/71PxeATGTuL.jpg",
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      price: 39.9,
      tag: "For Music",
      img: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669",
    },
    {
      id: 9,
      name: "Office Chair",
      price: 89.5,
      tag: "For Office",
      img: "https://www.ikea.com/in/en/images/products/smoerkull-office-chair-with-armrests-graesnaes-dark-grey__1187096_pe899031_s5.jpg",
    },
    {
      id: 10,
      name: "Storage Basket",
      price: 22.1,
      tag: "For Storage",
      img: "https://m.media-amazon.com/images/I/81d7R2wg+uL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 11,
      name: "New Pro Speaker",
      price: 59.0,
      tag: "New Arrival",
      img: "https://www.portronics.com/cdn/shop/files/SoundPot_Pro_Bluetooth_speaker.jpg?v=1736941604",
    },
    {
      id: 12,
      name: "Top Headphone",
      price: 42.0,
      tag: "Best Seller",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhwAgoPrMLS0_FOp8esbuxj7dyI8Y0EUBMg&s",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9; // ⬅ SHOW 9 CARDS PER PAGE

  const toggleCategory = (category) => {
    if (category === "All") {
      setSelectedCategories([]);
      return;
    }
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.tag));

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen py-16 font-sans mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">
        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white shadow rounded-xl p-6 h-max sticky top-24">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Category</h2>

          <ul className="space-y-3">
            <li
              onClick={() => toggleCategory("All")}
              className="font-semibold text-gray-700 flex items-center gap-2 cursor-pointer"
            >
              <input
                checked={selectedCategories.length === 0}
                readOnly
                type="checkbox"
                className="w-4 h-4"
              />{" "}
              All Products
            </li>

            {categories.map((cat, i) => (
              <li
                key={i}
                onClick={() => toggleCategory(cat)}
                className="text-gray-600 flex items-center gap-2 hover:text-black cursor-pointer"
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={selectedCategories.includes(cat)}
                  className="w-4 h-4"
                />{" "}
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* PRODUCT GRID */}
        <div className="col-span-12 md:col-span-9">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            Product <span className="text-green-600">Details</span>
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {product.tag}
                </span>

                <img
                  src={product.img}
                  className="w-full h-40 mt-3 object-contain"
                  alt={product.name}
                />

                <h3 className="text-lg font-bold text-gray-800 mt-4">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-yellow-500 text-sm">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-500">(40)</span>
                  </p>
                  <p className="text-xl font-bold text-black">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="w-1/2 py-2 border text-black border-gray-300 rounded-full font-medium hover:bg-gray-100">
                    Add to Cart
                  </button>

                  <button className="w-1/2 py-2 bg-blue-300 text-white rounded-full hover:bg-gray-900 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 border rounded-md disabled:opacity-40"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1 ? "bg-black text-white" : "border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 border rounded-md disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
