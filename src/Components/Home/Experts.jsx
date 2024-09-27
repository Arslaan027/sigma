import React from "react";
import { motion } from "framer-motion";

const Experts = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-gray-300 p-6 rounded-lg shadow-lg py-16 my-16 dark:bg-neutral-900">
      {/* Left Section - Text Content */}
      <motion.div
        className="flex-1 md:mr-6 order-1 md:order-1 mx-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-green-500">Private Limited Company</span>{" "}
          Registration-Online
        </h2>
        <p className="text-lg mb-2">
          Pvt Ltd Company Registration Starts from{" "}
          <span className="text-green-500">
            <b>₹8,499/-</b>
          </span>{" "}
          Only!
        </p>
        <ul className="list-disc ml-4 mb-4">
          <li>No Hidden Charges</li>
          <li>Lowest Price Guarantee</li>
          <li>Quick and Hassle-Free Process</li>
          <li>Free Expert Assistance for Lifetime</li>
        </ul>
        <p className="mt-4 flex items-center">
          <span className="text-yellow-500 text-lg mr-2">★★★★</span>
          <span>Google Customer Rating: 4</span>
        </p>
      </motion.div>

      {/* Right Section - Form */}
      <motion.div
        className="flex-1 mt-6 md:mt-0 md:ml-6 order-2 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white text-black p-4 rounded-lg shadow-md mx-auto w-full md:w-3/4 dark:bg-neutral-800">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 pb-2">
            Get <span className="text-green-500">Expert</span> Consultation
          </h3>

          <form className="flex flex-col">
            <motion.input
              type="text"
              placeholder="Full Name"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-neutral-800"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-neutral-800"
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="text"
              placeholder="Mobile"
              className="mb-3 p-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-neutral-800"
              whileFocus={{ scale: 1.05 }}
            />
            <div className="mx-auto">
              <motion.button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reach Out
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Experts;
