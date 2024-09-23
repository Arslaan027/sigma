import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        Our mission at Sigma Solutions is to provide comprehensive, high-quality
        services that meet the diverse needs of our clients. We are dedicated
        to:
      </p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Empowering Entrepreneurs: Offering expert guidance in business
          formation, certifications, and operational excellence.
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Promoting Local Excellence: Supporting local businesses and artisans
          through the 'Vocal for Local' initiative.
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Delivering Quality Services: From engineering to digital marketing and
          hospitality, we exceed client expectations.
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Driving Sustainable Development: Prioritizing eco-friendly practices
          for a sustainable future.
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Building Lasting Relationships: Fostering strong partnerships with
          clients, stakeholders, and communities.
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          Innovation and Excellence: Committed to continuous improvement,
          leveraging the latest technologies.
        </li>
      </ul>
    </div>
  );
};

export default Mission;
