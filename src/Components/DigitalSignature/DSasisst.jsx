import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DSasisst = () => {
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
          className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          How Can <span className="text-green-500">Sigma Solutions</span> Help
          with Digital Signature Certificate Services?
        </motion.h2>

        {/* Explanation Section */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sigma Solutions offers comprehensive support for obtaining a Digital
          Signature Certificate (DSC):
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
            "Expert Guidance: We help you choose the right type of DSC based on your business needs.",
            "Hassle-Free Application: Our team assists with the documentation and application process, ensuring accuracy and timely submission.",
            "Quick Processing: We work with authorized certifying authorities to expedite the verification process, ensuring your DSC is issued as quickly as possible.",
            "Renewal Services: We track the expiration of your DSC and assist in its renewal so that your business operations remain uninterrupted.",
            "End-to-End Support: From initial consultation to post-issuance support, we guide you through every step, ensuring full compliance with digital security regulations.",
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

export default DSasisst;