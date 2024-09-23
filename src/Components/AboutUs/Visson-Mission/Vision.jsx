import React from "react";
import { FaBullseye } from "react-icons/fa";

const Vision = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Our Vision</h2>
      <p className="text-gray-700 mb-6">
        At Sigma Solutions, our vision is to be a leading force in fostering
        sustainable growth and innovation in Arunachal Pradesh and beyond. We
        aspire to create a thriving ecosystem that empowers entrepreneurs,
        enhances local communities, and elevates the standards of business
        services and infrastructure development. By championing local talent and
        resources, we aim to transform challenges into opportunities, ultimately
        contributing to the prosperity of our state and its people.
      </p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaBullseye className="text-green-500 mr-2" />
          Leadership in innovation
        </li>
        <li className="flex items-center">
          <FaBullseye className="text-green-500 mr-2" />
          Sustainable growth
        </li>
        <li className="flex items-center">
          <FaBullseye className="text-green-500 mr-2" />
          Empowering businesses worldwide
        </li>
      </ul>
    </div>
  );
};

export default Vision;
