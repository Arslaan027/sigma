import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const DLeligibility = () => {
  const eligibilityPoints = [
    "For Manufacturing License: The applicant must have the necessary equipment, and technical staff,  pharmacists and chemists.",
    "For Wholesale License: The applicant must have a minimum of 10 square meters of space for the wholesale drug business.",
    "For Retail License: The applicant must have a minimum of 10 square meters of space and a registered pharmacist on staff.",
    "For Import License: The applicant must have the necessary clearances from CDSCO and other regulatory authorities.",
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
          Eligibility Criteria for{" "}
          <span className="text-green-500">Drug License Registration</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Criteria Based on License Type
        </motion.h1>
      </div>

      {/* List of Eligibility Points */}
      <ul className="list-disc pl-8 mb-12">
        {eligibilityPoints.map((point, index) => (
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
          Understanding the eligibility criteria is essential for a smooth
          application process for drug license registration.
        </p>
      </div>
    </div>
  );
};

export default DLeligibility;
