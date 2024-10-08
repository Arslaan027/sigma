import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import IBwhy from "../../assets/Image/IBwhy.jpg"; // Ensure the path is correct

const IBwy = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-800">
      <div className="max-w-5xl dark:bg-neutral-900 p-8 rounded-lg mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Why Choose <span className="text-green-500">Sigma Solutions</span> for
          International Business Setup?
        </motion.h2>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src={IBwhy}
            alt="Why Choose Sigma Solutions"
            className="flex-shrink-0 md:w-1/3 w-auto h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          />
          <motion.p
            className="flex-1 text-lg text-gray-600 dark:text-neutral-400 mb-4 md:w-2/3 ml-6"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            Sigma Solutions combines local expertise with global insights,
            offering personalized service for each client’s unique needs. They
            simplify the complexities of setting up an international business by
            handling all administrative, legal, and logistical hurdles. Sigma
            Solutions' network across multiple countries ensures that clients
            benefit from local knowledge while enjoying the convenience of a
            single point of contact. By choosing Sigma Solutions, businesses can
            focus on growth and innovation while leaving the operational
            challenges of international setup to a team of experienced
            professionals.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default IBwy;
