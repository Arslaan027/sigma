import { motion } from "framer-motion";
import { FiFileText, FiUsers, FiHome, FiClipboard } from "react-icons/fi"; // Importing icons

const TrustDoc = () => {
  const documents = [
    {
      title: "Trust Deed (Primary Document)",
      description:
        "A certified original copy of the trust deed outlining the objectives and operations of the trust.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Passport-sized Photos of the Trustees",
      description:
        "Recent passport-sized photographs of all trustees, typically required for registration.",
      icon: <FiUsers className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Identity and Address of Trustees",
      description:
        "Documents proving the identity and address of each trustee, such as Aadhar card or voter ID.",
      icon: <FiClipboard className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Registered Office Address",
      description:
        "Document validating the registered office address of the trust, such as a utility bill or lease agreement.",
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
          Trust Documents <span className="text-green-500">Checklist</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Documents Required for Trust Registration in India
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

export default TrustDoc;
