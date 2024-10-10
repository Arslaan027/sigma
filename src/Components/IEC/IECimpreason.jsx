import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const IECimpreason = () => {
  const reasonsForImportance = [
    "Legally import and export goods and services.",
    "Avail of benefits under various government export promotion schemes.",
    "Access global markets and expand business operations internationally.",
    "Comply with customs regulations and facilitate smooth transactions.",
  ];

  const reasonsForRejection = [
    "Incomplete or inaccurate information in the application form.",
    "Non-submission of required documents.",
    "Mismatch in the name on the PAN card and other supporting documents.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Why IEC is Important */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why <span className="text-green-500">IEC</span> is Important for
          Businesses
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The Import Export Code (IEC) is essential for businesses looking to
          expand into global markets.
        </motion.h1>
      </div>

      {/* Importance Reasons */}
      <ul className="list-disc pl-8 mb-12">
        {reasonsForImportance.map((reason, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {reason}
          </li>
        ))}
      </ul>

      {/* Common Reasons for Rejection */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Common{" "}
          <span className="text-green-500">Reasons for IEC Rejection</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Avoid these common mistakes to prevent IEC application rejection.
        </motion.h1>
      </div>

      {/* Rejection Reasons */}
      <ul className="list-disc pl-8 mb-12">
        {reasonsForRejection.map((reason, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-red-500 mr-2" />
            {reason}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Sigma Solutions ensures that your IEC application is complete and
          accurate, minimizing the chances of rejection.
        </p>
      </div>
    </div>
  );
};

export default IECimpreason;
