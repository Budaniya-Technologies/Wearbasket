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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnefzwyIG9as74Ps9tq-whXgsEhRirAWEDKQ&s",
    },
    {
      id: 2,
      name: "Women's Summer Dress",
      price: 42.5,
      tag: "Women",
      img: "https://m.media-amazon.com/images/I/81yzyJMIf9L._AC_UY1100_.jpg",
    },
    {
      id: 3,
      name: "Men's Denim Jacket",
      price: 59.0,
      tag: "Men",
      img: "https://cdn.shopify.com/s/files/1/0686/0433/0261/files/blue_denim-_t_shirt_480x480.jpg?v=1729578244",
    },
    {
      id: 4,
      name: "Women's Stylish Handbag",
      price: 34.9,
      tag: "Women",
      img: "https://img.tatacliq.com/images/i26//437Wx649H/MP000000027858648_437Wx649H_202508211147301.jpeg",
    },
    {
      id: 5,
      name: "Leather Wallet",
      price: 19.5,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5m1SrrKN3Jy1KjvsCrGs8_XRFe1EFeH3dA&s",
    },
    {
      id: 6,
      name: "Men's Sneakers",
      price: 49.9,
      tag: "Men",
      img: "https://redtape.com/cdn/shop/files/RSL1228_1..jpg?v=1756808012",
    },
    {
      id: 7,
      name: "Women's Sandals",
      price: 27.9,
      tag: "Women",
      img: "https://images-static.nykaa.com/media/catalog/product/1/e/1e45fcaDoctor1185White_1.jpg?tr=w-500",
    },
    {
      id: 8,
      name: "Sunglasses",
      price: 15.0,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5mqCq2hSUzzK1JpUdqMOpsPgmg-MNI4nzg&s",
    },
    {
      id: 9,
      name: "Women's Hoodie",
      price: 38.5,
      tag: "Women",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sbumUM-f5gGRrU2kxwuvK-akpRsfiU5K5A&s",
    },
    {
      id: 10,
      name: "Men's Formal Pants",
      price: 44.0,
      tag: "Men",
      img: "https://imagescdn.louisphilippe.com/img/app/product/3/39620883-12693050.jpg?auto=format&w=390",
    },
    {
      id: 11,
      name: "Classic Watch",
      price: 65.5,
      tag: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2uv1iNr3ijvT-QgH-PtRn3vHbhrOHfVgPQ&s",
    },
    {
      id: 12,
      name: "Women’s Leather Jacket",
      price: 79.0,
      tag: "Women",
      img: "https://www.iconicindia.com/cdn/shop/files/8907361570369_6.jpg?v=1757094213",
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
