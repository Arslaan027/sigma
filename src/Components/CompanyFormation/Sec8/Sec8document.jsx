import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiClipboard, FiUser, FiMapPin } from "react-icons/fi";

const Sec8documents = () => {
  const documents = [
    {
      title: "MoA and AoA",
      description:
        "The Memorandum of Association (MoA) and Articles of Association (AoA) are essential documents that outline the company's structure and rules.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity and Address Proof of Directors",
      description:
        "This includes scanned copies of valid identity and address proof for all directors, which is necessary for company registration.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN Card of the Company",
      description:
        "A scanned copy of the Permanent Account Number (PAN) card is required for tax identification of the company.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Registration Application",
      description:
        "The completed registration application form needs to be submitted along with the necessary fees for company registration.",
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
          Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Registration
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

export default Sec8documents;
