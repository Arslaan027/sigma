import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LLPsteps = () => {
  const steps = [
    {
      id: 1,
      title: "Obtain DSC",
      content:
        "We already know that the documents for LLP Registration are filed online & required to be digitally signed. So, before starting the LLP Registration process, you must apply for the Digital Signature Certificate (DSC) of the designated Partners of the proposed LLP. Hence, the designated Partner must obtain their DSCs from the Government-recognized certifying agencies.",
    },
    {
      id: 2,
      title: "Get DIN",
      content:
        "After obtaining DSC, you need to apply for DPIN of all the proposed Partners or those wanting to be designated Partner of LLP. The application for the allotment of DIN has to be made in Form DIR-3.",
    },
    {
      id: 3,
      title: "Application for Name Approval",
      content:
        "LLP-RUN application form is for the name reservation of the Limited Liability Partnership. But before applying for the name reservation, it is necessary to use the free name search facility on the MCA Portal. The system will provide the list of closely resembling names of existing companies/LLPs based on the search criteria. This will help you choose names not identical to already registered names. The Registrar will approve the proposed name only if it is not undesirable in the Central Government’s opinion and doesn’t resemble any existing Partnership Firm or an LLP or a body corporate or a Trademark.",
    },
    {
      id: 4,
      title: "Filing FiLLiP Form",
      content:
        "For the LLP Registration in India, you need to file a FiLLiP Form and submit it to the Registrar who has jurisdiction over the State in which the registered office of the LLP is situated. This Form is also used for allotment of DPIN if a person who is to be appointed as a designated partner doesn’t have a DPIN or DIN. The application for reservation may be made via FiLLiP too. If the name is approved, the name shall be filled as the proposed name of the Limited Liability Partnership.",
    },
    {
      id: 5,
      title: "File LLP Agreement",
      content:
        "This Agreement governs the mutual rights & duties amongst the Partners and also between the LLP and its Partners. LLP Agreement must be filed in Form-3 online, and it must be filed within 30 days of the Incorporation. This Agreement has to be printed on stamp paper, with the value of Stamp Paper varying for each state.",
    },
    {
      id: 6,
      title: "Apply for PAN, TAN, and a Bank Account",
      content:
        "Once you get the Certificate of Incorporation, we will apply for the PAN, TAN, and Bank Account for your Limited Liability Partnership.",
    },
  ];

  const stateOptions = [
    "Maharashtra",
    "Jharkhand",
    "Kashmir",
    "Puducherry",
    "Karnataka",
    "Madhya Pradesh",
    "Andhra Pradesh",
    "Himachal Pradesh",
    "Tamil Nadu",
    "Odisha",
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleGetHelp = () => {
    alert(
      "For assistance, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        <span className="text-green-500">Limited Liability Partnership</span>{" "}
        Registration Steps
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
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col items-center mb-4">
        <select
          value={selectedState}
          onChange={handleStateChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-neutral-700"
        >
          <option value="">-- Select State --</option>
          {stateOptions.map((state, index) => (
            <option key={index} value={state}>
              {`Registration for ${state}`}
            </option>
          ))}
        </select>
        {/* {selectedState && (
          <p className="mt-4 text-center text-gray-600">
            You have selected: {selectedState}
          </p>
        )} */}
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

export default LLPsteps;
