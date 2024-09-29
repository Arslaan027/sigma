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
        <div className="flex-1">
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
          >
            GST Registration was introduced in India in July 2017. It is a
            combination of indirect taxes such as VAT and Service Tax. GST
            registration is required when your turnover or sales exceed 40 lakh
            rupees in a year (10 lakh for Northeastern and Hill States) as per
            the latest amendment from 1st April 2019.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a slight delay
          >
            For some specific businesses, registration is mandatory without
            crossing the turnover limit. For example, if you are running an
            e-commerce business, you must obtain GST registration from the start
            of your business.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.5 }} // Animation duration with a slight delay
          >
            We at SigmaSolution help you with GST Registration online, which
            takes only 2-3 working days to obtain verified GST certification
            with login details sent directly to your email inbox.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default GSTwhat;
