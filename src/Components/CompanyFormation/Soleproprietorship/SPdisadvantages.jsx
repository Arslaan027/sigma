import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FiFileText, FiHome, FiUser } from "react-icons/fi"; // Import icons for better visual representation

const SPdisadvantages = () => {
  const documents = [
    {
      title: "Identity proof",
      description: "Aadhaar card, passport, etc.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address proof",
      description: "Utility bill, rental agreement, etc.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN card",
      description: "Essential for tax purposes.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business registration (if applicable)",
      description:
        "Required for compliance if operating as a registered business.",
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
          Documents Required for{" "}
          <span className="text-green-500">
            Establishing a Service Provider in India
          </span>
        </motion.h3>
      </div>
      <ul className="list-disc list-inside space-y-4">
        {documents.map((document, index) => (
          <motion.li
            key={index}
            className="flex items-start bg-white border rounded-md p-4 shadow-lg dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {document.icon}
            <div className="ml-2">
              <h3 className="text-lg font-bold text-green-500">
                {document.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-100">
                {document.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SPdisadvantages;
