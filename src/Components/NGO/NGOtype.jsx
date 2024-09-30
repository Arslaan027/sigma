import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  FaHandHoldingHeart,
  FaPeopleArrows,
  FaRegBuilding,
} from "react-icons/fa"; // Import relevant icons

const NGOtype = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-neutral-900 p-8 py-10">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Key Services Offered
        </motion.h2>

        {/* Types of NGO */}
        <div className="space-y-6">
          <motion.div
            className="p-4 bg-green-100 rounded-lg shadow-md"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-neutral-400 mt-2 space-y-4">
              <li className="flex items-start">
                <FaHandHoldingHeart className="text-green-500 mr-3 text-5xl" />
                <div>
                  <b>Trust Registration:</b> Suitable for charitable purposes
                  and governed by the Indian Trusts Act, 1882. Sigma Solutions
                  guides clients through the process of setting up a public
                  charitable trust, ensuring compliance with all state-level
                  regulations.
                </div>
              </li>
              <li className="flex items-start">
                <FaPeopleArrows className="text-blue-500 mr-3 text-5xl" />
                <div>
                  <b>Society Registration:</b> Ideal for associations formed for
                  the promotion of art, science, or charitable activities. It is
                  governed by the Societies Registration Act, 1860. Sigma
                  Solutions helps draft the Memorandum of Association (MOA) and
                  other documents.
                </div>
              </li>
              <li className="flex items-start">
                <FaRegBuilding className="text-orange-500 mr-3 text-5xl" />
                <div>
                  <b>Section 8 Company Registration:</b> A company established
                  for charitable purposes that operates similarly to other
                  companies but cannot distribute profits to members. Sigma
                  Solutions manages the incorporation process under the
                  Companies Act, 2013.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NGOtype;
