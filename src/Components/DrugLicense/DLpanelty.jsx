import React from "react";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const DLpenalty = () => {
  const penaltyPoints = [
    "Selling drugs without a valid license",
    "Selling expires or counterfeit drugs",
    "Failure to maintain proper records of drug sales",
    "Non-compliance with storage and handling regulations",
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
          Penalties for Non-Compliance with{" "}
          <span className="text-green-500">Drug License Regulations</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Consequences of Ignoring Regulations
        </motion.h1>
      </div>

      {/* List of Penalty Points */}
      <ul className="list-disc pl-8 mb-12">
        {penaltyPoints.map((point, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiAlertCircle className="text-green-500 mr-2" />
            {point}
          </li>
        ))}
      </ul>

      {/* Conclusion */}
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Non-compliance with drug license regulations not only jeopardizes
          public health but also exposes businesses to severe penalties,
          including fines and legal action. It is crucial to adhere to all
          regulations to maintain a valid drug license.
        </p>
      </div>
    </div>
  );
};

export default DLpenalty;
