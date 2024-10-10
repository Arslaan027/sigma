import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DSuses = () => {
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
          Uses of{" "}
          <span className="text-green-500">Digital Signature Certificate</span>
        </motion.h2>

        {/* Explanation Section */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Digital Signature Certificates (DSCs) serve various purposes across
          multiple sectors:
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
            "Company Incorporation – DSC is mandatory for filing company registration forms with the Ministry of Corporate Affairs (MCA).",
            "Income Tax e-filing – Used to electronically sign and file tax returns for companies and individuals.",
            "GST Registration – Required for companies to authenticate documents when registering for GST.",
            "e-Tendering – Class 3 DSC is mandatory for companies participating in e-tendering and online bidding.",
            "Signing Documents – Businesses use DSCs to sign digital contracts, purchase orders, and other legal documents securely.",
            "Patent and Trademark Filings – Used for signing applications with the IP India office.",
            "FSSAI and IEC Applications – DSC is often required for obtaining food licenses and importer-exporter code.",
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

export default DSuses;
