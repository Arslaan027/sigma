import React from "react";
import { motion } from "framer-motion";
import CS from "../../../assets/Image/CSadd.jpg"; // Ensure the path to the image is correct

const CSadvantages = () => {
  const advantages = [
    "Limited liability for members.",
    "Democratic control (one member, one vote).",
    "Benefits of economies of scale.",
    "Profits shared among members.",
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
          Advantages of a{" "}
          <span className="text-green-500">Cooperative Society</span>
        </motion.h2>

        {/* Flex Container for Image and List */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Advantages List */}
          <motion.ul
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 list-disc ml-6 mb-4 md:mb-0"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </motion.ul>

          {/* Image */}
          <motion.div
            className="flex-shrink-0 md:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={CS}
              alt="Cooperative Society Advantages"
              className="w-2/3 h-auto rounded-lg" // Image styling
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CSadvantages;
