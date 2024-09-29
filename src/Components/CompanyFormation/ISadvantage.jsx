import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ISadvantage = () => {
  const advantages = [
    {
      id: 1,
      title: "Entry into the Indian Market",
      content:
        "India’s competitive business landscape offers a multitude of investment opportunities that attract foreign entrepreneurs to establish their subsidiary companies in the country.",
    },
    {
      id: 2,
      title: "Foreign Direct Investment (FDI) in India",
      content:
        "FDI involves investments by foreign companies in Indian enterprises through share subscriptions or acquisitions. Registering an Indian subsidiary makes FDI easier and more appealing.",
    },
    {
      id: 3,
      title: "Perpetual Succession",
      content:
        "Perpetual succession ensures that the company’s existence remains unaffected by changes such as management turnover, membership transfer, or insolvency, ensuring continuous operation.",
    },
    {
      id: 4,
      title: "Limited Liability",
      content:
        "Limited liability protects shareholders and directors by separating their personal assets from the company’s debts. The company itself is liable to third parties.",
    },
    {
      id: 5,
      title: "Scope of Diversification",
      content:
        "Indian subsidiary companies provide foreign businesses a strategic way to expand their operations, fostering competition and helping the Indian economy grow.",
    },
  ];

  const [activeAdvantage, setActiveAdvantage] = useState(advantages[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance with Indian Subsidiary Registration, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        <span className="text-green-500">Indian Subsidiary</span> Registration
        Advantages
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
                <FaRegArrowAltCircleRight />
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

export default ISadvantage;
