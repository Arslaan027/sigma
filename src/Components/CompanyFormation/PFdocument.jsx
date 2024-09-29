import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiUsers, FiHome, FiClipboard } from "react-icons/fi";

const PFdocument = () => {
  const documents = [
    {
      title: "Partnership Agreement",
      description:
        "A certified original copy of the partnership deed, outlining the roles and responsibilities of each partner.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN Card and Address Proof of Partners",
      description:
        "Each partner must provide a copy of their PAN card and valid address proof.",
      icon: <FiUsers className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Principal Place of Business",
      description:
        "Documents proving the ownership or rental/lease agreement of the firm's principal place of business.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Bank Account",
      description:
        "A copy of the firm's PAN card along with the partnership agreement is required to open the bank account.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Affidavit",
      description:
        "An affidavit certifying that the details mentioned in the partnership deed and documents are accurate.",
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
          Documents Required for Partnership Firm Registration in India
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

export default PFdocument;
