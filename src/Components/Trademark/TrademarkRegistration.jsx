import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import TM from "../../assets/Image/onlyTM.jpg"; // Ensure the path is correct

const TrademarkRegistration = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-md">
      <motion.h2
        className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.5 }} // Animation duration
      >
        <span className="text-green-500">Trademark Registration</span> Online is
        Possible
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center">
        <motion.img
          src={TM}
          alt="Trademark"
          className="flex-shrink-0 md:w-1/3 w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
          animate={{ opacity: 1, scale: 1 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        />
        <motion.p
          className="flex-1 text-lg text-gray-600 dark:text-neutral-400 mb-4 md:w-2/3"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
        >
          Yes, now the Trademark Registry has their own dedicated government
          portal which simplifies the Trademark Registration Online. They have a
          standard procedure for trademark registration, but it’s difficult if
          you are not aware of the Trademark Class or Trade name rules or
          Digital Signature, etc. In that case, we at MyOnlineCA help you to get
          done your Trademark Registration at the lowest cost with the Trademark
          Government Certified Attorney.
        </motion.p>
      </div>
      <div className="text-center mt-4">
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300">
          Get Support
        </button>
      </div>
    </div>
  );
};

export default TrademarkRegistration;
