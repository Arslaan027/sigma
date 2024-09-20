import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PLCstepsimg from "../../assets/Image/PLC.png";
import { FaCheckCircle } from "react-icons/fa";

const PLCsteps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 px-4 bg-gray-100 dark:bg-black">
      {/* Combined Section */}
      <div className="max-w-5xl mx-auto text-center mb-1" ref={ref}>
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Procedure for
          <span className="text-green-500"> Public Limited Company </span>
          Registration
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Registering a Public Limited Company involves several steps. Here’s a
          brief overview:
        </motion.p>

        {/* Image Section */}
        <motion.img
          src={PLCstepsimg}
          alt="Public Limited Company Steps"
          className="w-full h-auto rounded-lg"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        />

        {/* Overview Section */}
        <motion.h3
          className="text-2xl font-semibold text-gray-800 dark:text-green-500 mb-1"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Overview
        </motion.h3>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-2xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Public Limited Company registration involves creating a legal entity
          that offers shares to the public for purchase and trading on a stock
          exchange. This process includes meeting requirements such as minimum
          share capital and appointing directors.
        </motion.p>

        {/* Get Support Button */}
        <motion.a
          href="#"
          className="inline-block mt-8 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition duration-200"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Get Support
        </motion.a>
      </div>
    </div>
  );
};

export default PLCsteps;
