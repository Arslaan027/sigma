import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  FaRegMoneyBillAlt,
  FaClipboardCheck,
  FaRegLightbulb,
  FaUsers,
} from "react-icons/fa"; // Import relevant icons

const Startwhy = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-neutral-900 p-8 py-10">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Why You Should Register Under{" "}
          <span className="text-green-500">Startup India</span>
        </motion.h2>

        {/* Benefits of Startup India Registration */}
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-green-100 rounded-lg shadow-md"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-neutral-400 mt-2 space-y-4">
              <li className="flex items-start">
                <FaRegMoneyBillAlt className="text-green-500 mr-3 text-5xl md:text-3xl" />
                <div>
                  <b>Tax Exemptions:</b> Startups are eligible for a 100% tax
                  exemption on profits for the first three years.
                </div>
              </li>
              <li className="flex items-start">
                <FaClipboardCheck className="text-blue-500 mr-3 text-5xl md:text-3xl" />
                <div>
                  <b>Funding Opportunities:</b> Access to government funds and
                  venture capitalists through government schemes like the Fund
                  of Funds.
                </div>
              </li>
              <li className="flex items-start">
                <FaRegLightbulb className="text-orange-500 mr-3 text-5xl md:text-3xl" />
                <div>
                  <b>Easier Compliance:</b> Startups benefit from a simplified
                  regulatory framework with easier compliance and legal support.
                </div>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-purple-500 mr-3 text-5xl md:text-3xl" />
                <div>
                  <b>IPR Support:</b> Faster patent registration and a rebate of
                  up to 80% on patent filing fees.
                </div>
              </li>
              <li className="flex items-start">
                <FaUsers className="text-red-500 mr-3 text-5xl md:text-3xl" />
                <div>
                  <b>Networking:</b> Access to the Startup India Hub, connecting
                  startups with industry experts, investors, and other
                  entrepreneurs.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Startwhy;
