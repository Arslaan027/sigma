import React from "react";
import image from "../../assets/Image/DShero.jpg"; // Import the hero image

const DShero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }} // Set the image as a background
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">
          Discover Your Dream Solutions
        </h1>
        <p className="text-lg mb-8">
          Tailored services to meet your needs with excellence.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DShero;
