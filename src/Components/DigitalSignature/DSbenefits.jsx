import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const DSbenefits = () => {
  const benefits = [
    "Enhanced Security: DSC ensures that your documents are signed securely, reducing the risk of document tampering or forgery.",
    "Legally Binding: A DSC is legally recognized under the Indian IT Act and can be used to authenticate documents.",
    "Convenience: It allows businesses to file documents, participate in tenders, and sign contracts online without physical presence.",
    "Time-Saving: Electronic submissions and signatures eliminate the need for physical paperwork, saving time in processing.",
    "Cost-Effective: Reduces the need for printing and postage, resulting in cost savings.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Benefits Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benefits of a{" "}
          <span className="text-green-500">Digital Signature Certificate</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how a DSC can enhance your business operations.
        </motion.h1>
      </div>

      {/* Benefits List */}
      <ul className="list-disc pl-8 mb-12">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Sigma Solutions is dedicated to helping you leverage the benefits of a
          Digital Signature Certificate for your business success.
        </p>
      </div>
    </div>
  );
};

export default DSbenefits;
