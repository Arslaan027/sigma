import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";

const PFchecklist = () => {
  const checklistItems = [
    {
      title: "Application for Registration of Partnership (Form-1)",
      description:
        "Form-1 needs to be filled for the registration of the partnership firm.",
    },
    {
      title: "Certified Original Copy of Partnership Deed",
      description:
        "Submit a certified original copy of the partnership deed for registration.",
    },
    {
      title: "Specimen Affidavit",
      description:
        "An affidavit certifying all the details in the partnership deed and documents are correct.",
    },
    {
      title: "PAN Card & Address Proof of Partners",
      description:
        "Provide PAN card and address proof of all partners involved in the partnership.",
    },
    {
      title: "Proof of Principal Place of Business",
      description:
        "Ownership documents or a rental/lease agreement must be submitted as proof.",
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
          Checklist for Partnership Firm{" "}
          <span className="text-green-500">Registration</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Following are the documents required for Partnership Firm Registration
          in India:
        </motion.h1>
      </div>
      <ul className="space-y-4">
        {checklistItems.map((item, index) => {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <motion.li
              key={index}
              className="flex flex-col bg-white border rounded-md shadow-lg p-4 transition-shadow duration-300 dark:bg-neutral-900 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-500 text-2xl mr-3" />
                  <h3 className="text-lg font-bold text-green-500">
                    {item.title}
                  </h3>
                </div>
                {isOpen ? (
                  <FiChevronUp className="text-green-500" />
                ) : (
                  <FiChevronDown className="text-green-500" />
                )}
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="text-gray-600 dark:text-gray-100 mt-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default PFchecklist;
