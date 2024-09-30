import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TM from "../../assets/Image/TM.jpg"; // Ensure the path is correct

const TrademarkWhat = () => {
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
        Why is <span className="text-green-500">Trademark Registration</span>{" "}
        Required for Business?
      </motion.h2>
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="mb-6 md:mr-4 flex justify-center items-center md:w-1/3 w-full" // Set width for image container
          initial={{ opacity: 0, scale: 0.8 }} // Initial state for image animation
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          } // Animate based on view
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a slight delay
        >
          <img
            src={TM}
            alt="Trademark Registration"
            className="w-2/3 h-auto rounded-lg" // Adjusted width to make the image smaller (2/3 of the container)
          />
        </motion.div>
        <div className="md:w-2/3 w-full">
          {/* Set width for text container */}
          <motion.p
            className="text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
          >
            There are numerous benefits and reasons to register your brand name
            with a logo as a trademark in India:
          </motion.p>
          <motion.ul
            className="list-disc pl-6 text-lg text-gray-600 dark:text-neutral-400 mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on view
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with a slight delay
          >
            <li>
              Secure your brand or company name so competitors can’t use a
              similar brand name.
            </li>
            <li>
              Provide protection on the brand name so other companies can’t use
              it without your permission.
            </li>
            <li>
              Help protect your existing customers from fake similar brand
              names.
            </li>
            <li>
              Protect your domain name if you are an internet-based startup
              (e.g., www.xyz.com).
            </li>
            <li>
              Establish a distinct identity on e-commerce platforms like
              Flipkart, Amazon, or Paytm.
            </li>
            <li>
              Facilitate the registration of a private limited company with the
              same brand name.
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default TrademarkWhat;
