"use client";
import React, { useState } from "react";

function ProductDetails() {
  const categories = ["Men", "Women", "Accessories"];

  const products = [
    {
      id: 1,
      name: "Men's Casual Shirt",
      price: 29.9,
      tag: "Men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1L3rrf_r6W8U5Yh3sGzpnQFJ_E0pswmQOlw&s",
    },
    {
      id: 2,
      name: "Women's Summer Dress",
      price: 42.5,
      tag: "Women",
      img: "https://assets.ajio.com/medias/sys_master/root/20230623/NKMQ/6494b8e1eebac147fc718b87/-473Wx593H-465865446-multi-MODEL.jpg",
    },
    {
      id: 3,
      name: "Men's Denim Jacket",
      price: 59.0,
      tag: "Men",
      img: "https://m.media-amazon.com/images/I/71ceP8un9-L._AC_UY1100_.jpg",
    },
    {
      id: 4,
      name: "Women's Stylish Handbag",
      price: 34.9,
      tag: "Women",
      img: "https://m.media-amazon.com/images/I/71g0gfQAXoL._AC_SY200_.jpg",
    },
    {
      id: 5,
      name: "Leather Wallet",
      price: 19.5,
      tag: "Accessories",
      img: "https://m.media-amazon.com/images/I/71lS-B5T-pL._AC_UY1100_.jpg",
    },
    {
      id: 6,
      name: "Men's Sneakers",
      price: 49.9,
      tag: "Men",
      img: "https://m.media-amazon.com/images/I/71c1lrLsx-L._AC_UL480_QL65_.jpg",
    },
    {
      id: 7,
      name: "Women's Sandals",
      price: 27.9,
      tag: "Women",
      img: "https://m.media-amazon.com/images/I/61rVvPPr8LL._AC_UL480_QL65_.jpg",
    },
    {
      id: 8,
      name: "Sunglasses",
      price: 15.0,
      tag: "Accessories",
      img: "https://m.media-amazon.com/images/I/51MW7YBqXvL._AC_UL480_QL65_.jpg",
    },
    {
      id: 9,
      name: "Women's Hoodie",
      price: 38.5,
      tag: "Women",
      img: "https://m.media-amazon.com/images/I/61RSa+U4QFL._AC_UL480_QL65_.jpg",
    },
    {
      id: 10,
      name: "Men's Formal Pants",
      price: 44.0,
      tag: "Men",
      img: "https://m.media-amazon.com/images/I/61j8rkG99lL._AC_UL480_QL65_.jpg",
    },
    {
      id: 11,
      name: "Classic Watch",
      price: 65.5,
      tag: "Accessories",
      img: "https://m.media-amazon.com/images/I/61eypCPWlTL._AC_UL480_QL65_.jpg",
    },
    {
      id: 12,
      name: "Women’s Leather Jacket",
      price: 79.0,
      tag: "Women",
      img: "https://m.media-amazon.com/images/I/71lCjIKAJAL._AC_UL480_QL65_.jpg",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

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
    <section className="bg-[#f7f4ef] min-h-screen py-16 font-serif mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-8">

        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white shadow rounded-xl p-6 h-max sticky top-24 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
            Category
          </h2>

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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Fashion <span className="text-black opacity-70">Collection</span>
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                  {product.tag}
                </span>

                <img
                  src={product.img}
                  className="w-full h-48 mt-3 object-cover rounded-md"
                  alt={product.name}
                />

                <h3 className="text-lg font-bold text-gray-800 mt-4">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-500 text-sm">★★★★★</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="w-1/2 py-2 border text-black border-gray-300 rounded-full font-medium hover:bg-gray-200">
                    Add to Cart
                  </button>

                  <button className="w-1/2 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
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
