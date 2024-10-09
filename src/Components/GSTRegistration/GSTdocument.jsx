import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiHome, FiClipboard, FiMapPin } from "react-icons/fi"; // Adjust icons as needed

const GSTdocument = () => {
  const documents = [
    {
      title: "PAN Card of the Business",
      description:
        "A valid PAN card of the business entity is required for GST registration.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business Registration Proof",
      description:
        "Certificate of Incorporation, Partnership Deed, or any other relevant business registration document.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Business Address",
      description:
        "Documents like rent agreement or utility bills to verify the business address.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Bank Account Details",
      description:
        "Details of the business bank account, including a copy of the account statement.",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Photographs of Proprietor/Partners/Directors",
      description:
        "Recent passport-sized photographs of the business owners or directors.",
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
          Documents Required for GST Registration in India
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

export default GSTdocument;
