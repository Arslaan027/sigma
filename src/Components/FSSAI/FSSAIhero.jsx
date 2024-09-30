import React, { useState } from "react";
import { motion } from "framer-motion";
import FSSAI from "../../assets/Image/FSSAI.jpg"; // Make sure the image path is correct

const FSSAIhero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${FSSAI})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <motion.h1
        className="relative z-10 text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FSSAI Registration
      </motion.h1>
      <motion.p
        className="relative z-10 text-lg text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Secure Your Food Business with Hassle-Free FSSAI Registration!
      </motion.p>
      <motion.button
        onClick={openModal}
        className="relative z-10 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Book Now
      </motion.button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 px-5 md:pt-24 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg max-w-md w-full relative z-20">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              FSSAI Registration Form
            </h2>

            {/* FSSAI Registration Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Name*
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Type your Good Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Email Id*
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Type your Valid Email id"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Type your Valid Mobile Number"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Are you on WhatsApp?*
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      value="Yes"
                      className="mr-2"
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      value="No"
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  Type of License*
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select License Type</option>
                  <option value="Up to 12 lakh">Turnover Up to 12 lakh</option>
                  <option value="12 lakh to 20 Crore">
                    12 lakh to 20 Crore
                  </option>
                  <option value="20 Crore or More">20 Crore or More</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2 text-left">
                  About your Business*
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:border-gray-700 dark:text-white"
                  placeholder="Let us know your nature of business"
                  required
                ></textarea>
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

export default FSSAIhero;
