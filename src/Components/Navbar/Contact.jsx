import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import contact from "../../assets/Image/contact.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="p-8 font-sans bg-gray-50 dark:bg-neutral-900">
      {/* Header with Animation */}
      <motion.div
        className=" text-center bg-gradient-to-r from-green-300 to-green-400 z-0 h-[25vh] flex flex-col justify-center dark:justify-start min-w-full rounded-b-lg shadow-lg dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-900 dark:bg-neutral-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-4xl text-2xl text-white font-bold">
          Connect with Us for Expert Support and Solutions
        </h2>
        <h4 className="text-lg text-gray-200 mt-2 md:mb-0 mb-10">
          Your Queries, Our Priority!
        </h4>
      </motion.div>

      {/* Main Content with Animation */}
      <div className="relative z-10 flex justify-center items-center h-auto -mt-10">
        <motion.div
          className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg max-w-7xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contact Sections */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Corporate Office Section with Animation */}
            <motion.div
              className="bg-gray-100 dark:bg-neutral-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm font-semibold text-white bg-green-500 w-auto px-4 py-2 rounded-full dark:bg-neutral-800">
                Corporate Office
              </span>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                No 13/22, 1st & 2nd floor,
                <br />
                Yatra, TNGO Colony,
                <br />
                West Karikalan Street, Adambakkam,
                <br />
                Chennai - 600088, Tamil Nadu.
              </p>
              <img src={contact} alt="Contact Illustration" />
            </motion.div>

            {/* Combined Sales, Support, and Escalation Section */}
            <div className="flex flex-col md:flex-row md:col-span-2">
              <motion.div
                className="bg-gray-100 dark:bg-neutral-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 w-full md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-white bg-green-500 w-auto px-4 py-2 rounded-full dark:bg-neutral-800">
                  For Sales
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  For enquiries, call us for fresh beginnings.
                </p>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <AiOutlinePhone className="mr-2 text-green-600" /> +91 7305
                  345 345
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Have a query? Message us on WhatsApp!
                </p>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <FaWhatsapp className="mr-2 text-green-600" /> +91 7305 048
                  476
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Email us and we'll get back to you soon!
                </p>
                <p className="mt-2 text-green-600 hover:underline">
                  <a href="mailto:support@kanakkupillai.com">
                    <AiOutlineMail className="inline mr-2" />
                    support@kanakkupillai.com
                  </a>
                </p>

                {/* Divider for Career Section */}
                <div className="my-4 border-t border-gray-300 dark:border-gray-600"></div>

                <span className="text-sm font-semibold text-white bg-green-500 w-auto px-4 py-2 rounded-full dark:bg-neutral-800">
                  For Career
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Kickstart a career – Reach out to us for exciting
                  opportunities!
                </p>
                <p className="mt-2 text-green-600 hover:underline">
                  <a href="mailto:hr@kanakkupillai.com">
                    <AiOutlineMail className="inline mr-2" />
                    hr@kanakkupillai.com
                  </a>
                </p>
              </motion.div>

              {/* Vertical Line Separator */}
              <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 mx-4"></div>

              {/* Support Section with Animation */}
              <motion.div
                className="bg-gray-100 dark:bg-neutral-700 p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 w-full md:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-sm font-semibold text-white bg-green-500 w-auto px-4 py-2 rounded-full dark:bg-neutral-800">
                  For Support
                </span>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Need help with billing & payments? We’re here for you!
                </p>
                <h5 className="mt-4 text-lg font-semibold">
                  Escalation Matrix:
                </h5>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <AiOutlinePhone className="mr-2 text-green-600" /> Level-1:
                  +91 99622 77351
                </p>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <AiOutlinePhone className="mr-2 text-green-600" /> Level-2:
                  +91 73050 34374
                </p>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <AiOutlinePhone className="mr-2 text-green-600" /> Level-3:
                  +91 90478 77734
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Drop an email for prompt assistance!
                </p>
                <p className="mt-2 text-green-600 hover:underline">
                  <a href="mailto:escalations@kanakkupillai.com">
                    <AiOutlineMail className="inline mr-2" />
                    escalations@kanakkupillai.com
                  </a>
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Don’t let payment issues hold you back! Contact us now!
                </p>
                <p className="text-lg mt-2 font-semibold flex items-center">
                  <AiOutlinePhone className="mr-2 text-green-600" /> +91 95001
                  34261
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
