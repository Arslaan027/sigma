import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiHome,
  FiUser,
  FiBriefcase,
  FiPenTool,
  FiList,
} from "react-icons/fi";

const TCdocument = () => {
  const documents = [
    {
      title: "Proof of Identity",
      description:
        "Aadhaar card, PAN card, or any government-issued ID to verify the identity of the applicant.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Business Ownership",
      description:
        "Rent agreement or property papers demonstrating ownership of the business premises.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "NOC from Fire Department",
      description:
        "No Objection Certificate from the fire department, if required for your business type.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Establishment",
      description:
        "Documents such as registration of the firm or incorporation certificate.",
      icon: <FiBriefcase className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address Proof",
      description:
        "Official document confirming the address of the business premises.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "PAN Card and GST Registration",
      description:
        "Required if applicable for tax identification and compliance.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Layout Plan of Premises",
      description:
        "Detailed layout plan of the business premises, outlining space usage.",
      icon: <FiList className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Lease Agreement or Ownership Document",
      description:
        "Lease agreement or ownership document confirming the business location.",
      icon: <FiPenTool className="text-green-500 text-2xl mr-3" />,
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
          For Trading License in Arunachal Pradesh
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default TCdocument;
