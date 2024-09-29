import React from "react";
import { motion } from "framer-motion";
import pic from "../../assets/Image/pctype.png"; // Import your image

const PCtype = () => {
  const producerTypes = [
    {
      title: "Agricultural Producer Company",
      description:
        "Set up by agriculturalists, farmers, or producers involved in crop cultivation, poultry, or dairy farming. The primary objective is to increase income and improve agricultural practices.",
    },
    {
      title: "Sericulture Producer Company",
      description:
        "Established by individuals involved in silk production, such as silk reelers, weavers, or farmers. The goal is to enhance the quality of silk, increase availability, and provide better marketing opportunities.",
    },
    {
      title: "Horticultural Producer Company",
      description:
        "Created by individuals engaged in horticulture, including flowers, plants, fruits, and vegetables. The focus is on improving product quality.",
    },
    {
      title: "Handloom Producer Company",
      description:
        "Set up by individuals involved in handloom weaving and fabric production. The aim is to enhance the quality of their products.",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-5xl w-full p-4">
        <h1 className="text-3xl text-center font-bold mb-4 mt-10">
          Different Types of{" "}
          <span className="text-green-500">Producer Companies in India</span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
            <img
              src={pic}
              alt="Producer Company Types"
              className="h-auto max-w-sm max-h-[300px] rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/3 p-4">
            <div className="space-y-4">
              {producerTypes.map((type, index) => (
                <div key={index}>
                  <strong>{type.title}:</strong> {type.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCtype;
