import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUserCheck,
  FiHome,
  FiPaperclip,
  FiMapPin,
  FiClipboard,
} from "react-icons/fi";

const PLCDocuments = () => {
  const documents = [
    {
      title: "Identity Proof",
      description:
        "Identity proof of all the Directors & Shareholders of the Company.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address Proof",
      description:
        "Address proof of all the Directors & Shareholders of the Company.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "AOA & MOA",
      description:
        "Articles of Association (AOA) and Memorandum of Association (MOA) of the Company.",
      icon: <FiPaperclip className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "DIN & DSC",
      description:
        "Director Identification Number (DIN) and Digital Signature Certificate (DSC) of all the Directors.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "NOC",
      description:
        "NOC or No Objection Certificate from the landlord where the office will be located.",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Utility Bills",
      description:
        "Latest utility bills (not more than 2 months older) of the proposed registered office of the Company.",
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
          Documents Required for Public Limited Company Registration in India
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

export default PLCDocuments;
