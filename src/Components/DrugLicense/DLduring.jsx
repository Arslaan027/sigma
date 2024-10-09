import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const DLduring = () => {
  const inspectionPoints = [
    "The storage conditions (e.g., temperature, humidity)",
    "The records and documentation of drug sales and stock",
    "The qualifications of the technical staff (e.g., pharmacists, chemists)",
    "The cleanliness and hygiene of the premises",
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
          What Happens During a{" "}
          <span className="text-green-500">Drug License Inspection</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ensuring Compliance with Safety Standards
        </motion.h1>
      </div>

      {/* List of Inspection Points */}
      <ul className="list-disc pl-8 mb-12">
        {inspectionPoints.map((point, index) => (
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
          Drug license inspections are crucial for ensuring that businesses
          adhere to the legal and safety standards, promoting the health and
          safety of the public.
        </p>
      </div>
    </div>
  );
};

export default DLduring;
