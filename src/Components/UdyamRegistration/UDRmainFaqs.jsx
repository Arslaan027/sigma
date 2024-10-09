import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const UDRmainFaqs = () => {
  const faqs = [
    {
      question: "Can Udyam Registration Be Used for Government Tenders?",
      answer:
        "Yes, Udyam-registered MSMEs receive various benefits in government tenders, including exemptions from Earnest Money Deposit (EMD) and access to tender preferences, which give them an advantage over larger companies in certain procurements.",
    },
    {
      question: "Is Udyam Registration Free of Cost?",
      answer:
        "Yes, Udyam Registration is entirely free of cost on the official government portal. Sigma Solutions offers guidance and assistance with the process to ensure businesses complete their registration without errors.",
    },
    {
      question: "What Happens If My Business Exceeds the MSME Thresholds?",
      answer:
        "If your business exceeds the investment or turnover limits for MSME classification, you need to update your status on the Udyam portal. Sigma Solutions helps you track and update your registration, ensuring compliance with MSME guidelines.",
    },
    {
      question: "Can I Edit My Udyam Registration Details After Submission?",
      answer:
        "Yes, businesses can update their details on the Udyam Registration portal, such as changes in business address, turnover, investment, or ownership structure. Sigma Solutions assists in making these modifications to keep your registration current.",
    },
    {
      question:
        "What is the Difference Between Udyam Registration and Udyog Aadhaar?",
      answer:
        "Udyam Registration is the updated version of the previous Udyog Aadhaar system, with enhanced features and simplified processes. Udyam Registration is more reliable, integrated with government databases like PAN and GST, and ensures greater accuracy and ease of doing business.",
    },
    {
      question:
        "What Are the Penalties for False Information in Udyam Registration?",
      answer:
        "Providing false information during Udyam Registration can lead to penalties under the MSME Act, including fines and potential disqualification from MSME benefits. Sigma Solutions ensures that businesses provide accurate and verified information, avoiding any compliance issues.",
    },
    {
      question: "Can I Register Multiple Businesses Under Udyam?",
      answer:
        "Each business entity requires a separate Udyam Registration. If you operate multiple businesses, you need to register each one individually. Sigma Solutions provides a smooth registration process for all your business ventures.",
    },
    {
      question: "Can Foreign Companies or NRIs Apply for Udyam Registration?",
      answer:
        "Only businesses with an Indian owner, director, or partner holding an Aadhaar number can register for Udyam. Foreign companies or NRIs can establish a business in India and apply for Udyam if they meet the eligibility criteria. Sigma Solutions helps businesses with the formalities involved in this process.",
    },
    {
      question: "What Is the Role of Udyam Registration in Business Loans?",
      answer:
        "With Udyam Registration, MSMEs can access collateral-free loans and priority sector lending from banks and financial institutions. Sigma Solutions helps MSMEs leverage their Udyam registration to secure loans and funding under various government schemes.",
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
        Common Doubt about{" "}
        <span className="text-green-500">Udyam Registration</span>
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

export default UDRmainFaqs;
