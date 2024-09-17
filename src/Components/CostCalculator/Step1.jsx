import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step1 = ({ nextStep, setCategory }) => {
  const [selectedOption, setSelectedOption] = useState("Professional services");

  const handleNext = () => {
    setCategory(selectedOption);
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg h-screen">
      <div className="flex items-center mb-4 text-gray-700 ">
        <span className="text-lg font-bold">1</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          Choose your business category to start your business setup cost
          estimate
        </h2>
      </div>
      <p className="text-gray-500 mb-6">
        Your business category will help determine which jurisdiction, trade
        licence, and business activity will apply to your company.
      </p>
      <div className="space-y-4">
        {["Professional services", "Trading", "Manufacturing"].map((option) => (
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
            <span className="font-bold">
              {option === "Professional services"
                ? "A"
                : option === "Trading"
                ? "B"
                : "C"}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={handleNext}
          className="w-full flex justify-center items-center gap-1 py-3 bg-green-500 text-white font-bold rounded-lg"
        >
          <FaArrowRight /> OK
        </button>
      </div>
    </div>
  );
};

export default Step1;
