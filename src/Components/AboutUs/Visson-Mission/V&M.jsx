import React from "react";
import Vision from "./Vision";
import Mission from "./Mission";
import { useNavigate } from "react-router-dom";
import CoreValue from "./CoreValue";

const VM = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center bg-white px-5">
      <div className="flex flex-col gap-10 my-10">
        <Vision />
        <Mission />
        <CoreValue />
      </div>
      <button
        onClick={handleBack}
        className="mt-6 px-6 py-2 bg-green-600 flex justify-center items-center text-white rounded-full text-lg hover:bg-green-700 transition transform hover:scale-105 mb-5"
        aria-label="Go back to the previous page"
      >
        Back
      </button>
    </div>
  );
};

export default VM;
