import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiHome,
  FiUser,
  FiList,
  FiLayout,
  FiClipboard,
} from "react-icons/fi";

const FSSAIdocument = () => {
  const documents = [
    {
      title: "Form B",
      description:
        "Completed and signed application form required for FSSAI licensing.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Business Premises",
      description:
        "Rent agreement or property ownership documents to verify the business location.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity Proof",
      description:
        "Identity proof of the proprietor or partners (e.g., Aadhaar, PAN).",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Food Categories List",
      description:
        "A list of food categories the business deals with, detailing products offered.",
      icon: <FiList className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Blueprint/Layout Plan",
      description:
        "Blueprint or layout plan of the processing unit to ensure compliance with safety standards.",
      icon: <FiLayout className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Food Safety Management Plan",
      description:
        "A food safety management plan, if applicable, detailing procedures for ensuring food safety.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
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
          Documents <span className="text-green-500">Required</span> for FSSAI
          License
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          To Obtain an FSSAI License
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((document, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {document.icon}
              <h3 className="text-lg font-bold text-green-500">
                {document.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {document.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FSSAIdocument;
