import React, { useState } from "react";
import { Link } from "react-router-dom";
import servicesData from "./servicesData"; // Import services data

const Services = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Business Formation");

  // Function to render the service options in boxes
  const renderServiceOptions = (category) => {
    const options = servicesData["BUSINESS SERVICES"][category].options;
    return options.map((option, index) => (
      <div
        key={index}
        className="bg-gray-200 border border-gray-300 rounded-md p-3 m-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 cursor-pointer transition-transform transform hover:scale-105 shadow-md flex flex-col justify-between"
      >
        <div className="flex flex-col items-center">
          {option.icon}
          <h4 className="text-left font-medium text-xs">{option.name}</h4>
        </div>
        <p className="text-xs text-gray-600 mt-1 text-center">
          {option.description}
        </p>
        <Link to={option.path}>
          <button className="mt-2 w-full bg-green-500 text-xs rounded-full text-white py-1 hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      {/* Added Heading */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="w-full md:w-1/3 border-r">
          <h3 className="text-2xl font-bold text-center p-4 border-b">
            Our <span className="text-green-500">Services</span>
          </h3>
          <ul className="flex flex-col">
            {Object.keys(servicesData["BUSINESS SERVICES"]).map(
              (category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-3 text-center cursor-pointer hover:bg-gray-200 ${
                    selectedCategory === category
                      ? "bg-gray-200 font-semibold"
                      : ""
                  }`}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <h3 className="text-lg font-bold text-center p-2">
            {selectedCategory || "Select a Category"}
          </h3>
          <div className="flex flex-wrap justify-center">
            {selectedCategory && renderServiceOptions(selectedCategory)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
