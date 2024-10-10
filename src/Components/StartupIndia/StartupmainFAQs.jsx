import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const StartupmainFAQs = () => {
  const faqs = [
    {
      question: "How Long Does It Take to Get Startup India Recognition?",
      answer:
        "Once the application is submitted, the Startup India team reviews the details and documents. Typically, the process takes 2 to 3 weeks for approval. Once recognized, you will receive a certificate of recognition.",
    },
    {
      question: "How Does Startup India Help With Funding?",
      answer:
        "The government has launched a Fund of Funds scheme under Startup India, with a corpus of ₹10,000 crores, to support startups. This fund is managed by SIDBI (Small Industries Development Bank of India) and provides venture capital funding to startups through alternative investment funds (AIFs). Additionally, startups also receive easier access to loans through government initiatives and various credit guarantee schemes.",
    },
    {
      question: "Can Foreign-Owned Startups Register Under Startup India?",
      answer:
        "Yes, foreign-owned startups can register under Startup India as long as the business is incorporated in India. The startup must meet the eligibility criteria of being innovative and working towards product or service development.",
    },
    {
      question: "Can a Startup Avail Multiple Government Benefits?",
      answer:
        "Yes, startups can avail multiple government benefits such as tax exemptions, funding, networking opportunities, and IPR support once they are registered under Startup India. Sigma Solutions helps startups identify the right schemes and assist in applying for them.",
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
        Common Questions about{" "}
        <span className="text-green-500">Startup India</span>
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

export default StartupmainFAQs;
