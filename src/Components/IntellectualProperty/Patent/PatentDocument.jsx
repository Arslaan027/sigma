import React from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiBriefcase,
  FiImage,
  FiPenTool,
  FiList,
} from "react-icons/fi";

const PatentDocument = () => {
  const documents = [
    {
      title: "Patent Application Form",
      description:
        "Form 1 in India is the required form to apply for a patent.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Patent Specification",
      description:
        "A detailed description of the invention, including claims that define its scope.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Drawings or Diagrams",
      description:
        "If applicable, include drawings that illustrate the invention.",
      icon: <FiImage className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Applicant’s Identity Proof",
      description:
        "Aadhar Card, PAN Card, or any government-issued ID to verify the applicant's identity.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Ownership",
      description:
        "If the applicant is not the inventor, a statement of ownership is required.",
      icon: <FiBriefcase className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Declaration as to Inventorship",
      description:
        "Form 5 in India must be submitted declaring the inventorship.",
      icon: <FiPenTool className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Abstract of the Invention",
      description:
        "A brief summary of the invention, outlining its key features and industrial application.",
      icon: <FiList className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Power of Attorney",
      description:
        "Required if the application is filed through a patent attorney.",
      icon: <FiPenTool className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Provisional or Complete Specification",
      description:
        "File a provisional specification if not ready for complete specification within 12 months.",
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
          Documents <span className="text-green-500">Required</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          For Patent Registration in India
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

export default PatentDocument;
