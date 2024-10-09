import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GSTASservices = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation once when it comes into view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <u>
            GST Advisory <span className="text-green-500">Services</span>
          </u>
        </motion.h2>

        {/* Explanation Section */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          GST Advisory Services assist businesses in managing their GST
          compliance efficiently and staying updated with the latest GST laws.
          These services are crucial for:
        </motion.p>

        {/* List Section */}
        <motion.ul
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-left mx-auto space-y-4 w-full md:w-3/4 text-gray-600 dark:text-gray-400"
        >
          {[
            "Understanding Complex GST Regulations: Businesses may face complex GST issues regarding input tax credit, reverse charge mechanism, and export regulations.",
            "Tax Planning: GST advisors help businesses structure their transactions and operations to minimize tax liability.",
            "Compliance and Return Filing: Advisories ensure that businesses file their GST returns on time and comply with regulatory norms to avoid penalties.",
            "Litigation and Dispute Resolution: In case of disputes or litigation with tax authorities, advisory services provide legal and strategic support.",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-md"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <strong>
                {index + 1}. {item}
              </strong>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default GSTASservices;
