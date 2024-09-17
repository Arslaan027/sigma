import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step9 = ({ nextStep, prevStep, setBusinessStartDate }) => {
  const [selectedStartDate, setSelectedStartDate] = useState("This Month");

  const handleNext = () => {
    setBusinessStartDate(selectedStartDate);
    nextStep();
  };

  return (
    <div className="h-screen">
      <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
        <div className="flex items-center mb-4 text-gray-700">
          <span className="text-lg font-bold">9</span>
          <span className="ml-2 text-lg">→</span>
          <h2 className="ml-4 text-xl font-bold">
            When do you plan to start your business?
          </h2>
        </div>
        <div className="space-y-4">
          {["This Month", "Next Month", "3 Months", "6 Months"].map(
            (option) => (
              <button
                key={option}
                onClick={() => setSelectedStartDate(option)}
                className={`w-full flex items-center justify-between p-3 border rounded-lg ${
                  selectedStartDate === option
                    ? "border-green-500 bg-gray-100"
                    : "border-gray-300"
                }`}
              >
                <span>{option}</span>
              </button>
            )
          )}
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

export default Step9;
