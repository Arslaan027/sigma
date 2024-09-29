import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUsers,
  FiHome,
  FiClipboard,
  //   FiClipboardCheck,
} from "react-icons/fi";

const Start = () => {
  const documents = [
    {
      title: "MoA & AoA",
      description:
        "Memorandum of Association (MoA) and Articles of Association (AoA) outlining the company's purpose and regulations.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "List of Directors and Partners",
      description:
        "A comprehensive list of all designated Directors and Partners involved in the company.",
      icon: <FiUsers className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Contact Details of Directors",
      description:
        "Contact details including phone numbers and email addresses of all Directors or Partners.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Latest Photos",
      description:
        "Recent passport-sized photographs of all the Directors and Partners.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Investment Details",
      description:
        "Details regarding the amount of investment and information about investors involved.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "IPR Registration Details",
      description:
        "Details regarding any Intellectual Property Rights (IPR) registration relevant to the business.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Website or App Link",
      description:
        "Links to the company’s official website or mobile application, if applicable.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Growth and Business Plan",
      description:
        "A detailed business plan outlining the growth strategies and goals for the company.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },

    {
      title: "Business Innovation Write-up",
      description:
        "A brief write-up on how the business is contributing to innovation in the industry.",
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
          Documents Required for Startup India Company Registration
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

export default Start;
