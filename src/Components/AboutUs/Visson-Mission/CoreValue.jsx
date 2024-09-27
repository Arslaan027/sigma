import React from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaHandsHelping,
  FaLeaf,
  FaHeart,
  FaUserCheck,
} from "react-icons/fa"; // Import icons

const CoreValue = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty and transparency. Our clients and partners can trust us to uphold the highest ethical standards in all our interactions.",
      icon: <FaShieldAlt className="text-green-500 mr-2" />, // Integrity icon
    },
    {
      title: "Community Focus",
      description:
        "We are deeply committed to the betterment of our local community. By embracing the 'Vocal for Local' initiative, we prioritize supporting local businesses and resources to foster sustainable growth.",
      icon: <FaUsers className="text-green-500 mr-2" />, // Community Focus icon
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do. Our commitment to quality ensures that we deliver exceptional services that meet and exceed client expectations.",
      icon: <FaStar className="text-green-500 mr-2" />, // Excellence icon
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking. By leveraging the latest technologies and methodologies, we continuously seek innovative solutions to meet the evolving needs of our clients.",
      icon: <FaLightbulb className="text-green-500 mr-2" />, // Innovation icon
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork. By fostering a collaborative environment, we bring together diverse perspectives and expertise, driving collective success.",
      icon: <FaHandsHelping className="text-green-500 mr-2" />, // Collaboration icon
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to promoting environmentally friendly practices. Our approach integrates sustainability into our operations, ensuring a positive impact on our planet and future generations.",
      icon: <FaLeaf className="text-green-500 mr-2" />, // Sustainability icon
    },
    {
      title: "Respect",
      description:
        "We treat everyone with respect and dignity. Valuing diverse perspectives and experiences enriches our workplace and enhances our service delivery.",
      icon: <FaHeart className="text-green-500 mr-2" />, // Respect icon
    },
    {
      title: "Customer-Centricity",
      description:
        "Our clients are at the heart of what we do. We listen to their needs, provide tailored solutions, and build lasting relationships based on mutual trust and satisfaction.",
      icon: <FaUserCheck className="text-green-500 mr-2" />, // Customer-Centricity icon
    },
  ];

  //HELO

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl">
      <h2 className="text-3xl font-bold text-green-500 mb-4">
        Our Core Values
      </h2>
      <ul className="space-y-4">
        {values.map((value, index) => (
          <li
            key={index}
            className="border-b border-gray-200 pb-4 flex items-center transition-transform transform hover:scale-105 hover:bg-gray-100"
          >
            <div className="text-2xl transition-transform transform hover:scale-125">
              {value.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-700 mt-2">{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValue;
