"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-gray-300 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Overlapping CTA Section */}
      <motion.div
        className="relative max-w-4xl mx-auto -mb-16 md:-mb-20 z-10 px-4 pt-24 md:pt-32"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-yellow-100 via-teal-100 to-pink-100 p-8 md:p-12 rounded-3xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Get to know the world-class Brand of Fashion Cloths,
            organization.
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-8 rounded-full transition duration-200 shadow-md">
            Meet our Board
          </button>
        </div>
      </motion.div>

      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Column 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-2 md:col-span-2"
          >
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Sign up for NewsL TR
            </p>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-3 appearance-none"
            />
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-full py-2 px-4 text-sm transition duration-200 mb-6">
              Next
            </button>

            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Follow us
            </p>
            <div className="flex space-x-4 social-icon">
              {/* Icons (unchanged) */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
                1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
                1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
                21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 
                5v14c0 2.761 2.239 5 5 5h14c2.762 0 
                5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
                19h-3v-11h3v11zm-1.5-12.268c-.966 
                0-1.75-.79-1.75-1.764s.784-1.764 
                1.75-1.764 1.75.79 1.75 
                1.764-.783 1.764-1.75 
                1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                0v5.604h-3v-11h3v1.765c1.396-2.586 
                7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 
                0 2.784.01 3.808.06 1.064.049 
                1.791.218 2.427.465a4.902 4.902 0 
                011.772 1.153 4.902 4.902 0 
                011.153 1.772c.247.636.416 
                1.363.465 2.427.05 1.024.06 
                1.378.06 3.808s-.01 2.784-.06 
                3.808c-.049 1.064-.218 
                1.791-.465 2.427a4.902 4.902 0 
                01-1.153 1.772 4.902 4.902 0 
                01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.05-1.378.06-3.808.06s-2.784-.01-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 
                01-1.772-1.153 4.902 4.902 0 
                01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.05-1.024-.06-1.378-.06-3.808s.01-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 
                4.902 0 011.153-1.772A4.902 4.902 0 
                015.45 2.525c.636-.247 1.363-.416 
                2.427-.465C8.901 2.01 9.255 2 
                11.685 2h.63zm-1.928 4.612a6.156 
                6.156 0 100 12.312 6.156 6.156 0 
                000-12.312z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
             Company 
            </p>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-white">Home</a>
              <a href="#" className="text-sm hover:text-white">About Us</a>
              <a href="#" className="text-sm hover:text-white">Blogs</a>
              <a href="#" className="text-sm hover:text-white">Fashion Trends</a>
              {/* <a href="#" className="text-sm hover:text-white"></a> */}
            </nav>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Customer Care
            </p>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-white">Size Guide</a>
              <a href="#" className="text-sm hover:text-white">Helps & FAQ's</a>
              <a href="#" className="text-sm hover:text-white">Return My Order</a>
              <a href="#" className="text-sm hover:text-white">Refer My Friend</a>
            </nav>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Terms & Policy 
            </p>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-white">Shipping Info</a>
              <a href="#" className="text-sm hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white">Refund Policy</a>
              <a href="#" className="text-sm hover:text-white">Terms Conditions</a>
            </nav>
          </motion.div>

          {/* Column 5 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Wearbasket
            </p>
            <nav className="flex flex-col space-y-2 mb-6">
              <a href="#" className="text-sm hover:text-white">Mission</a>
              <a href="#" className="text-sm hover:text-white">Blog</a>
            </nav>

            <p className="text-xs uppercase font-semibold text-gray-400 mb-3 tracking-wider">
              Take Action
            </p>
            {/* <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-white">Donate</a>
              <a href="#" className="text-sm hover:text-white">Partner</a>
            </nav> */}
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 mt-8 md:mt-12 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 mb-3 sm:mb-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
            <a href="#" className="hover:text-gray-300">Cookies policy</a>
            <a href="#" className="hover:text-gray-300">Media </a>
            <a href="#" className="hover:text-gray-300">US Financials</a>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span className="font-bold text-sm text-white">WearBasket</span>
            <span> 2025 @ Company . All rights reserved.</span>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}
