import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PFpic from "../../assets/Image/PFpic.jpg";

const PFadvantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Easy to Incorporate",
      content:
        "Forming a partnership firm is straightforward with just a partnership deed and agreement. Registration is optional.",
    },
    {
      id: 2,
      title: "Less Compliance",
      content:
        "Partnerships face fewer regulations, avoiding the need for DSC or DIN, making them easier to manage.",
    },
    {
      id: 3,
      title: "Quick Decision",
      content:
        "Decision-making is efficient as partners collaborate without a hierarchy, leading to faster implementations.",
    },
    {
      id: 4,
      title: "Sharing of Profits and Losses",
      content:
        "Profits and losses are shared according to the partnership deed, promoting accountability.",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:bg-neutral-900 dark:text-gray-300">
        Advantages of{" "}
        <span className="text-green-500"> Partnership Firm Registration</span>
      </h1>
      <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-neutral-800 shadow-lg rounded-lg flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between">
          <ul className="list-disc list-inside space-y-2">
            {advantages.map((advantage) => (
              <li key={advantage.id} className="flex items-start">
                <FaCheckCircle className="text-green-500 text-lg mr-2" />
                <div>
                  <h2 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                    {advantage.title}
                  </h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
                    {advantage.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
          <img
            src={PFpic}
            alt="Partnership"
            className="w-96 h-56 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PFadvantages;
