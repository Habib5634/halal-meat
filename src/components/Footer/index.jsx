import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white py-10 px-6 md:px-16"
      style={{
        background: "linear-gradient(90.1deg, #D72638 0.09%, #58080E 99.91%)",
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 border-b border-white/20 pb-8">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-6">
          <h2 className="text-2xl font-bold">Halal Meat</h2>
          <p className="text-sm leading-relaxed">
            Exceptional quality, unmatched selection — your one-of-a-kind halal
            meat destination
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-6">
            <a href="#" className="hover:text-gray-200 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="md:w-1/4">
          <h3 className="font-semibold mb-7.5">Useful Links</h3>
          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:underline">build your box</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="md:w-1/3">
          <h3 className="font-semibold mb-7.5">New Shopping</h3>
          <p className="text-sm mb-5">
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <div className="flex h-[55px] bg-white rounded-full overflow-hidden w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your mail here..."
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none text-sm"
            />
            <button className="bg-[#FF9CA6]  text-black px-4 rounded-full m-1 transition">
              ✓
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-200">
        <p>Copyright © Halal Meat. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
