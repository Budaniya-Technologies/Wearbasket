"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setMenuOpen(false);
    window.location.href = "/loginPage";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Product", href: "/product" },
    { name: "Pages", href: "/pages" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
            Wearbasket
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-green-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons & Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Action Icons */}
          <div className="flex items-center space-x-4 text-gray-600">
            <FiSearch size={20} className="cursor-pointer hover:text-green-600" />
            <FiHeart size={20} className="cursor-pointer hover:text-green-600" />
            <FiShoppingCart size={20} className="cursor-pointer hover:text-green-600" />
            <FiUser size={20} className="cursor-pointer hover:text-green-600" />
          </div>

          {/* {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/loginPage"
                className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
              >
                Register
              </Link>
            </>
          )} */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Action Icons in Mobile */}
            <div className="flex space-x-4">
              <FiSearch size={20} className="cursor-pointer hover:text-green-600" />
              <FiHeart size={20} className="cursor-pointer hover:text-green-600" />
              <FiShoppingCart size={20} className="cursor-pointer hover:text-green-600" />
              <FiUser size={20} className="cursor-pointer hover:text-green-600" />
            </div>
            {/* <div className="flex space-x-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/loginPage"
                    onClick={() => setMenuOpen(false)}
                    className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div> */}
          </ul>
        </div>
      )}
    </header>
  );
}
