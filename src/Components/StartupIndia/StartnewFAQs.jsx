import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const StartnewFAQs = () => {
  const taxBenefits = [
    "Income tax exemption for three consecutive financial years within the first 10 years of incorporation.",
    "Capital gains tax exemption under Section 54EE if the gains are invested in a fund notified by the government.",
    "Exemption from tax on investments received above fair market value.",
  ];

  const ipBenefits = [
    "Faster processing of patent applications for quicker approvals.",
    "80% rebate on patent filing fees.",
    "50% rebate on trademark registration fees.",
  ];

  const roleOfHub = [
    "Receive mentoring and guidance from industry leaders.",
    "Access government schemes and programs.",
    "Network with other startups and entrepreneurs.",
    "Get insights into best practices for running and scaling a startup.",
  ];

  const governmentSchemes = [
    "Startup India Seed Fund Scheme (SISFS): Provides financial support for proof of concept, product trials, and commercialization.",
    "Stand-Up India: Provides loans to women entrepreneurs and SC/ST-owned businesses.",
    "Credit Guarantee Fund: Aims to provide startups with collateral-free loans from banks.",
  ];

  const commonRejections = [
    "Incomplete or inaccurate documentation.",
    "Lack of innovation or proof of concept.",
    "Non-compliance with eligibility criteria, such as turnover limits or age of the business.",
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Tax Benefits Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tax Benefits for Startups Under{" "}
          <span className="text-green-500">Startup India</span>
        </motion.h3>
      </div>

      {/* Tax Benefits List */}
      <ul className="list-disc pl-8 mb-12">
        {taxBenefits.map((benefit, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Intellectual Property Benefits Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Intellectual Property Benefits Under{" "}
          <span className="text-green-500">Startup India</span>
        </motion.h3>
      </div>

      {/* IP Benefits List */}
      <ul className="list-disc pl-8 mb-12">
        {ipBenefits.map((benefit, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Role of Startup India Hub Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Role of the <span className="text-green-500">Startup India Hub</span>
        </motion.h3>
      </div>

      {/* Role of Hub List */}
      <ul className="list-disc pl-8 mb-12">
        {roleOfHub.map((role, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {role}
          </li>
        ))}
      </ul>

      {/* Government Schemes Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Government Schemes Available to{" "}
          <span className="text-green-500">Startups</span>
        </motion.h3>
      </div>

      {/* Government Schemes List */}
      <ul className="list-disc pl-8 mb-12">
        {governmentSchemes.map((scheme, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {scheme}
          </li>
        ))}
      </ul>

      {/* Common Reasons for Rejection Header */}
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Common Reasons for{" "}
          <span className="text-green-500">
            Startup India Application Rejection
          </span>
        </motion.h3>
      </div>

      {/* Common Rejections List */}
      <ul className="list-disc pl-8 mb-12">
        {commonRejections.map((reason, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {reason}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          Sigma Solutions ensures that your application is complete, accurate,
          and meets all the criteria to avoid rejection.
        </p>
      </div>
    </div>
  );
};

export default StartnewFAQs;
