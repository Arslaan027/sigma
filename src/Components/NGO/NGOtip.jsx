import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const NGOTips = () => {
  const tips = [
    "Clear Objectives: Define the NGO’s mission, objectives, and core activities.",
    "Governance: Build a transparent and effective governing body.",
    "Fundraising Strategy: Diversify funding sources, including grants, individual donations, and corporate partnerships.",
    "Financial Management: Maintain clear accounting practices and undergo regular audits.",
    "Compliance and Reporting: Adhere to all statutory compliances like filing annual reports and financial statements.",
    "Impact Measurement: Regularly evaluate the impact of your programs and activities.",
  ];

  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-800">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          NGO Management Tips
        </motion.h2>

        {/* Tips List */}
        <div className="space-y-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-neutral-800"
              initial={{ opacity: 0 }} // Initial state for animation
              animate={{ opacity: 1 }} // Animate to visible state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with a delay
            >
              <p className="text-gray-700 dark:text-gray-300">{tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOTips;
