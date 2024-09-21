import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiHome, FiClipboard, FiMapPin } from "react-icons/fi";

const OPCdocuments = () => {
  const documents = [
    {
      title: "Bank Statement",
      description:
        "A scanned copy of a current bank statement. Bank statements can be accessed via Internet banking or by visiting a bank branch.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Utility Bills",
      description:
        "A phone bill, an electricity or gas bill, or a mobile bill. These are essential for OPC registration.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Rental Agreement",
      description:
        "A rental agreement in English, digitally transcribed. This must be scanned and submitted for documentation.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "No Objection Certificate",
      description:
        "A digital transcription of a landlord’s no-objection certificate. This is mandatory for OPC registration if the property is rented.",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Property Deed (if owned)",
      description:
        "A scanned copy of the property or sale deeds in English, confirming ownership of the business property.",
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
          Documents Required for One Person Company (OPC) Registration in India
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

export default OPCdocuments;
