import React from "react";
import IEC from "../../assets/Image/IEC.jpg"; // Importing the background image

const IEChero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center p-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IEC})`,
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-4">
        Import Export Code
      </h1>
      <p className="relative z-10 text-md text-gray-300 mb-6">
        Get your Import Export Code and expand your business globally.
      </p>
      <button className="relative z-10 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-400 transition duration-300">
        Start Your Application
      </button>
    </div>
  );
};

export default IEChero;
