import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiClipboard,
  FiCalendar,
  FiFileMinus,
} from "react-icons/fi"; // Adjust icons as needed

const GSTASmendatorycomp = () => {
  const mandatoryReturns = [
    {
      title: "GSTR-1",
      description:
        "Filed monthly or quarterly (based on turnover), this return reports the details of outward supplies.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "GSTR-3B",
      description:
        "A summary return that needs to be filed monthly, which includes details of outward and inward supplies along with the tax payable.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "GSTR-9",
      description: "The annual return, covering the entire financial year.",
      icon: <FiCalendar className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "GSTR-4",
      description: "For taxpayers registered under the Composition Scheme.",
      icon: <FiFileMinus className="text-green-500 text-2xl mr-3" />,
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
          GST Return Filing <span className="text-green-500">Requirements</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mandatory Returns for Registered Taxpayers
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mandatoryReturns.map((returnItem, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {returnItem.icon}
              <h3 className="text-lg font-bold text-green-500">
                {returnItem.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {returnItem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GSTASmendatorycomp;
