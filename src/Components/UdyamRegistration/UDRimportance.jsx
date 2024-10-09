import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const UDRimportance = () => {
  const importancePoints = [
    "Access to government schemes: Subsidies, financial assistance, and incentives.",
    "Collateral-free loans: Priority sector lending from banks without collateral.",
    "Subsidies and exemptions: From various taxes and government procurement.",
    "Market protection: Especially from delayed payments from buyers.",
    "International trade exposure: Benefits from export subsidies and participation in international fairs.",
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
          Importance of{" "}
          <span className="text-green-500">Udyam Registration</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Why Udyam Registration is Crucial for MSMEs
        </motion.h1>
      </div>

      {/* List of Importance Points */}
      <ul className="list-disc pl-8 mb-12">
        {importancePoints.map((point, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {point}
          </li>
        ))}
      </ul>

      {/* Conclusion */}
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Udyam Registration offers MSMEs numerous benefits, making it an
          essential step for businesses to gain government support and
          protection in today's competitive market.
        </p>
      </div>
    </div>
  );
};

export default UDRimportance;
