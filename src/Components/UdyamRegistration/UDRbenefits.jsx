import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const UDRbenefits = () => {
  const benefits = [
    "Collateral-free loans: MSMEs can avail loans without the need for collateral through schemes like the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).",
    "Subsidy on patent registration: MSMEs are eligible for subsidies on the costs related to patents and trademarks.",
    "Concessions on electricity: Registered MSMEs can apply for reduced electricity rates from state governments.",
    "Exemption from direct taxes: Various tax benefits and exemptions are available for MSMEs.",
    "Market and export support: Benefits related to procurement, government tenders, and international market exposure.",
  ];

  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-900">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Benefits of <span className="text-green-500">Udyam Registration</span>
        </motion.h2>

        {/* Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-neutral-800"
              initial={{ opacity: 0 }} // Initial state for animation
              animate={{ opacity: 1 }} // Animate to visible state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with a delay
            >
              <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UDRbenefits;
