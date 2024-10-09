import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ISOmainFAQs = () => {
  const faqs = [
    {
      question: "Do I Need to Renew My ISO Certification?",
      answer:
        "Yes, ISO certifications are valid for three years. During this period, your business must undergo surveillance audits to ensure continued compliance. Sigma Solutions provides ongoing support for these audits and helps businesses maintain their ISO certification through periodic reviews and updates.",
    },
    {
      question: "What Happens If My Business Fails the ISO Audit?",
      answer:
        "If your business does not meet the required ISO standards during the certification audit, the auditor will issue a non-conformance report. Sigma Solutions helps you address these non-conformities by developing corrective action plans, and we guide you through the re-audit process to ensure successful certification.",
    },
    {
      question: "Is ISO Certification the Same for All Industries?",
      answer:
        "No, while the core principles of ISO standards remain the same, the application of these standards varies by industry. Sigma Solutions provides industry-specific expertise, ensuring that the certification process is aligned with your business's unique requirements and regulatory environment.",
    },
    {
      question: "How Do I Choose the Right Certification Body?",
      answer:
        "The certification body is a third-party entity responsible for auditing your business and issuing the ISO certificate. Sigma Solutions helps you choose a recognized, accredited certification body to ensure that your ISO certification is credible and accepted globally.",
    },
    {
      question: "Can Small Businesses Apply for ISO Certification?",
      answer:
        "Yes, small businesses can apply for ISO certification, and the process can be scaled according to the size of the organization. Sigma Solutions works with small and medium enterprises (SMEs) to streamline the certification process and ensure that the costs and procedures are manageable.",
    },
    {
      question: "Surveillance Audit in ISO Certification",
      answer:
        "Surveillance audits are periodic reviews conducted by the certification body to ensure that your business remains compliant with ISO standards. These audits are usually conducted annually. Sigma Solutions helps prepare for these audits by maintaining proper documentation and implementing corrective actions if necessary.",
    },
    {
      question: "Is Employee Training Required for ISO Certification?",
      answer:
        "Yes, employee training is crucial for the successful implementation of ISO standards. Sigma Solutions provides tailored training sessions to ensure that your staff understands their roles in maintaining compliance and improving processes according to ISO requirements.",
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
        Common Doughts about{" "}
        <span className="text-green-500">ISO Certification</span>
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

export default ISOmainFAQs;
