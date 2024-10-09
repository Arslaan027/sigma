import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiHome, FiUser, FiBook } from "react-icons/fi";

const DLdocument = () => {
  const documents = [
    {
      title: "Constitution Documents",
      description: "Partnership Deed, Memorandum of Association, etc.",
      icon: <FiBook className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Site Plan and Layout",
      description: "Site plan and layout of the premises.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Identity and Address Proof",
      description:
        "Identity proof and address proof of the proprietor/partners/directors.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Premises Ownership",
      description: "Proof of premises ownership or rent agreement.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Qualification Certificates",
      description:
        "Qualification certificates of the technical staff (pharmacist or chemist).",
      icon: <FiBook className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Affidavit of Non-Conviction",
      description: "Affidavit of non-conviction.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Manufacturing Process Details",
      description:
        "Details of the manufacturing process (for manufacturing licenses).",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Drug Sale Records",
      description:
        "Drug sale records and storage facilities (for wholesale and retail licenses).",
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
          Required <span className="text-green-500">Documents</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Drug License Registration in India
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

export default DLdocument;
