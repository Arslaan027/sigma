import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiBriefcase,
  FiImage,
  FiPenTool,
  FiList,
} from "react-icons/fi";

const TrademarkDocument = () => {
  const documents = [
    {
      title: "Trademark Application Form",
      description:
        "Form TM-A is the required form to apply for trademark registration in India.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Applicant's Identity Proof",
      description:
        "Aadhar Card, PAN Card, or any other government-issued ID to verify the applicant's identity.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Business",
      description:
        "Incorporation Certificate or Partnership Deed if applying on behalf of a business entity.",
      icon: <FiBriefcase className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Trademark Representation",
      description:
        "A clear representation of the logo, word, phrase, or symbol you want to trademark.",
      icon: <FiImage className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Power of Attorney",
      description:
        "Required if the trademark application is filed by an attorney or agent on your behalf.",
      icon: <FiPenTool className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Description of Goods/Services",
      description:
        "A detailed list of goods or services for which the trademark is being applied.",
      icon: <FiList className="text-green-500 text-2xl mr-3" />,
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
          For Trademark Registration in India
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

export default TrademarkDocument;
