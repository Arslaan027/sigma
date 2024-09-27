import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./style.css"; // Import the updated stylesheet

const ComparisonSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  const listItems = [
    {
      label: "Income Tax Return filing of the Directors and Shareholders",
      amount: 4000,
    },
    { label: "INC 20A filing", amount: 1000 },
    { label: "ADT 1 filing", amount: 1000 },
    { label: "Monthly GST filings", amount: 10000 },
    { label: "Quarterly TDS filings", amount: 5000 },
    { label: "Annual Compliance Report", amount: 8000 },
    { label: "Filing of Form 8", amount: 1200 },
    { label: "ROC Annual Return", amount: 1500 },
    { label: "Company Name Change Filing", amount: 2500 },
    { label: "Annual Financial Statements", amount: 3000 },
  ];

  return (
    <section className="bg-white dark:bg-black py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-500">Grow Your Business</span> instead of{" "}
          Complex Registration processes and leave it for{" "}
          <span className="text-green-500">Sigma Solution</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          With other service providers you would have to pay for each compliance
          filing individually!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-lg shadow-md scrollable-list"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex justify-between items-center bg-white dark:bg-neutral-700 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className="text-gray-800 dark:text-gray-200">
                    {item.label}
                  </span>
                  <span className="text-gray-800 dark:text-gray-200">
                    ₹
                    {inView ? (
                      <CountUp start={0} end={item.amount} duration={4} />
                    ) : (
                      "0"
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-lg shadow-md flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="useSigmaSolution"
                className="w-6 h-6 text-green-400 dark:bg-neutral-900 bg-white border-gray-300 dark:border-gray-600 rounded focus:ring-green-400"
              />
              <label
                htmlFor="useSigmaSolution"
                className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Use SigmaSolution
              </label>
            </div>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get all your Compliance done with the help of Industry Experts and
              channelize that precious time to grow your business.
            </motion.p>
            <div className="text-center">
              <motion.button
                className="bg-green-400 text-white px-6 py-2 rounded-lg shadow hover:bg-green-500 dark:hover:bg-green-600 transition duration-300"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started!
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
