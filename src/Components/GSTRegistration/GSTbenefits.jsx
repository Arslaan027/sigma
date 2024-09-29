import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const GSTbenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Stronger Legal Entity",
      content:
        "GST registration provides you with a valid legal entity, enabling you to demonstrate valid proof to other firms or individuals.",
    },
    {
      id: 2,
      title: "Input Tax Credit",
      content:
        "Holders of GST registration can avail of input tax credit during the purchase of goods or services, essential for B2B businesses.",
    },
    {
      id: 3,
      title: "Nationwide Sales",
      content:
        "GST registration allows you to sell your products or services anywhere in India without restrictions like VAT/CST.",
    },
    {
      id: 4,
      title: "Business Bank Account",
      content:
        "GSTIN holders can easily open a current bank account based on their GST registration certificate.",
    },
    {
      id: 5,
      title: "E-commerce Sales",
      content:
        "With GSTIN registration, you can sell on e-commerce platforms like Amazon and Flipkart.",
    },
  ];

  const [activeBenefit, setActiveBenefit] = useState(benefits[0]);

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        Benefits of <span className="text-green-500">GST Registration</span>
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center mx-auto mt-6">
        <div className="w-auto lg:w-1/3 space-y-2 mb-3 lg:mb-0">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              onClick={() => setActiveBenefit(benefit)}
              className={`cursor-pointer p-2 rounded-lg shadow-md flex items-center justify-between ${
                activeBenefit.id === benefit.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
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
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeBenefit.content}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default GSTbenefits;
