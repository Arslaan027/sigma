import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const GSTIN = () => {
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
          Structure of <span className="text-green-500">GSTIN</span>
        </motion.h2>

        {/* GSTIN Structure Section */}
        <motion.div
          className="mt-6 text-lg max-w-3xl mx-auto text-left text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>First two digits:</strong> Represent the state code as per
              the Indian Census.
            </li>
            <li>
              <strong>Next ten digits:</strong> Reflect the PAN (Permanent
              Account Number) of the business entity.
            </li>
            <li>
              <strong>Thirteenth digit:</strong> Indicates the number of
              registrations a business has within a state.
            </li>
            <li>
              <strong>Fourteenth digit:</strong> Is typically kept as 'Z' by
              default.
            </li>
            <li>
              <strong>Fifteenth digit:</strong> Acts as a check code, either a
              number or an alphabet, for error detection.
            </li>
          </ol>
        </motion.div>
        <div className="text-center text-md my-5">
          <p>
            <strong>Eligibility: </strong> Businesses with a turnover exceeding
            INR 20 lakhs for service providers or INR 40 lakhs for goods
            suppliers must register. Interstate sellers and certain e-commerce
            entities must register regardless of turnover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSTIN;
