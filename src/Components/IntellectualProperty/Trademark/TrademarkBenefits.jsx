import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const TrademarkBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Exclusive Rights",
      content:
        "The owner has exclusive rights to use the trademark in relation to the products or services it is registered for, providing brand control and legal advantages.",
    },
    {
      id: 2,
      title: "Legal Protection",
      content:
        "Trademark registration offers legal protection against infringement, ensuring that others cannot use a similar mark for the same goods or services.",
    },
    {
      id: 3,
      title: "Brand Recognition",
      content:
        "Trademarks help build brand identity and loyalty, distinguishing a business from its competitors in the market, leading to better customer trust.",
    },
    {
      id: 4,
      title: "Asset Value",
      content:
        "A registered trademark is an intangible asset that holds value and can be sold, licensed, or franchised for financial gain.",
    },
    {
      id: 5,
      title: "Global Protection",
      content:
        "Trademarks can be registered internationally, allowing businesses to protect their brand across multiple countries and markets.",
    },
  ];

  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        <span className="text-green-500">Trademark</span> Benefits
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center mx-auto mt-6">
        <div className="w-auto lg:w-1/3 space-y-2 mb-3 lg:mb-0">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              onClick={() => setActiveBenefit(benefit)}
              className={`cursor-pointer p-2 rounded-lg shadow-md flex items-center justify-between ${
                activeBenefit.id === benefit.id
                  ? "bg-green-500 text-white dark:text-neutral-900"
                  : "bg-gray-300 dark:bg-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>
                {`0${benefit.id}`} {benefit.title}
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
            {`Benefit ${activeBenefit.id}: ${activeBenefit.title}`}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeBenefit.content}
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

export default TrademarkBenefits;
