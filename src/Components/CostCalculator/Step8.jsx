import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step8 = ({ nextStep, prevStep, setOfficeSpaceType }) => {
  const [selectedOfficeSpace, setSelectedOfficeSpace] =
    useState("Virtual Office");

  const handleNext = () => {
    setOfficeSpaceType(selectedOfficeSpace);
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">8</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          What type of office space do you need?
        </h2>
      </div>
      <p className="text-sm mb-4">
        Depending on the nature of your business, will you need a flexi-desk, a
        co-working space, or an entire office space?
      </p>
      <div className="space-y-4">
        {[
          "Virtual Office",
          "Physical Office",
          "Shop Front",
          "Business Centre",
          "Warehouse",
        ].map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOfficeSpace(option)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedOfficeSpace === option
                ? "border-green-500 bg-gray-100"
                : "border-gray-300"
            }`}
          >
            <span>{option}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          className="py-3 bg-gray-300 text-white font-bold rounded-lg px-6"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="py-3 bg-green-500 text-white font-bold rounded-lg px-6"
        >
          <FaArrowRight /> OK
        </button>
      </div>
    </div>
  );
};

export default Step8;
