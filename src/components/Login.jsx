"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const envEmail = process.env.NEXT_PUBLIC_USER_EMAIL;
    // const envPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    if (form.email === envEmail && form.password === envPassword) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-gray-900">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please log in to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-black">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Register Link */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-700 transition mt-4"
          >
            Login
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
        )}

        {/* Terms and Privacy (optional) */}
        {/* <p className="text-center mt-6 text-gray-600 text-sm">
          By logging in, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>
          .
        </p> */}
      </div>
    </section>
  );
}
