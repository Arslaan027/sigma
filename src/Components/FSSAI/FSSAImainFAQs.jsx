import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const FSSAImainFAQs = () => {
  const faqs = [
    {
      question: "Who Needs an FSSAI License?",
      answer:
        "Any entity involved in food-related activities such as manufacturing, processing, packaging, distributing, or selling food products requires an FSSAI license. This includes food manufacturers, distributors, traders, exporters, importers, catering businesses, restaurants, hotels, and even food hawkers and street vendors.",
    },
    {
      question: "What Happens During an FSSAI Inspection?",
      answer:
        "FSSAI inspections are conducted to ensure that food businesses comply with the safety and hygiene regulations. During an inspection, the FSSAI officer will check for cleanliness and hygiene of the premises, safe storage and processing of food products, proper documentation and records, and compliance with packaging and labeling regulations.",
    },
    {
      question:
        "What Is a Food Recall, and What Are the Obligations of FSSAI License Holders?",
      answer:
        "A food recall is initiated if a food product is found to be unsafe for consumption. FSSAI license holders are responsible for immediately withdrawing the unsafe product from the market. Sigma Solutions provides guidance on the correct procedures for handling food recalls and maintaining customer trust.",
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
        <span className="text-green-500">FSSAI Licensing</span>
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

export default FSSAImainFAQs;
