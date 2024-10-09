import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ISObenefits = () => {
  const steps = [
    {
      id: 1,
      title: "Improved Efficiency",
      content:
        "ISO certification streamlines processes, reduces errors, and boosts productivity, allowing businesses to operate more efficiently.",
    },
    {
      id: 2,
      title: "Customer Satisfaction",
      content:
        "With ISO certification, businesses deliver consistent quality, which helps enhance customer loyalty and satisfaction.",
    },
    {
      id: 3,
      title: "International Recognition",
      content:
        "ISO certification improves credibility and opens doors to global markets, providing international recognition and competitive advantage.",
    },
    {
      id: 4,
      title: "Reduced Risks",
      content:
        "Adhering to ISO standards minimizes operational risks and ensures regulatory compliance, reducing the likelihood of costly mistakes.",
    },
    {
      id: 5,
      title: "Employee Engagement",
      content:
        "ISO standards promote a safer and more organized work environment, which helps improve employee morale and engagement.",
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance with ISO certification, contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        <span className="text-green-500">ISO Certification</span> Benefits
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center mx-auto mt-6">
        <div className="w-auto lg:w-1/3 space-y-2 mb-3 lg:mb-0">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`cursor-pointer p-2 rounded-lg shadow-md flex items-center justify-between ${
                activeStep.id === step.id
                  ? "bg-green-500 text-white dark:text-neutral-900"
                  : "bg-gray-300 dark:bg-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>
                {`0${step.id}`} {step.title}
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
            {`Benefit ${activeStep.id}: ${activeStep.title}`}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeStep.content}
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

export default ISObenefits;
