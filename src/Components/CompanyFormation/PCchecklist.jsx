import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiFileText, FiUserCheck, FiHome } from "react-icons/fi";

const PCchecklist = () => {
  const checklistItems = [
    {
      title: "Minimum Directors",
      description: "A minimum of 2 Directors are required for registration.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Minimum Capital",
      description: "A minimum capital of Rs. 5 lakhs is required.",
      icon: <FiCheckCircle className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Director Requirements",
      description: "Out of 10 members, at least 5 Directors are required.",
      icon: <FiCheckCircle className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Institutional Establishment",
      description:
        "This Company can be established by the joining of at least 2 Institutions.",
      icon: <FiCheckCircle className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Conversion Restrictions",
      description:
        "Producer Company cannot be converted into a Public Limited Company.",
      icon: <FiCheckCircle className="text-green-500 text-2xl mr-3" />,
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
          Checklist for <span className="text-green-500">Producer Company</span>{" "}
          Registration
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Important Requirements for Registration in India
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

export default PCchecklist;
