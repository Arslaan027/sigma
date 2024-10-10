import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiHome,
  FiCamera,
  FiPaperclip,
} from "react-icons/fi";

const DSdocument = () => {
  const documents = [
    {
      title: "Proof of Identity",
      description: "Aadhaar card, PAN card, Passport, etc.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Address",
      description: "Voter ID, utility bill, etc.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Passport-size Photograph",
      description: "Required for individuals applying for DSC.",
      icon: <FiCamera className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Authorization Letter",
      description: "Required for companies to authorize the application.",
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
          Necessary Documents for{" "}
          <span className="text-green-500">Digital Signature Certificate</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Required Documentation
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default DSdocument;
