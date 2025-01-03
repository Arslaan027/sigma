import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const OPCsteps = () => {
  const steps = [
    {
      id: 1,
      title: "Eternal Succession",
      content:
        "Despite the company’s everyday operations being managed by a single person, OPC offers opportunities for eternal succession. Following the death of a company member, the nominee can administer the business.",
    },
    {
      id: 2,
      title: "Limited Liability",
      content:
        "A one-person company member has limited liability. As a registered corporation, it is treated as a separate legal entity, providing its members with greater protection. Members’ liability is restricted to their shares, so they are not accountable for losses incurred by the firm.",
    },
    {
      id: 3,
      title: "Single Member Management",
      content:
        "In a One Person Company, a single member serves as a director and manages the company’s daily operations. There is no need for an executive director, as one member suffices and serves as a shareholder with full responsibility.",
    },
    {
      id: 4,
      title: "Ownership of Assets",
      content:
        "Because the OPC is a separate legal organization, the individual can possess company property and other assets in their name. The OPC has the legal authority to acquire land directly in its name.",
    },
    {
      id: 5,
      title: "Certificate of Incorporation",
      content:
        "The ROC issues a certificate of incorporation along with a PAN and TAN.",
    },
    {
      id: 6,
      title: "Open a Bank Account",
      content:
        "Once incorporated, open a bank account and get your business started.",
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
        <span className="text-green-500">One Person Company</span> Registration
        Steps
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {`Step ${activeStep.id}: ${activeStep.title}`}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
          Get Support
        </button>
      </div>
    </>
  );
};

export default OPCsteps;
