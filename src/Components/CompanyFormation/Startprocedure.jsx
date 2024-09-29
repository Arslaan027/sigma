import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Startprocedure = () => {
  const steps = [
    {
      id: 1,
      title: "Incorporate Your Company",
      content:
        "You have to incorporate your company in India as a Private Limited Company, Partnership, or LLP. Follow the normal procedure for registration.",
    },
    {
      id: 2,
      title: "Register under Startup India Scheme",
      content:
        "Fill in the necessary details in the registration form available on the Startup India website and upload required documents.",
    },
    {
      id: 3,
      title: "Upload Documents",
      content:
        "You need to upload a Registration Form along with a recommendation letter from a PG college, incubator, or a registered fund, and provide your Certificate of Incorporation.",
    },
    {
      id: 4,
      title: "Tax Exemption",
      content:
        "After recognition, you can apply for tax exemption under Section 80 IAC of the Income Tax Act, allowing a tax holiday for 3 consecutive financial years.",
    },
    {
      id: 5,
      title: "Get Your Recognition Number",
      content:
        "After reviewing your uploaded documents, you'll receive a Recognition Number. Register your company under the Startup India Scheme to avail benefits.",
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        Step-by-Step Procedure for{" "}
        <span className="text-green-500">Startup India</span> Registration
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-start justify-center mx-auto mt-6">
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
            {`Step ${activeStep.id}: ${activeStep.title}`}
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

export default Startprocedure;
