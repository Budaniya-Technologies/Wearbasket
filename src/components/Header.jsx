"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const userRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close dropdown on outside click
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <Link href="/" className="text-2xl font-extrabold text-green-500">
          Wearbasket
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-green-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-600">

          <FiSearch size={20} className="cursor-pointer hover:text-green-600" />
          <FiHeart size={20} className="cursor-pointer hover:text-green-600" />
          <FiShoppingCart size={20} className="cursor-pointer hover:text-green-600" />

          {/* USER DROPDOWN */}
          <div className="relative" ref={userRef}>
            <FiUser
              size={22}
              onClick={() => setUserOpen(!userOpen)}
              className="cursor-pointer hover:text-green-600"
            />

            {userOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg border rounded-lg py-2 z-50">
                <Link
                  href="/loginPage"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setUserOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/signupPage"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setUserOpen(false)}
                >
                  Sign Up
                </Link>

                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setUserOpen(false)}
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t py-4 shadow-md">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-green-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Icons */}
            <div className="flex space-x-4 mt-4">
              <FiSearch size={20} />
              <FiHeart size={20} />
              <FiShoppingCart size={20} />

              {/* SIMPLE user icon for mobile (dropdown optional) */}
              <Link href="/loginPage">
                <FiUser size={20} />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
