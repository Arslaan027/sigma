import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Step7 = ({ nextStep, prevStep, setDependantVisas }) => {
  const [selectedDependants, setSelectedDependants] = useState("Yes");

  const handleNext = () => {
    setDependantVisas(selectedDependants); // Use the correct function passed as a prop
    nextStep();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4 text-gray-700">
        <span className="text-lg font-bold">7</span>
        <span className="ml-2 text-lg">→</span>
        <h2 className="ml-4 text-xl font-bold">
          Will you also require visas for your dependants?
        </h2>
      </div>
      <p className="text-sm mb-4">
        Dependants include your family members, nanny, or other household staff
        you may personally employ.
      </p>
      <div className="space-y-4">
        {["Yes", "No"].map((option) => (
          <button
            key={option}
            onClick={() => setSelectedDependants(option)}
            className={`w-full flex items-center justify-between p-3 border rounded-lg ${
              selectedDependants === option
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

export default Step7;
