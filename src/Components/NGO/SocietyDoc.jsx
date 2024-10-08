import { motion } from "framer-motion";
import { FiFileText, FiUsers, FiHome, FiClipboard } from "react-icons/fi"; // Importing icons

const SocietyDoc = () => {
  const documents = [
    {
      title: "Memorandum of Association (MOA) and Rules & Regulations",
      description:
        "The MOA outlines the objectives of the society and the rules governing its operations.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Covering Letter for Registration",
      description:
        "A letter signed by all founding members requesting the registration of the society.",
      icon: <FiUsers className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "List of All Members of the Governing Body",
      description:
        "A complete list of members in the governing body, including their roles and responsibilities.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Address Proof of the Registered Office",
      description:
        "Document verifying the address of the registered office, such as a utility bill or lease agreement.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Affidavit Declaring Correctness of Society's Name and Objectives",
      description:
        "An affidavit stating that the name and objectives of the society are accurate and compliant.",
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
          Society Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Society Registration in India
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

export default SocietyDoc;
