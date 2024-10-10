import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // Import an icon for decoration

const IECneedswho = () => {
  const entities = [
    {
      id: 1,
      name: "Businesses involved in the import and export of goods or services.",
    },
    { id: 2, name: "Individuals engaged in trading with foreign countries." },
    {
      id: 3,
      name: "Proprietorships, partnerships, LLPs, companies, or any other entities involved in cross-border transactions.",
    },
    {
      id: 4,
      name: "Individuals importing or exporting goods for personal use do not require an IEC.",
    },
  ];

  return (
    <div className="p-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <motion.h3
          className="text-4xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who Needs an{" "}
          <span className="text-green-500">Import Export License (IEC)?</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Essential for International Trade
        </motion.h1>
      </div>

      {/* List of Entities */}
      <div className="max-w-lg mx-auto">
        <ul className="list-disc space-y-4">
          {entities.map((entity) => (
            <motion.li
              key={entity.id}
              className="flex items-center bg-white dark:bg-neutral-700 shadow-md rounded-lg p-4 hover:bg-green-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * entity.id }}
            >
              <FiCheckCircle className="text-green-500 mr-3" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {entity.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mt-8 text-center">
        <p className="text-gray-700 dark:text-gray-200">
          It is important for all entities engaged in international trade to
          secure an IEC to comply with regulations and facilitate smooth
          cross-border transactions.
        </p>
      </div>
    </div>
  );
};

export default IECneedswho;
