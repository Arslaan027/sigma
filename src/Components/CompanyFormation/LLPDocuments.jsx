import React from "react";
import { motion } from "framer-motion";
import { FiUserCheck, FiHome, FiFileText, FiImage } from "react-icons/fi";

const LLPDocuments = () => {
  const documents = [
    {
      title: "PAN or Identity Proof",
      description: "PAN or other identity proof of all partners.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address Proof",
      description: "Address proof of all partners.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Partners' IDs",
      description: "Valid identification documents of each partner.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Passport",
      description: "Passport of all partners for identification.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Passport Size Photo",
      description: "Recent passport-sized photographs of all partners.",
      icon: <FiImage className="text-green-500 text-2xl mr-3" />,
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
          Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Limited Liability Partnership Registration
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

export default LLPDocuments;
