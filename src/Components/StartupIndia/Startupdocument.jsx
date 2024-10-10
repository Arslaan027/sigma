import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiBriefcase,
  FiGlobe,
  FiTool,
  FiAward,
} from "react-icons/fi";

const Startupdocument = () => {
  const documents = [
    {
      title: "Incorporation/Registration Certificate",
      description:
        "Certificate of incorporation or registration of the business (Private Limited Company, LLP, or Partnership Firm).",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business Entity Details",
      description:
        "Include PAN, business address, and contact information of the entity.",
      icon: <FiBriefcase className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Concept",
      description:
        "Provide a pitch deck, website link, or product description showcasing the innovative aspect of the startup.",
      icon: <FiGlobe className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN Card",
      description: "PAN card of the business and its directors/partners.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Intellectual Property Rights (IPR)",
      description:
        "Details of IPR, if applicable, such as patents or trademarks.",
      icon: <FiTool className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Letter of Recommendation or Funding Support",
      description:
        "Not mandatory but can be provided if applicable for your startup.",
      icon: <FiAward className="text-green-500 text-2xl mr-3" />,
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
          Documents <span className="text-green-500">Required</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          For Startup India Registration
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

export default Startupdocument;
