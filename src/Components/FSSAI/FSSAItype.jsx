import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiUsers } from "react-icons/fi";

const FSSAItype = () => {
  const licenseTypes = [
    {
      title: "FSSAI Basic Registration",
      description:
        "For small food businesses with an annual turnover of up to ₹12 lakhs. Suitable for petty food manufacturers, small retailers, and hawkers.",
      icon: <div className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "FSSAI State License",
      description:
        "For medium-sized food businesses with an annual turnover between ₹12 lakhs and ₹20 crores. Applies to mid-sized restaurants, manufacturers, and traders.",
      icon: <FiUsers className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "FSSAI Central License",
      description:
        "For large food businesses with an annual turnover above ₹20 crores, or those involved in food import/export, or operating across multiple states.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Types of <span className="text-green-500">FSSAI Licenses</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Based on Business Size and Turnover
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {licenseTypes.map((license, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {license.icon}
              <h3 className="text-lg font-bold text-green-500">
                {license.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {license.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FSSAItype;
