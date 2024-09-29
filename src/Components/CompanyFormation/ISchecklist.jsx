import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUserCheck,
  FiHome,
  FiClipboard,
  //   FiBank,
  FiCheckCircle,
} from "react-icons/fi";

const ISchecklist = () => {
  const checklistItems = [
    {
      title: "Incorporation of Company",
      description:
        "Complete the necessary paperwork for company incorporation.",
      icon: <FiCheckCircle className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Application For DIN",
      description:
        "Apply for the Director Identification Number (DIN) for all directors.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN and TAN Application",
      description:
        "Obtain Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN).",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "EPFO and ESIC Registration",
      description: "Register with EPFO and ESIC.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "GSTIN Application",
      description:
        "Apply for Goods and Services Tax Identification Number (GSTIN).",
      //   icon: <FiBank className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Bank Account Opening",
      description: "Open a business bank account in the company's name.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
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
          Checklist for Company{" "}
          <span className="text-green-500">Incorporation</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Incorporation of a Company in India
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {checklistItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-lg font-bold text-green-500">{item.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ISchecklist;
