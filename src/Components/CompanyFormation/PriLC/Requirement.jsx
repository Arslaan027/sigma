import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUserCheck,
  FiHome,
  FiImage,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

const Requirement = () => {
  const requirements = [
    {
      title: "PAN and Aadhaar Card",
      description:
        "Both PAN and Aadhaar Card of all Indian Shareholders and Directors",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity Proof",
      description:
        "Either Voter ID, Passport, or Driving License of the Shareholders and Directors.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Address",
      description:
        "Copy of the latest Telephone Bill, Electricity Bill, or Bank Account Statement of the Shareholders and Directors.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Photographs",
      description:
        "Latest passport size photographs of all the Shareholders and Directors",
      icon: <FiImage className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Business Address Proof",
      description:
        "Either of the latest Utility Bill (Electricity, Telephone, Gas, Water) or Property Tax Bill of the registered office address.",
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Incorporation Certificate",
      description:
        "Certificate issued by the Ministry of Corporate Affairs post successful company registration.",
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
          Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Private Limited Company Registration Online
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requirements.map((requirement, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {requirement.icon}
              <h3 className="text-lg font-bold text-green-500">
                {requirement.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {requirement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Requirement;
