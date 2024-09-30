import React from "react";
import { motion } from "framer-motion";
import {
  FiHelpCircle,
  FiUser,
  FiCheckCircle,
  FiCalendar,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

const Roadmap = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stepwise Company
          <span className="text-green-500"> Registration Process</span>
        </motion.h3>
      </div>

      {/* Section 1: Online Company Registration in Three Easy Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Left section */}
        <div>
          <motion.h2
            className="text-lg font-bold text-gray-800 mb-6 dark:text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Online Company Registration in Three Easy Steps!
          </motion.h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FiHelpCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">
                  1. Answer Quick Questions
                </h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>Pick the most suitable package</li>
                  <li>Take 5-10 minutes to answer simple questions</li>
                  <li>Provide documents as per the checklist</li>
                  <li>Make payment through a secure payment gateway</li>
                </ul>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiUser className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">
                  2. Experts at Your Service
                </h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>We will assign a Relationship Manager</li>
                  <li>Relax while experts draft and file your documents</li>
                  <li>
                    We commit to addressing any queries within 24 business hours
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FiCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">
                  3. You are All Set to Roll
                </h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>All it takes is 10-12 working days*</li>
                  <li>
                    Let’s keep your business compliant and protected. Time to
                    get on a free assessment call
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right section */}
        <div>
          <motion.h2
            className="text-lg font-bold text-gray-800 mb-6 dark:text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Quickest Way to Register a Company
          </motion.h2>
          <div className="space-y-6">
            {/* Day 1-2 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FiCalendar className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">Days 1 - 2</h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>Experts review your documents and information</li>
                  <li>Apply for Digital Signature Certificate</li>
                </ul>
              </div>
            </motion.div>

            {/* Day 3-6 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiFileText className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">Days 3 - 6</h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>Name availability check on MCA and IP India Portals</li>
                  <li>Apply for Company Name Reservation</li>
                  <li>MoA and AoA drafting</li>
                </ul>
              </div>
            </motion.div>

            {/* Day 7-9 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FiSettings className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">Days 7 - 9</h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>Form filling for Certificate of Incorporation (COI)</li>
                  <li>DIN Allotment Application</li>
                  <li>PAN and TAN Application</li>
                </ul>
              </div>
            </motion.div>

            {/* Day 10-12 */}
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FiCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="font-bold text-lg text-green-500">
                  Days 10 - 12
                </h3>
                <ul className="list-disc ml-5 text-gray-600 dark:text-gray-200">
                  <li>Awaiting MCA approval</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center">
        *Subject to Government processing time
      </p>
    </div>
  );
};

export default Roadmap;
