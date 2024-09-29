import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiHome, FiClipboard, FiMapPin } from "react-icons/fi"; // Adjust icons as needed

const GSTdocument = () => {
  const documents = [
    {
      title: "Sole Proprietorship Firm",
      description: (
        <>
          <p>– PAN Card and Address Proof of the proprietor.</p>
          <p>
            – Any other firm registration certificate like MSME Registration,
            etc.
          </p>
        </>
      ),
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Partnership Firm",
      description: (
        <>
          <p>– PAN card of the Partnership Firm with the deed.</p>
          <p>
            – Partnership registration certificate & partners' ID & address
            proof.
          </p>
        </>
      ),
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Private Limited Company / One Person Company",
      description: (
        <>
          <p>
            – PAN Card of the Company, Certificate of Incorporation (COI), MOA &
            AOA of Company.
          </p>
          <p>– Board Resolution with Directors' ID & Address Proof.</p>
        </>
      ),
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Limited Liability Partnership (LLP)",
      description: (
        <>
          <p>– Certificate of Incorporation (COI) & PAN Card of Company.</p>
          <p>– Deed + Partners' ID & Address Proof.</p>
        </>
      ),
      icon: <FiMapPin className="text-green-500 text-2xl mr-3" />,
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
          Documents Required for GST Registration in India
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default GSTdocument;
