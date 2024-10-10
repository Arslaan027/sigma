import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12 bottom-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Start a Business */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Start a Business
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Private Limited Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Limited Liability Partnership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  One Person Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Section 8 Company Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Nidhi Company Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Government Registration */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Taxation</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  FSSAI Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  TDS filing Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Income Tax Return Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Leagal Services
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Tax */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Compliance & Tax
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Compliance Pvt Ltd
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Compliance LLP
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  GST Registration
                </a>
              </li>
            </ul>
          </div>

          {/* BIS & CDSCO */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              BIS & CDSCO
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  BIS Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  BIS FMCS Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  BIS CRS Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  ISI Mark Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  CDSCO Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="relative">
              <input
                type="email"
                className="w-full p-10 pr-16 pl-4 py-2 rounded-full bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
                placeholder="Your email address"
              />
              <button className="absolute right-0 top-0 h-full px-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-600 mt-10" />

        {/* Social Media Links */}
        <div className="flex justify-between space-x-6 mt-2 mb-2">
          <div className="flex gap-3">
            <FaFacebookF className="text-gray-400 hover:text-green-500 md:text-xl text-sm cursor-pointer" />
            <FaInstagram className="text-gray-400 hover:text-green-500 md:text-xl text-sm cursor-pointer" />
            <FaTwitter className="text-gray-400 hover:text-green-500 md:text-xl text-sm cursor-pointer" />
            <FaLinkedinIn className="text-gray-400 hover:text-green-500 md:text-xl text-sm cursor-pointer" />
            <FaYoutube className="text-gray-400 hover:text-green-500 md:text-xl text-sm cursor-pointer" />
          </div>
          <div className="flex gap-3 text-gray-400 text-xs">
            <Link>Blog</Link> <Link>About Us</Link> <Link>Career</Link>{" "}
            <Link>Refund Policy</Link> <Link>About Us</Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-600 mb-5" />

        {/* Disclaimer and Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            By continuing this page, you agree to our{" "}
            <Link
              to="/Terms-Conditions"
              className="text-gray-500 hover:underline cursor-pointer "
            >
              Terms & Conditions
            </Link>
            ,{" "}
            <Link
              to="/Privacy-Policy"
              className="text-gray-500 hover:underline cursor-pointer"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              to="/Refund-Policy"
              className="text-gray-500 hover:underline cursor-pointer"
            >
              Refund Policy
            </Link>
            .
          </p>
          <p className="mt-2">
            © 2024 - SigmaSolution Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
