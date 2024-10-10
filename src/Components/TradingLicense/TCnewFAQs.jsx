import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const TCnewFAQs = () => {
  const validityAndRenewal = [
    "A trading license is valid for one year and must be renewed annually.",
    "The renewal process mirrors the original application process.",
    "It's crucial to apply for renewal before the license expires to avoid penalties.",
  ];

  const penaltiesForNonCompliance = [
    "Fines or penalties from the local authority.",
    "Legal action against the business owner.",
    "Temporary or permanent closure of the business.",
  ];

  const keyPoints = [
    "A trading license is mandatory for all commercial operations.",
    "Ensure that the business premises meet health and safety standards.",
    "Licenses must be renewed annually.",
    "Non-compliance can lead to severe penalties.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Validity and Renewal Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Validity and Renewal of Trading License
        </motion.h3>
      </div>

      {/* Validity and Renewal List */}
      <ul className="list-disc pl-8 mb-12">
        {validityAndRenewal.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {item}
          </li>
        ))}
      </ul>

      {/* Penalties for Non-Compliance Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Penalties for Non-Compliance
        </motion.h3>
      </div>

      {/* Penalties List */}
      <ul className="list-disc pl-8 mb-12">
        {penaltiesForNonCompliance.map((penalty, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {penalty}
          </li>
        ))}
      </ul>

      {/* Key Points Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key Points to Remember
        </motion.h3>
      </div>

      {/* Key Points List */}
      <ul className="list-disc pl-8 mb-12">
        {keyPoints.map((point, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          For further assistance or to streamline your trading license process
          in Arunachal Pradesh, Sigma Solutions is here to help!
        </p>
      </div>
    </div>
  );
};

export default TCnewFAQs;
