import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const GSTARwhat = () => {
  return (
    <div className="flex justify-center items-center dark:bg-neutral-900">
      <div className="max-w-5xl dark:bg-neutral-900 p-8 rounded-lg mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <u>
            GST <span className="text-green-500">Annual Return (GSTR-9)</span>
          </u>
        </motion.h2>

        {/* GSTR-9 Explanation Section */}
        <motion.div
          className="mt-6 text-lg text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            GST Annual Return (GSTR-9) is a consolidated summary of all GST
            returns filed during the financial year. It is mandatory for all
            regular taxpayers, and the filing process includes:
          </p>
          <ul className="list-disc list-inside mt-4 text-left mx-auto max-w-xl">
            <li>Sales, purchase, and tax details for the entire year</li>
            <li>Input tax credit availed and reversed during the year</li>
            <li>
              Details of any pending liabilities or differences between returns
              filed throughout the year
            </li>
          </ul>
          <p className="mt-4">
            <strong>Eligibility:</strong> Regular taxpayers who filed GSTR-1,
            GSTR-3B, and other returns during the financial year.
          </p>
          <p className="mt-4">
            <strong>Late Filing Penalty: </strong> Failure to file GSTR-9 on
            time attracts a late fee of ₹200 per day (₹100 CGST and ₹100 SGST),
            subject to a maximum of 0.25% of turnover in the respective state.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GSTARwhat;
