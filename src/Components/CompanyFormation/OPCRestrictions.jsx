import React from "react";
import { motion } from "framer-motion";

const OPCRestrictions = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 my-20 bg-white rounded-md dark:bg-black">
      {/* Animated heading */}
      <motion.h1
        className="text-3xl font-bold mb-6 text-green-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Restrictions on One Person Company
      </motion.h1>

      <ul className="space-y-4">
        {/* List Item 1 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            1. Not Suitable for Scalability
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Registering your company as an OPC is an excellent choice for a
            small business structure. However, if you intend to expand it to
            <br />
            higher levels, this may not work. The total number of persons in an
            OPC is always one. You cannot add more members or <br />{" "}
            shareholders, which can stifle corporate expansion and growth.
          </p>
        </motion.li>

        {/* List Item 2 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            2. Increased Restriction on Commercial Activities
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            One Person Company is not permitted to engage in non-banking
            financial investment operations under the rules and regulations.
            Registering as an OPC does not provide you the freedom to invest in
            the security of other corporations.
          </p>
        </motion.li>

        {/* List Item 3 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            3. No Distinct Distinction Between Ownership and Management
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            A single person serves as both the company’s director and
            management, so there is no apparent boundary between the two roles.{" "}
            <br />
            All decisions must be made and approved by one individual, which
            increases the likelihood of unethical behavior.
          </p>
        </motion.li>
      </ul>
    </div>
  );
};

export default OPCRestrictions;
