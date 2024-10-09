import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa"; // Import different icons

const FSSAIadvantage = () => {
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
          Advantages of <span className="text-green-500">FSSAI License</span>
        </motion.h2>

        {/* Advantages Section */}
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-green-100 dark:bg-neutral-900 rounded-lg shadow-md"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-neutral-400 mt-2 space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-3 text-2xl" />
                <div>
                  <b>Consumer Trust:</b> An FSSAI license ensures consumers that
                  the food you provide meets safety and hygiene standards.
                </div>
              </li>
              <li className="flex items-start">
                <FaShieldAlt className="text-blue-500 mr-3 text-2xl" />
                <div>
                  <b>Legal Compliance:</b> It provides legal protection and
                  ensures you comply with food safety laws, avoiding fines and
                  legal issues.
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkedAlt className="text-orange-500 mr-3 text-2xl" />
                <div>
                  <b>Business Expansion:</b> With an FSSAI license, your
                  business can expand into other regions, as it proves to
                  national standards.
                </div>
              </li>
              <li className="flex items-start">
                <FaStar className="text-purple-500 mr-3 text-2xl" />
                <div>
                  <b>Quality Assurance:</b> The license acts as a marker of
                  quality, as your food products are consistently monitored for
                  safety.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Conclusion Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a delay
        >
          <p>
            Achieving an FSSAI license not only enhances your business's
            credibility but also assures customers of the quality and safety of
            your food products.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FSSAIadvantage;
