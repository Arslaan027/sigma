import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import FS from "../../assets/Image/fsadd.jpg"; // Ensure the image path is correct

const FSadvantages = () => {
  const advantages = [
    {
      title: "Access to Indian market.",
      description: "Expand your business and reach new customers in India.",
    },
    {
      title: "Increased brand presence.",
      description: "Establish a recognizable brand within the Indian market.",
    },
    {
      title: "Ability to leverage local resources.",
      description: "Utilize local talent and resources to enhance operations.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <motion.h3
        className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.5 }} // Animation duration
      >
        Advantages of{" "}
        <span className="text-green-500">
          Establishing a Foreign Company in India
        </span>
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 md:w-1/2 w-full mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
          animate={{ opacity: 1, scale: 1 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <img
            src={FS}
            alt="Foreign Company"
            className="w-full h-64 object-cover rounded-md"
          />
        </motion.div>

        {/* Advantages List */}
        <motion.ul
          className="md:w-1/2 w-full list-disc pl-10 space-y-2 text-gray-600 dark:text-gray-100"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
        >
          {advantages.map((advantage, index) => (
            <li key={index} className="text-lg">
              <strong className="text-green-500">{advantage.title}</strong>{" "}
              {advantage.description}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default FSadvantages;
