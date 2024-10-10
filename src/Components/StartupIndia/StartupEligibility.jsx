import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const StartupEligibility = () => {
  const eligibilityCriteria = [
    "Be incorporated as a Private Limited Company, LLP, or Registered Partnership Firm.",
    "Have an annual turnover of less than ₹100 crore in any financial year.",
    "Not be more than 10 years old from the date of incorporation.",
    "Be working towards innovation, development, or improvement of products or services.",
    "Not be formed by splitting up or reconstructing an existing business.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Eligibility Criteria Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Eligibility Criteria for{" "}
          <span className="text-green-500">Startup India Registration</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ensure your business meets these criteria to apply for registration.
        </motion.h1>
      </div>

      {/* Eligibility Criteria List */}
      <ul className="list-disc pl-8 mb-12">
        {eligibilityCriteria.map((criterion, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {criterion}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Sigma Solutions is here to assist you in meeting these eligibility
          criteria and navigating the registration process smoothly.
        </p>
      </div>
    </div>
  );
};

export default StartupEligibility;
