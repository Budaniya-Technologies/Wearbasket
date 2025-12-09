"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Environment variables from .env.local
    const envName = process.env.NEXT_PUBLIC_USER_NAME;
    const envEmail = process.env.NEXT_PUBLIC_USER_EMAIL;
    const envPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    // Simulated registration validation
    if (formData.email === envEmail) {
      setMessage("⚠️ User already exists!");
    } else if (
      formData.name === envName &&
      formData.email !== envEmail &&
      formData.password === envPassword
    ) {
      setMessage("✅ Registered successfully!");
    } else {
      setMessage("✅ Registration simulated successfully!");
    }

    // Reset form
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Create Your Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-black">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="/loginPage" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md p-3 transition mt-4"
          >
            Register
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              message.includes("✅") ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
