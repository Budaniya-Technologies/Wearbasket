import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Address */}
        <div>
          <p>1st Floor, 107 & 108 Kothanur Main Road,</p>
          <p>K R Layout, J P Nagar, 6th Phase, Bengaluru - 560078</p>
          <p>Karnataka, India</p>
          <p className="mt-2">+91-8310503856</p>
          <p>support@Wearbasket .com</p>

          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Refund Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Office */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Office</h3>
          <p>1st Floor, 107 & 108 Kothanur Main Road,</p>
          <p>K R Layout, J P Nagar, 6th Phase, Bengaluru - 560078</p>
          <p>Karnataka, India</p>
          <p className="mt-2">+91-8310503856</p>
          <p>support@Wearbasket .com</p>
        </div>
      </div>

      <div className="mt-10 border-t pt-4 text-center text-gray-500 text-sm">
        © 2025 Wearbasket  TECHNOLOGY SERVICES PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
}
