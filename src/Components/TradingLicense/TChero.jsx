import React from "react";
import image from "../../assets/Image/tradinghero.jpg"; // Import the hero image

const TChero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }} // Set the image as a background
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full text-white">
        <h1 className="md:text-5xl text-3xl text-center font-bold mb-4">
          Unlock Your Trading Potential
        </h1>
        <p className="text-lg mb-8 text-center">
          Join us for insights, strategies, and tools for successful trading.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default TChero;
