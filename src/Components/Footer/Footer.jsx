import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Start a Business */}
          <div>
            <h3 className="text-green-500 text-lg font-bold mb-4">
              START A BUSINESS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Private Limited Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Limited Liability Partnership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  One Person Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Section 8 Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Nidhi Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Producer Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  MSME Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Government Registration */}
          <div>
            <h3 className="text-green-500 text-lg font-bold mb-4">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  FSSAI Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  IEC Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Trademark Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  DSC Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Tax */}
          <div>
            <h3 className="text-green-500 text-lg font-bold mb-4">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Compliance Pvt Ltd
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Compliance LLP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  GST Registration
                </a>
              </li>
            </ul>
          </div>

          {/* BIS & CDSCO */}
          <div>
            <h3 className="text-green-500 text-lg font-bold mb-4">
              BIS & CDSCO
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  BIS Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  BIS FMCS Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  BIS CRS Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  ISI Mark Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  CDSCO Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-gray-600 dark:text-gray-200"
                >
                  Medical Device Registration
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="text-center my-8">
          <button className="bg-transparent border border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-gray-900 transition duration-300">
            See all the services
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <FaFacebookF className="text-green-500 cursor-pointer hover:text-green-600" />
          <FaInstagram className="text-green-500 cursor-pointer hover:text-green-600" />
          <FaTwitter className="text-green-500 cursor-pointer hover:text-green-600" />
          <FaLinkedinIn className="text-green-500 cursor-pointer hover:text-green-600" />
          <FaYoutube className="text-green-500 cursor-pointer hover:text-green-600" />
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-700 my-8" />

        {/* Disclaimer and Copyright */}
        <div className="text-center text-gray-600 text-sm space-y-2">
          <p>
            By continuing this page, you agree to our{" "}
            <span className="text-gray-500 hover:underline cursor-pointer">
              Terms & Conditions
            </span>
            ,{" "}
            <span className="text-blue-200 hover:underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-200 hover:underline cursor-pointer">
              Refund Policy
            </span>
            .
          </p>
          <p>© 2024 - Safe Ledger Private Limited. All rights reserved.</p>
          <p>
            Please note that we are a facilitating platform enabling access to
            reliable professionals. We are not a law firm and do not provide
            legal services ourselves. The information on this website is for the
            purpose of knowledge only and should not be relied upon as legal
            advice or opinion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
