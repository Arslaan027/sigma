import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const WhySS = () => {
  const reasons = [
    {
      id: 1,
      title: "Expertise Across Industries",
      content:
        "Sigma Solutions has experience working with various sectors, including technology, hospitality, automotive, healthcare, and more. This enables them to understand the unique requirements of each industry and design stands that cater to specific business needs.",
    },
    {
      id: 2,
      title: "Global Presence and Local Expertise",
      content:
        "With operations in India and abroad, Sigma Solutions is well-positioned to offer global exhibition services while providing local insights into market trends and cultural preferences.",
    },
    {
      id: 3,
      title: "Attention to Detail",
      content:
        "Every aspect of the stand, from layout and lighting to furniture and graphic placement, is meticulously planned and executed to create an inviting and professional space.",
    },
    {
      id: 4,
      title: "Cost-Effective Solutions",
      content:
        "Sigma Solutions offers a range of stand options, from basic to high-end custom stands, ensuring that businesses of all sizes can find a solution that fits their budget without compromising on quality.",
    },
    {
      id: 5,
      title: "Sustainability Focus",
      content:
        "The company is committed to sustainability and offers eco-friendly stand options that use recyclable materials and energy-efficient lighting, helping businesses reduce their carbon footprint.",
    },
    {
      id: 6,
      title: "On-Time Delivery and Setup",
      content:
        "Sigma Solutions prides itself on timely delivery and efficient setup, ensuring that your stand is ready well before the event begins.",
    },
  ];

  const [activeReason, setActiveReason] = useState(reasons[0]);

  const handleGetHelp = () => {
    alert(
      "For assistance, please contact our support team at support@example.com."
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center lg:mb-4 w-full py-8">
        Why Choose <span className="text-green-500">Sigma Solutions</span> for
        Exhibition Stands?
      </h1>

      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center mx-auto mt-6">
        <div className="w-auto lg:w-1/3 space-y-2 mb-3 lg:mb-0">
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              onClick={() => setActiveReason(reason)}
              className={`cursor-pointer p-2 rounded-lg shadow-md flex items-center justify-between ${
                activeReason.id === reason.id
                  ? "bg-green-500 text-white dark:text-neutral-900"
                  : "bg-gray-300 dark:bg-neutral-700"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>
                {`0${reason.id}`} {reason.title}
              </span>
              <span className="text-gray-500">
                {<FaRegArrowAltCircleRight />}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="w-full lg:w-2/3 p-4">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {`Reason ${activeReason.id}: ${activeReason.title}`}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeReason.content}
          </motion.p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10">
        <button
          onClick={handleGetHelp}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Get Help
        </button>
      </div>
    </>
  );
};

export default WhySS;
