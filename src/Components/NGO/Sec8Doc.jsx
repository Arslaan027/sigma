import { motion } from "framer-motion";
import { FiFileText, FiKey, FiHome, FiClipboard } from "react-icons/fi"; // Importing icons

const Sec8Doc = () => {
  const documents = [
    {
      title: "Digital Signature Certificate (DSC) of the Directors",
      description:
        "A valid DSC is required for all directors to sign electronic documents and forms.",
      icon: <FiKey className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Director Identification Number (DIN)",
      description:
        "Each director must obtain a DIN, which is a unique identification number.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title:
        "Memorandum of Association (MOA) and Articles of Association (AOA)",
      description:
        "These documents outline the objectives and regulations governing the company.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of the Registered Office",
      description:
        "Document verifying the address of the registered office, such as a utility bill or lease agreement.",
      icon: <FiHome className="text-green-500 text-2xl mr-3" />,
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
          Section 8 Company Documents{" "}
          <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Section 8 Company Registration in India
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

export default Sec8Doc;
