import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
import GST from "../../assets/Image/GST1.jpg"; // Ensure the path is correct

const GSTwhat = () => {
  const ref = useRef(null); // Create a ref for the element
  const isInView = useInView(ref, { once: true }); // Check if the element is in view

  return (
    <div className="bg-white dark:bg-neutral-900 p-8" ref={ref}>
      <motion.h2
        className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} // Animate based on view
        transition={{ duration: 0.5 }} // Animation duration
      >
        What is <span className="text-green-500">GST</span> Registration?
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
            src={GST}
            alt="GST Registration"
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
            <strong>Goods and Services Tax (GST)</strong> registration is
            mandatory for businesses in India with a turnover exceeding the
            prescribed limit (usually INR 20 lakhs for services and INR 40 lakhs
            for goods). GST enables the collection of taxes on the sale of goods
            and services.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a slight delay
          >
            <strong>
              GSTIN (Goods and Services Tax Identification Number)
            </strong>{" "}
            is a unique 15-digit identification number assigned to businesses
            and individuals who are registered under the Goods and Services Tax
            (GST) system in India. It serves as a legal identity for taxpayers
            and is essential for the collection and payment of GST.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GSTwhat;
