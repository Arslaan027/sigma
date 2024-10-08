import { motion } from "framer-motion";
import {
  FiFileText,
  FiUser,
  FiCalendar,
  FiPenTool,
  FiFile,
} from "react-icons/fi";

const CopyrightDocument = () => {
  const documents = [
    {
      title: "Copyright Application Form",
      description:
        "Form IV is required to apply for copyright registration in India.",
      icon: <FiFileText className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Copies of the Work",
      description:
        "Submit a sample or a copy of the original work (e.g., manuscript, audio file).",
      icon: <FiFile className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Applicant’s Identity Proof",
      description:
        "Aadhar Card, Passport, or any government-issued ID to verify the applicant’s identity.",
      icon: <FiUser className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Proof of Creation",
      description:
        "Evidence showing the date of creation of the work (e.g., drafts, manuscripts).",
      icon: <FiCalendar className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "NOC from the Author/Owner",
      description:
        "A No Objection Certificate if the applicant is not the original creator.",
      icon: <FiPenTool className="text-green-500 text-2xl mr-3" />,
    },
    {
      title: "Power of Attorney",
      description:
        "Required if an agent or attorney is filing the application on behalf of the applicant.",
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
          For Copyright Registration in India
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

export default CopyrightDocument;
