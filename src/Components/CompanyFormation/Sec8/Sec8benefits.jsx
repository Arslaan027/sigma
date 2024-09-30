import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import sec8 from "../../../assets/Image/sec8ben.jpg"; // Ensure the path to the image is correct

const Sec8Advantages = () => {
  const advantages = [
    {
      title: "Limited Liability",
      description: "Protects members' personal assets from company debts.",
    },
    {
      title: "Tax Exemptions",
      description: "Eligible for tax exemptions under certain conditions.",
    },
    {
      title: "Suitable for Social Initiatives",
      description: "Ideal for NGOs focused on social welfare.",
    },
    {
      title: "Ability to Receive Foreign Donations",
      description: "Can accept foreign donations for social projects.",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-800">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Advantages of{" "}
          <span className="text-green-500">Section 8 Registration</span>
        </motion.h2>

        {/* Flex Container for Image and List */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Advantages List */}
          <motion.ul
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 list-disc ml-6 mb-4 md:mb-0"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            {advantages.map((advantage, index) => (
              <li key={index} className="mb-2">
                <strong className="text-green-500">{advantage.title}:</strong>{" "}
                {advantage.description}
              </li>
            ))}
          </motion.ul>

          {/* Image */}
          <motion.div
            className="flex-shrink-0 md:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={sec8}
              alt="Advantages of Section 8 Registration"
              className="md:w-2/3 w-full h-auto rounded-lg" // Image styling
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sec8Advantages;
