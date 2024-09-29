import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const PCadvantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Separate Legal Entity",
      content:
        "It’s a separate legal entity which means it can acquire assets & incur debts in its own name and the Directors of the Company have no obligation to the lender of the Company.",
    },
    {
      id: 2,
      title: "100% Income Tax Exemption",
      content:
        "In India, the Producer Company is exempted from paying Income Tax.",
    },
    {
      id: 3,
      title: "Loan Facility to Members",
      content:
        "Producer Company can extend the financial & credit facility to its members.",
    },
    {
      id: 4,
      title: "More Credibility",
      content:
        "This is offered to the registered companies as compared to the non-registered ones.",
    },
    {
      id: 5,
      title: "Ease in Management",
      content:
        "The applicant can make desired alterations in the Board of Management by filing some simple form with regards to the ROC.",
    },
  ];

  const [activeAdvantage, setActiveAdvantage] = useState(advantages[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        <span className="text-green-500">Producer Company</span> Advantages
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-start justify-center mx-auto mt-6">
        <div className="w-auto lg:w-1/3 space-y-2 mb-3 lg:mb-0">
          {advantages.map((advantage) => (
            <motion.div
              key={advantage.id}
              onClick={() => setActiveAdvantage(advantage)}
              className={`cursor-pointer p-2 rounded-lg shadow-md flex items-center justify-between ${
                activeAdvantage.id === advantage.id
                  ? "bg-green-500 text-white dark:text-neutral-900"
                  : "bg-gray-300 dark:bg-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>
                {`0${advantage.id}`} {advantage.title}
              </span>
              <span className="text-gray-500">
                {<FaRegArrowAltCircleRight />}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 p-4">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {`Advantage ${activeAdvantage.id}: ${activeAdvantage.title}`}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeAdvantage.content}
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10">
        <button
          onClick={handleGetHelp}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Get Help
        </button>
      </div>
    </>
  );
};

export default PCadvantages;
