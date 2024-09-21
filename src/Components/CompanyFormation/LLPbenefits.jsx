import React from "react";
import { motion } from "framer-motion";
import LLP from "../../assets/Image/LLP.png";

const LLPbenefits = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Benefits of{" "}
          <span className="text-green-500">Limited Liability Partnenrship</span>{" "}
          Registration
        </motion.h2>

        {/* Flexbox for Image and List */}
        <div className="flex w-full max-w-7xl flex-col lg:flex-row items-center justify-center lg:items-start mx-auto">
          {/* Image Section */}
          <motion.img
            src={LLP}
            alt="Benefits of LLP Registration"
            className="w-[30vw] lg:w-[20vw] h-auto mb-8 lg:mb-0 lg:mr-8 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Limited Liability Partnerships (LLPs) combine the benefits of both
              partnerships and corporations. Here are some key advantages of LLP
              registration:
            </motion.p>

            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <motion.li
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong>1. Limited Liability:</strong> Partners have limited
                liability, protecting personal assets from business debts.
              </motion.li>
              <motion.li
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <strong>2. Flexibility in Management:</strong> LLPs allow for
                flexible management structures and operational flexibility.
              </motion.li>
              <motion.li
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <strong>3. No Minimum Capital Requirement:</strong> Unlike
                companies, LLPs do not have a minimum capital requirement for
                registration.
              </motion.li>
              <motion.li
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <strong>4. Separate Legal Entity:</strong> LLPs are considered a
                separate legal entity, distinct from its partners.
              </motion.li>
              <motion.li
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <strong>5. Tax Benefits:</strong> LLPs are taxed as a
                partnership, providing potential tax advantages.
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLPbenefits;
