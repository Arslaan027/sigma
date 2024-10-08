import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CopyrightEligibility = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation once when it comes into view

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          Eligibility for{" "}
          <span className="text-green-500">Copyright Registration</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Below are the key eligibility criteria for copyright registration:
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* List Section */}
          <ul className="text-left mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            {[
              "The work must be original and fall under the category of literary, musical, dramatic, or artistic works.",
              "The work must be in a tangible form, such as a book, manuscript, recording, or artwork.",
              "The applicant can be the author, composer, producer, or any other person claiming ownership of the work.",
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

export default CopyrightEligibility;
