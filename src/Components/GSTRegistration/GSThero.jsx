import React, { useState } from "react";
import { motion } from "framer-motion";
import GST from "../../assets/Image/GSTBG.jpg"; // Importing the background image

const GSThero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center p-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${GST})`,
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <motion.h1
        className="relative z-10 text-3xl md:text-5xl font-bold text-white dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get Your GST Registration Today!
      </motion.h1>
      <motion.p
        className="relative z-10 text-md  text-white dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Simplify your business with GST registration. Enjoy seamless compliance
        and take your business to the next level.
      </motion.p>
      <motion.button
        onClick={openModal}
        className="relative z-10 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Start Registration
      </motion.button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              GST Registration Form
            </h2>

            {/* Registration Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Business Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your business name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  GSTIN (If available)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your GSTIN"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Annual Turnover
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your annual turnover"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              {/* Submit and Close Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-300 transition"
                >
                  Submit
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GSThero;
