import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IStype = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation once when it comes into view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-5xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-500">Types of Subsidiaries </span>in India
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          India recognizes three primary types of subsidiaries, each offering
          unique advantages:
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* List Section */}
          <ul className="text-left mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            {[
              "Wholly Owned Subsidiary: The parent company holds 100% ownership of the subsidiary’s shares. This is only possible in sectors where 100% Foreign Direct Investment (FDI) is permitted.",
              "Joint Venture Subsidiary: Formed by two or more companies, jointly operated, and controlled. The parent companies share the ownership, control, and profits of the subsidiary.",
              "LLP Subsidiary Company: A Limited Liability Partnership (LLP) subsidiary provides liability protection to partners, safeguarding them from personal responsibility for the company’s debts or obligations.",
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

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mt-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Note: Before forming a subsidiary in India, obtaining approval from
          the Reserve Bank of India (RBI) is essential to comply with foreign
          investment regulations.
        </motion.p>
      </div>
    </div>
  );
};

export default IStype;
