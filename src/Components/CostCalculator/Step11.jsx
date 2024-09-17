import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step11 = ({ prevStep, submitForm, setAnnualTurnover }) => {
  const [selectedOption, setSelectedOption] = useState("AED 20,000 - 100,000");

  const handleSubmit = () => {
    setAnnualTurnover(selectedOption);
    submitForm();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">11</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          What is your annual turnover?
        </h2>
      </div>
      <div className="space-y-4">
        {[
          "AED 20,000 - 100,000",
          "AED 100,000 - 250,000",
          "AED 250,000 - 500,000",
          "AED 500,000 - 1,000,000",
          "AED 1,000,000 - 5,000,000",
          "AED 5,000,000+",
        ].map((option) => (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedOption === option
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
          onClick={handleSubmit}
          className="py-3 bg-green-500 text-white font-bold rounded-lg px-6"
        >
          <FaArrowRight /> Submitted
        </button>
      </div>
    </div>
  );
};

export default Step11;
