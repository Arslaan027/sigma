import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiUser, FiMapPin, FiDollarSign } from "react-icons/fi"; // Import icons for documents

const IECdocument = () => {
  const documents = [
    {
      title: "PAN Card",
      description: "PAN Card of the business entity or individual.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity Proof",
      description: "Aadhaar Card or passport (for individuals or proprietors).",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business Registration Documents",
      description:
        "Documents like partnership deed or certificate of incorporation.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Bank Account Details",
      description: "Bank account details along with a cancelled cheque.",
      icon: <FiDollarSign className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Address",
      description:
        "Proof of address of the business (rental agreement or electricity bill).",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
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
          Required <span className="text-green-500">Documents</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for IEC Registration in India
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

export default IECdocument;
