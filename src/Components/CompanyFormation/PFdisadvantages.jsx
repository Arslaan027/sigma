import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PFdisadvantages = () => {
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
          Disadvantages of{" "}
          <span className="text-green-500">Partnership Firm</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Below are some of the key disadvantages of a partnership firm:
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* List Section */}
          <ul className="text-left mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            {[
              "Unlimited Liability: Partners are personally liable for all firm debts and losses.",
              "No Perpetual Succession: The firm can be dissolved due to the death or insolvency of a partner.",
              "Limited Resources: With a maximum of 20 partners, capital resources are limited.",
              "Difficult to Raise Funds: Lacks strong legal backing, making it hard to raise external funds.",
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

export default PFdisadvantages;
