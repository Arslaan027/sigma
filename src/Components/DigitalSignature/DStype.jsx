import React from "react";
import { motion } from "framer-motion";
import { FiKey, FiShield, FiUserCheck } from "react-icons/fi"; // Import icons for each type

const DStype = () => {
  const certificates = [
    {
      title: "Class 1 DSC",
      description:
        "Used primarily by individuals. Confirms that the name and email address in the certificate correspond to the information provided by the user. Not suitable for legal business documents.",
      icon: <FiUserCheck className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Class 2 DSC",
      description:
        "Issued to both individuals and businesses. Required for filing tax returns, ROC filings, and other government-related submissions. Validates the identity of the user based on a reliable database.",
      icon: <FiKey className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Class 3 DSC",
      description:
        "The most secure type, used for e-tenders and auctions. Requires in-person verification for issuance. Mandatory for organizations and individuals who participate in online auctions or bidding processes.",
      icon: <FiShield className="text-green-500 text-2xl mr-3" />,
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
          Types of{" "}
          <span className="text-green-500">Digital Signature Certificates</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Understanding Different Classes of DSCs
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {certificate.icon}
              <h3 className="text-lg font-bold text-green-500">
                {certificate.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-100">
              {certificate.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DStype;
