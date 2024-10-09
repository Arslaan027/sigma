import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const FSSAIkey = () => {
  const keyResponsibilities = [
    "Maintain a clean and hygienic environment at the premises.",
    "Ensure that food products are free from contamination and meet safety standards.",
    "Follow the guidelines and regulations set by FSSAI regarding food packaging, labeling, and processing.",
    "Submit regular returns and maintain documentation for audits and inspections.",
    "Display the FSSAI license at your business premises.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Heading */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key <span className="text-green-500">Responsibilities</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Responsibilities of FSSAI License Holders
        </motion.h1>
      </div>

      {/* List of Key Responsibilities */}
      <ul className="list-disc pl-8 mb-12">
        {keyResponsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {responsibility}
          </li>
        ))}
      </ul>

      {/* Conclusion */}
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          FSSAI license holders must ensure compliance with food safety
          regulations to maintain consumer trust and avoid legal complications.
        </p>
      </div>
    </div>
  );
};

export default FSSAIkey;
