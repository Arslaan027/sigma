import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const IECmainFAQs = () => {
  const faqs = [
    {
      question: "How Long Does It Take to Get an IEC?",
      answer:
        "Once the application is complete and all documents are in order, it usually takes 1 to 5 working days to receive the IEC. The process is fast and streamlined, especially when done through the DGFT’s online portal.",
    },
    {
      question: "Do I Need to Renew the IEC?",
      answer:
        "No, the Import Export Code is valid for a lifetime and does not need to be renewed. However, you must update your details with the DGFT if there are any changes in your business information, such as changes in name, address, or ownership.",
    },
    {
      question: "Can I Modify My IEC After Registration?",
      answer:
        "Yes, if there are any changes to your business details (e.g., change of name, address, or bank details), you can modify your IEC through the DGFT portal. It is important to keep your IEC details up to date to avoid compliance issues during international trade.",
    },
    {
      question: "Can an Individual Apply for an IEC?",
      answer:
        "Yes, individuals involved in the import or export of goods and services can apply for an IEC. An individual can register using their PAN card, and the business can operate as a sole proprietorship.",
    },
    {
      question: "What Happens if I Don’t Have an IEC for International Trade?",
      answer:
        "Without an IEC, your business will not be allowed to import or export goods or services legally. Customs authorities will not clear your shipments, and banks will not process international trade transactions without a valid IEC.",
    },
    {
      question: "Is GST Mandatory for IEC Registration?",
      answer:
        "Although the IEC registration process does not mandate GST registration, businesses involved in import and export are generally required to have a GSTIN for tax purposes.",
    },
    {
      question: "Is IEC Required for Importing Goods for Personal Use?",
      answer:
        "No, an IEC is not required for importing goods for personal use, provided the goods are not meant for commercial purposes. If you are importing goods in bulk or for resale, an IEC is mandatory.",
    },
    {
      question: "Can I Surrender My IEC?",
      answer:
        "Yes, if you no longer wish to engage in international trade, you can surrender your IEC by applying through the DGFT portal. Once surrendered, the code will be deactivated, and you will not be able to conduct any import or export activities.",
    },
    {
      question: "Is There Any Penalty for Not Having an IEC?",
      answer:
        "Although there is no direct penalty for not having an IEC, your business cannot legally import or export goods without one. This means your shipments could be detained, and you could lose business opportunities. Sigma Solutions ensures your business is compliant and equipped with the necessary licenses for international trade.",
    },
    {
      question: "Can I Use One IEC for Multiple Business Ventures?",
      answer:
        "No, each business entity requires a separate IEC. If you operate multiple businesses under different names or legal entities, each must obtain its own IEC. Sigma Solutions helps businesses with multiple ventures streamline their IEC applications.",
    },
    {
      question: "How Does Sigma Solutions Help With IEC Registration?",
      answer:
        "Sigma Solutions provides end-to-end assistance with IEC registration, ensuring that the process is smooth, accurate, and hassle-free. Our experts help you gather the necessary documents, fill out the application, and track the registration until you receive your IEC.",
    },
    {
      question: "Do I Need IEC for Exporting Services?",
      answer:
        "Yes, an IEC is required for businesses exporting services as well. This applies to entities engaged in software development, consultancy, design, engineering services, and other professional services provided internationally. Sigma Solutions helps service-based businesses obtain their IEC for global transactions.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <motion.h3
        className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.5 }} // Animation duration
      >
        Common Doubts about <span className="text-green-500">IEC</span>
      </motion.h3>

      <div className="space-y-4">
        {/* FAQs List */}
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-md"
            initial={{ opacity: 0, y: 10 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with delay for each item
          >
            <h4 className="font-bold text-green-500 dark:text-gray-200">
              {faq.question}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IECmainFAQs;
