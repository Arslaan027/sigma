import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step3 = ({ nextStep, prevStep, setReason }) => {
  const [selectedReason, setSelectedReason] = useState("New company formation");

  const handleNext = () => {
    setReason(selectedReason);
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg h-screen">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">3</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          What is your main reason for setting up a company in the UAE?
        </h2>
      </div>
      <div className="space-y-4">
        {[
          "New company formation",
          "Expansion plan",
          "Company relocation",
          "Visa purposes only",
        ].map((reason) => (
          <button
            key={reason}
            onClick={() => setSelectedReason(reason)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedReason === reason
                ? "border-green-500 bg-gray-100"
                : "border-gray-300"
            }`}
          >
            <span>{reason}</span>
            <span className="font-bold">
              {reason === "New company formation"
                ? "A"
                : reason === "Expansion plan"
                ? "B"
                : reason === "Company relocation"
                ? "C"
                : "D"}
            </span>
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

export default Step3;
