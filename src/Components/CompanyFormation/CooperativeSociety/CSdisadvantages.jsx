import React from "react";
import { motion } from "framer-motion";
import { FiClipboard, FiUser, FiFileText } from "react-icons/fi"; // Import icons for better visual representation

const CSdisadvantages = () => {
  const documents = [
    {
      title: "Registration Application",
      description: "Completed application form required for registration.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity and Address Proof of Members",
      description: "Proof of identity and address for all members.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Cooperative Society Bylaws",
      description:
        "Document outlining the rules and regulations governing the society.",
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
          Disadvantages of a{" "}
          <span className="text-green-500">Cooperative Society</span>
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

export default CSdisadvantages;
