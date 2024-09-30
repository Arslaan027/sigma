import React from "react";
import ISO from "../../assets/Image/ISO.jpg"; // Importing the background image

const ISOhero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center p-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ISO})`,
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-4">
        ISO Certification Made Simple
      </h1>
      <p className="relative z-10 text-md text-gray-300 mb-6">
        Get ISO certified and build trust with international standards.
      </p>
      <button className="relative z-10 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-400 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default ISOhero;
