import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiClipboard, FiFileText } from "react-icons/fi"; // Import icons for better visual representation

const SPdocument = () => {
  const documents = [
    {
      title: "Identity Proof",
      description:
        "Identity proof such as Aadhaar card, passport, etc. is essential for verification.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address Proof",
      description:
        "Documents like utility bill, rental agreement, etc., confirming your address.",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN Card",
      description:
        "Permanent Account Number (PAN) card is necessary for tax purposes.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business Registration (if applicable)",
      description:
        "Proof of business registration if applicable, to establish legitimacy.",
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
          Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Service Provider (SP) Registration in India
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

export default SPdocument;
