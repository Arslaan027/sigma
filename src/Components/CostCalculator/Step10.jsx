import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step10 = ({ nextStep, prevStep, setJurisdiction }) => {
  const [selectedJurisdiction, setSelectedJurisdiction] =
    useState("Free Zones");

  const handleNext = () => {
    setJurisdiction(selectedJurisdiction);
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg h-screen">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">10</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          Choose your preferred jurisdiction
        </h2>
      </div>
      <p className="text-sm mb-4">
        This will have the biggest impact on your final proposal, based on your
        choice of activity and whether you need to be based in the mainland or
        not.
      </p>
      <div className="space-y-4">
        {["Free Zones", "Mainland"].map((option) => (
          <button
            key={option}
            onClick={() => setSelectedJurisdiction(option)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedJurisdiction === option
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
          className="py-3 bg-green-500 text-white font-bold rounded-lg px-6 flex gap-2 justify-center items-center"
        >
          <FaArrowRight />
          OK
        </button>
      </div>
    </div>
  );
};

export default Step10;
