"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for contacting Bharat Connect! We will get back to you soon."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gray-50 min-h-screen text-gray-800 py-12 px-6 md:px-20 mt-20">
      {/* --- Page Title --- */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-gray-900">
          Wearbasket <span className="text-green-600">Connect</span>
        </h1>
        <p className="text-center text-lg mt-6 font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Have questions or need support? We're here to help! Reach out to us
          through the form below or using our contact details.
        </p>
      </div>

      {/* --- Contact Section --- */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md p-3 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Get In Touch
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We'd love to hear from you! Whether you're experiencing an issue,
            have a business inquiry, or just want to know more about our
            services, our team is ready to assist.
          </p>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Email:</p>
              <p className="text-blue-700 font-medium">
                support@bharatconnect.in
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Phone:</p>
              <p className="text-gray-700">+91 98765 43210</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Office Address:</p>
              <p>1st Floor, 107 & 108 Kothanur Main Road,</p>
              <p>K R Layout, J P Nagar, 6th Phase, Bengaluru - 560078</p>
              <p>Karnataka, India</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Working Hours:</p>
              <p className="text-gray-700">
                Monday - Saturday, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center mt-12">
        © {new Date().getFullYear()} Bharat Connect. All rights reserved.
      </p>
    </section>
  );
}
