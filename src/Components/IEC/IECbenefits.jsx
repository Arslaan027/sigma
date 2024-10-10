import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // Import an icon for decoration

const IECbenefits = () => {
  const benefits = [
    { id: 1, name: "Duty drawbacks and refunds on exports." },
    {
      id: 2,
      name: "Subsidies and incentives under schemes such as the Merchandise Exports from India Scheme (MEIS) and Service Exports from India Scheme (SEIS).",
    },
    {
      id: 3,
      name: "Access to global markets, allowing businesses to scale up and increase revenue.",
    },
    {
      id: 4,
      name: "Ease of customs clearance and quicker logistics handling.",
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
          Benefits of <span className="text-green-500">IEC</span> for Exporters
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock opportunities and enjoy government schemes
        </motion.h1>
      </div>

      {/* List of Benefits */}
      <div className="max-w-lg mx-auto">
        <ul className="list-disc space-y-4">
          {benefits.map((benefit) => (
            <motion.li
              key={benefit.id}
              className="flex items-center bg-white dark:bg-neutral-700 shadow-md rounded-lg p-4 hover:bg-green-50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * benefit.id }}
            >
              <FiCheckCircle className="text-green-500 mr-3" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {benefit.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mt-8 text-center">
        <p className="text-gray-700 dark:text-gray-200">
          IEC registration opens doors to a range of government incentives and
          provides exporters with the means to expand into global markets with
          ease and efficiency.
        </p>
      </div>
    </div>
  );
};

export default IECbenefits;
