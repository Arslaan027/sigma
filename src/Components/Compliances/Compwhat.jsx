import React from "react";
import { motion } from "framer-motion";
import what from "../../assets/Image/compwhat.jpg"; // Ensure the image path is correct

const Compwhat = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-900">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Company <span className="text-green-500">Compliances</span> in India
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              In India, companies are required to follow specific annual and
              event-based compliances to ensure they operate within the legal
              framework established by the Companies Act, 2013, and other
              relevant regulations. These compliances vary based on the type of
              company (e.g., private limited, public limited, limited liability
              partnership).
            </p>
          </motion.div>

          <motion.div
            className="flex-shrink-0 md:w-1/3 w-auto h-auto mx-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={what}
              alt="Company Compliances"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Compwhat;
