import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PLC from "../../assets/Image/steps.png";

const PLCbenefits = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation once when it comes into view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-500">Benefits </span>of a Public Limited
          Company
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Public Limited Companies offer several advantages, including:
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image Section */}
          <motion.img
            src={PLC}
            alt="Benefits of Public Limited Company"
            className="max-w-xl mb-8 md:mb-0 md:mr-8 md:block hidden"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* List Section */}
          <ul className="text-left mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            {[
              "Ability to raise funds by issuing shares to the public.",
              "Shareholders have limited liability, their personal assets are protected.",
              "Being publicly listed can enhance the company’s reputation and credibility.",
              "Shares can be easily bought and sold, providing liquidity for investors.",
              "Increased access to resources can lead to more growth opportunities.",
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PLCbenefits;
