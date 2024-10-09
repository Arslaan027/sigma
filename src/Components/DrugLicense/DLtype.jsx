import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DLtype = () => {
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
          Types of <span className="text-green-500">Drug Licenses</span> in
          India
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The type of drug license required depends on the nature of your
          business. Here are the key types:
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* List Section */}
          <ul className="text-left mx-auto space-y-4 w-full md:w-3/4 text-gray-600 dark:text-gray-400">
            {[
              "Manufacturing License: Required for businesses involved in the manufacture of drugs and cosmetics, whether they are allopathic, homeopathic, or ayurvedic.",
              "Wholesale Drug License: Needed for entities engaged in wholesale distribution of drugs, supplying drugs in bulk to retailers or other distributors.",
              "Retail Drug License: Required for businesses involved in the retail sale of drugs, including chemists, druggists, and pharmacies.",
              "Loan License: Issued to entities that do not have manufacturing facilities of their own but intend to get drugs manufactured by others.",
              "Import License: Required for businesses importing drugs or cosmetics into India.",
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DLtype;
