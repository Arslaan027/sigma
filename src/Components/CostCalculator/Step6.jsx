import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step6 = ({ nextStep, prevStep, setVisaRequirement }) => {
  const [selectedVisa, setSelectedVisa] = useState("1 Visa");

  const handleNext = () => {
    setVisaRequirement(selectedVisa); // Use the selected visa value
    nextStep();
  };

  return (
    <div className="h-screen">
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
        <div className="flex items-center mb-4 text-gray-700">
          <span className="text-lg font-bold">6</span>
          <span className="ml-2 text-lg">→</span>
          <h2 className="ml-4 text-xl font-bold">
            How many visas do you need for your company?
          </h2>
        </div>
        <div className="space-y-4">
          {["1 Visa", "2-5 Visas", "6+ Visas"].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedVisa(option)}
              className={`w-full flex items-center justify-between p-3 border rounded-lg ${
                selectedVisa === option
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
    </div>
  );
};

export default Step6;
