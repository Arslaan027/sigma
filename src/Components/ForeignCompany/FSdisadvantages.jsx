import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { FiAlertTriangle, FiUser, FiClipboard } from "react-icons/fi"; // Import icons for better visual representation

const FSdisadvantages = () => {
  const disadvantages = [
    {
      title: "Compliance with Indian laws and regulations",
      description: "Ensuring adherence to various laws can be complex.",
      icon: <FiAlertTriangle className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Challenges in understanding the local market",
      description: "Familiarity with the Indian market can be a barrier.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Cultural and operational differences",
      description:
        "Navigating cultural nuances can impact business operations.",
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
          Disadvantages of{" "}
          <span className="text-green-500">
            Establishing a Foreign Company in India
          </span>
        </motion.h3>
      </div>
      <ul className="list-disc list-inside space-y-4">
        {disadvantages.map((disadvantage, index) => (
          <motion.li
            key={index}
            className="flex items-start bg-white border rounded-md p-4 shadow-lg dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {disadvantage.icon}
            <div className="ml-2">
              <h3 className="text-lg font-bold text-green-500">
                {disadvantage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-100">
                {disadvantage.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FSdisadvantages;
