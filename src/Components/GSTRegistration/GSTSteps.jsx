import React from "react";
import GST from "../../assets/Image/GSTsteps.png";

const GSTSteps = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Steps for GST Registration
      </h3>
      <div className="flex justify-center">
        <img src={GST} alt="GST Registration Steps" className="rounded-md " />
      </div>
      <p className="text-gray-600 text-center mt-4">
        Follow these steps to complete your GST registration efficiently.
      </p>
    </div>
  );
};

export default GSTSteps;
