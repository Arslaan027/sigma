import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import UDR from "../../assets/Image/UDRneed.jpg";

const UDRneedswho = () => {
  const entities = [
    "Proprietorships",
    "Partnership firms",
    "Limited Liability Partnerships (LLP)",
    "Private Limited Companies",
    "Co-operative Societies",
    "Hindu Undivided Families (HUF)",
    "Trusts and other business entities",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 flex flex-col lg:flex-row">
      {/* List of Business Entities */}
      <div className="flex-1 mb-8 lg:mr-8 text-center">
        {/* Heading */}
        <div className="mb-2 text-center lg:text-center">
          <motion.h3
            className="text-3xl font-bold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Who Needs{" "}
            <span className="text-green-500">Udyam Registration?</span>
          </motion.h3>
          <motion.h1
            className="text-lg text-gray-600 mb-6 dark:text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Types of Business Entities Eligible for Udyam Registration
          </motion.h1>
        </div>
        <div className="flex">
          {/* List of Business Entities */}
          <ul className="list-disc pl-8 mb-12 items-center flex-1">
            {entities.map((entity, index) => (
              <li
                key={index}
                className="text-gray-600 dark:text-gray-200 mb-4 flex items-center"
              >
                <FiCheckCircle className="text-green-500 mr-2" />
                {entity}
              </li>
            ))}
          </ul>
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-start">
            <motion.img
              src={UDR}
              alt="Udyam Registration"
              className="w-96 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-4">
          <p className="text-gray-600 dark:text-gray-200">
            Any business entity falling under the MSME category, including the
            above, can apply for Udyam Registration to enjoy numerous benefits
            like subsidies, market protection, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UDRneedswho;
