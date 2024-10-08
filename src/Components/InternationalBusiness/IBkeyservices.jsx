import React from "react";
import { motion } from "framer-motion";

const IBKeyServices = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 my-20 bg-white rounded-md dark:bg-black">
      {/* Animated heading */}
      <motion.h1
        className="text-3xl font-bold mb-6 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Services in{" "}
        <span className="text-green-500">International Business </span>Setup
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
            1. Business Formation and Registration
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Sigma Solutions assists with setting up various types of companies
            abroad, including Limited Liability Companies (LLCs), public and
            private limited companies, and foreign branches. They ensure
            compliance with local laws and regulations, offering business
            registration services that streamline the process.
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
            2. Legal Compliance and Licensing
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Navigating the complex legal landscapes of foreign countries can be
            daunting. Sigma Solutions handles all legal formalities and
            licensing requirements, including commercial licenses, trade
            licenses, and industry-specific certifications to ensure your
            business operates without legal hindrances.
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
            3. Taxation and Financial Structuring
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            With deep knowledge of international tax systems, Sigma Solutions
            helps clients optimize their tax obligations and develop sound
            financial structures. Their experts ensure businesses remain
            compliant with tax regulations in their operating countries,
            mitigating risks and maximizing efficiency.
          </p>
        </motion.li>

        {/* List Item 4 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            4. Banking and Financial Services
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Sigma Solutions facilitates the setup of corporate bank accounts and
            assists in securing international funding for businesses. They guide
            clients through selecting the right financial institutions and
            obtaining the necessary capital for business operations abroad.
          </p>
        </motion.li>

        {/* List Item 5 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            5. Intellectual Property Protection
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Protecting intellectual property (IP) is crucial in global markets.
            Sigma Solutions provides comprehensive IP registration services,
            including trademark, copyright, and patent applications, ensuring
            your innovations and brand are safeguarded in international
            jurisdictions.
          </p>
        </motion.li>

        {/* List Item 6 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            6. Human Resources and Employment Laws
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Managing international staff requires knowledge of local employment
            laws. Sigma Solutions offers HR solutions, including employment
            contracts, payroll services, and compliance with local labor laws,
            ensuring your international workforce is legally and efficiently
            managed.
          </p>
        </motion.li>

        {/* List Item 7 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            7. Consultation on Business Expansion
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            With years of experience, Sigma Solutions offers strategic
            consultation for companies seeking global expansion. From market
            research and feasibility studies to risk assessment and entry
            strategies, their expert advice helps businesses thrive in new
            markets.
          </p>
        </motion.li>

        {/* List Item 8 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            8. Customs and Trade Support
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            For businesses involved in international trade, Sigma Solutions
            provides support with customs procedures, import-export regulations,
            and trade compliance. They help streamline the logistics of moving
            goods across borders, ensuring smooth operations.
          </p>
        </motion.li>

        {/* List Item 9 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            9. Corporate Governance and Reporting
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Maintaining compliance with corporate governance regulations in
            foreign markets is crucial. Sigma Solutions ensures your business
            follows the necessary reporting and governance requirements, helping
            to build a solid reputation and trust with stakeholders.
          </p>
        </motion.li>

        {/* List Item 10 */}
        <motion.li
          className="border-l-4 border-green-500 pl-4"
          whileHover={{ scale: 1.05, x: 10 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <h2 className="text-xl font-semibold text-green-500 transition-colors duration-300 ease-in-out">
            10. Exit Strategies and Business Liquidation
          </h2>
          <p className="text-gray-400 transition-opacity duration-500 opacity-100 hover:opacity-75">
            Sigma Solutions provides strategic advice for companies considering
            exit strategies or liquidation. They help clients navigate the
            complex legal and financial processes, ensuring a smooth transition
            and maximizing asset recovery.
          </p>
        </motion.li>
      </ul>
    </div>
  );
};

export default IBKeyServices;
