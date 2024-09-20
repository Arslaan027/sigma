import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BestBusiness = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing after it becomes visible
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const tableVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-8 bg-gray-100 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-300">
            Find Your Ideal{" "}
            <span className="text-green-500">Business Structure</span> That
            Works Best For Your Business.
          </h3>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-lg shadow-lg dark:bg-neutral-900"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={tableVariant}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className="min-w-full bg-white border border-gray-300 rounded-lg dark:bg-neutral-900">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  Criteria
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  Private Limited Company
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  One Person Company
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  Limited Liability Partnership
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  Partnership Firm
                </th>
                <th className="py-4 px-6 bg-gray-200 text-gray-600 dark:text-gray-200 font-semibold text-left dark:bg-neutral-800">
                  Proprietorship Firm
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  criteria: "Applicable Law",
                  values: [
                    "Companies Act, 2013",
                    "Companies Act, 2013",
                    "Limited Liability Partnership Act, 2008",
                    "Indian Partnership Act, 1932",
                    "No specified Act",
                  ],
                },
                {
                  criteria: "Registration",
                  values: [
                    "Mandatory",
                    "Mandatory",
                    "Mandatory",
                    "Optional",
                    "No",
                  ],
                },
                {
                  criteria: "Number of Owners",
                  values: [
                    "2 - 200",
                    "Only 1",
                    "2 - Unlimited",
                    "2 - 50",
                    "Only 1",
                  ],
                },
                {
                  criteria: "Separate Legal Entity",
                  values: ["Yes", "Yes", "Yes", "No", "No"],
                },
                {
                  criteria: "Liability Protection",
                  values: [
                    "Limited",
                    "Limited",
                    "Limited",
                    "Unlimited",
                    "Unlimited",
                  ],
                },
                {
                  criteria: "Statutory Audit",
                  values: [
                    "Mandatory",
                    "Mandatory",
                    "As Applicable",
                    "Not Mandatory",
                    "Not Mandatory",
                  ],
                },
                {
                  criteria: "Ownership Transfer",
                  values: [
                    "Yes",
                    "Yes (Restricted)",
                    "Yes",
                    "Yes (Restricted)",
                    "No",
                  ],
                },
                {
                  criteria: "Perpetual Existence",
                  values: ["Yes", "Yes", "Yes", "No", "No"],
                },
                {
                  criteria: "Foreign Ownership",
                  values: [
                    "Allowed",
                    "Not Allowed",
                    "Allowed",
                    "Allowed",
                    "Not Allowed",
                  ],
                },
                {
                  criteria: "Taxation Liability",
                  values: ["Moderate", "Moderate", "High", "High", "Low"],
                },
                {
                  criteria: "Compliance Requirement",
                  values: ["High", "High", "Moderate", "Low", "Low"],
                },
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  variants={tableVariant}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <td className="py-3 px-6 border-b bg-gray-100 font-semibold text-green-500 dark:bg-neutral-800">
                    {row.criteria}
                  </td>
                  {row.values.map((value, i) => (
                    <td key={i} className="py-3 px-6 border-b">
                      {value}
                    </td>
                  ))}
                </motion.tr>
              ))}
              <tr>
                <td className="py-3 px-6 border-b bg-gray-100 font-semibold dark:bg-neutral-800"></td>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <td key={i} className="py-2 px-6 border-b">
                      <button className="bg-green-500 text-white px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm rounded-lg shadow-md hover:bg-green-600 whitespace-nowrap">
                        Learn More
                      </button>
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default BestBusiness;
