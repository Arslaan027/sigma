import { FaArrowRight } from "react-icons/fa6";

const Step2 = ({ nextStep, prevStep, setActivity }) => {
  const activities = [
    "Agriculture",
    "Apparel",
    "Banking",
    "Biotechnology",
    "Business Accelerator",
    "Chemicals",
    // Add the rest of the activities here
    "Web3/Crypto",
  ];

  const handleNext = () => {
    const selectedActivity = document.getElementById("activity").value;
    setActivity(selectedActivity);
    nextStep();
  };

  return (
    <div className="h-screen">
      <div className="w-full mt-20 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4 text-gray-700">
          <span className="text-lg font-bold">2</span>
          <span className="ml-2 text-lg">→</span>
          <h2 className="ml-4 text-xl font-bold">
            Choose your business activity
          </h2>
        </div>
        <p className="text-gray-500 mb-6">
          Choose the business activity that you would like to carry out in the
          UAE. This will help identify the location and licence that suit your
          company, as well as estimate setup costs.
        </p>
        <div className="space-y-4">
          <select
            id="activity"
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            {activities.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
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

export default Step2;
