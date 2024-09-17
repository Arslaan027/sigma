import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step4 = ({ nextStep, prevStep, setOwnership }) => {
  const [selectedOwnership, setSelectedOwnership] = useState(
    "Sole Proprietorship"
  );

  const handleNext = () => {
    setOwnership(selectedOwnership);
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">4</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          What type of company ownership are you planning?
        </h2>
      </div>
      <div className="space-y-4">
        {[
          "Sole Proprietorship",
          "Partnership",
          "LLC",
          "Public Shareholding",
        ].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedOwnership(type)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedOwnership === type
                ? "border-green-500 bg-gray-100"
                : "border-gray-300"
            }`}
          >
            <span>{type}</span>
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

export default Step4;
