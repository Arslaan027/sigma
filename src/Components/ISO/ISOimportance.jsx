import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  FaUsers,
  FaCogs,
  FaGlobe,
  FaTrophy,
  FaRegClipboard,
} from "react-icons/fa"; // Import different icons

const ISOimportance = () => {
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
          Importance of ISO Certification
        </motion.h2>

        {/* Importance Section */}
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-green-100 dark:bg-neutral-900 rounded-lg shadow-md"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-neutral-400 mt-2 space-y-4">
              <li className="flex items-start">
                <FaUsers className="text-green-500 mr-3 text-2xl" />
                <div>
                  <b>Enhances Customer Trust:</b> Demonstrating adherence to
                  international standards increases customer confidence and
                  satisfaction.
                </div>
              </li>
              <li className="flex items-start">
                <FaCogs className="text-blue-500 mr-3 text-2xl" />
                <div>
                  <b>Improves Operational Efficiency:</b> Streamlining processes
                  can lead to cost reduction and increased productivity.
                </div>
              </li>
              <li className="flex items-start">
                <FaGlobe className="text-orange-500 mr-3 text-2xl" />
                <div>
                  <b>Facilitates Market Entry:</b> ISO certification opens doors
                  to new markets, particularly on a global scale.
                </div>
              </li>
              <li className="flex items-start">
                <FaTrophy className="text-purple-500 mr-3 text-2xl" />
                <div>
                  <b>Provides Competitive Advantage:</b> Certification can give
                  your business an edge in tenders and contracts.
                </div>
              </li>
              <li className="flex items-start">
                <FaRegClipboard className="text-red-500 mr-3 text-2xl" />
                <div>
                  <b>Ensures Compliance:</b> Meeting legal and regulatory
                  requirements helps in avoiding potential issues.
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
            Sigma Solutions assists businesses in achieving these benefits by
            guiding them through the ISO certification process.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ISOimportance;
