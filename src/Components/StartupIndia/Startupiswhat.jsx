import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Startupiswhat = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation once when it comes into view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          What is a Startup According to{" "}
          <span className="text-green-500">Startup India</span>
        </motion.h2>

        {/* Explanation Section */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A startup is defined as an entity that meets the following criteria:
        </motion.p>

        {/* List Section */}
        <motion.ul
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-left mx-auto space-y-4 w-full md:w-3/4 text-gray-600 dark:text-gray-400"
        >
          {[
            "Incorporated as a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership Firm in India.",
            "Has been in existence for less than 10 years.",
            "Has an annual turnover not exceeding ₹100 crore in any financial year.",
            "Working towards innovation, development, or improvement of products or services, or involved in a scalable business model with high growth potential.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-md"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <strong>
                {index + 1}. {item}
              </strong>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Startupiswhat;
