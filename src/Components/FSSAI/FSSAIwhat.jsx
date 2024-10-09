import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
import FSSAI from "../../assets/Image/FSSAIwhat.jpg"; // Ensure the path is correct

const FSSAIwhat = () => {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Check if the element is in view

  return (
    <div className="bg-white dark:bg-neutral-900 p-8" ref={ref}>
      <motion.h2
        className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate based on view
        transition={{ duration: 0.5 }} // Animation duration
      >
        <span className="text-green-500">FSSAI License</span>
      </motion.h2>
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="flex-1 mb-6 md:mr-4 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state for image animation
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          } // Animate based on view
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a slight delay
        >
          <img
            src={FSSAI}
            alt="FSSAI License"
            className="md:w-2/3 w-auto h-auto rounded-lg"
          />
        </motion.div>
        <div className="flex-1 justify-center items-center my-auto">
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
          >
            <strong>What is FSSAI?</strong> The FSSAI license is an approval
            issued by the Food Safety and Standards Authority of India under the
            Food Safety and Standards Act, 2006. It certifies that food
            businesses comply with hygiene, safety, and quality regulations,
            ensuring that food is safe for human consumption.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a slight delay
          >
            <strong>Why is an FSSAI License Important?</strong> An FSSAI license
            offers legal protection for food businesses, as it is mandatory to
            operate in India. It ensures that the food produced, stored, or
            distributed meets national safety standards. Businesses holding an
            FSSAI license gain consumer trust, as it reflects a commitment to
            food safety and quality.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default FSSAIwhat;
