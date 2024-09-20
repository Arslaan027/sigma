import React from "react";
import { motion } from "framer-motion";

// Define variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Cards start below and fade in
  visible: { opacity: 1, y: 0 }, // Cards move to their original position and fade in
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Smooth staggered effect
      delayChildren: 0.1,
    },
  },
};

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${bgColor}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.4, ease: "easeOut" }, // Smooth opacity transition
        y: { duration: 0.4, ease: "easeOut" }, // Smooth vertical transition
      }}
    >
      <div className="text-5xl mb-4 text-gray-800">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-[#FDFDFD]">
        {title}
      </h3>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

const WhyLegalWiz = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Main Container with Centered Content */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Text Section */}
          <motion.div
            className="mb-12 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-lg font-bold text-green-600 uppercase mb-4"
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              Why Sigma Solutions
            </motion.h2>
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-300 mb-6"
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              Choosing Sigma Solutions to Make a Difference
            </motion.h1>
            <motion.p
              className="text-gray-700 dark:text-gray-400 mb-12 leading-relaxed"
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              With our consistent services and results, we build trust and serve
              your business better.
            </motion.p>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard
              icon="🛡️"
              title="Confidential & Safe"
              description="All your private information is secure with us."
              bgColor="bg-red-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="✔️"
              title="No Hidden Fees"
              description="Everything is transparent with no hidden charges."
              bgColor="bg-green-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="😊"
              title="Guaranteed Satisfaction"
              description="We ensure 100% satisfaction with our services."
              bgColor="bg-blue-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="👨‍⚖️"
              title="Expert CA/CS Assistance"
              description="Prompt support from in-house professionals."
              bgColor="bg-purple-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="📹"
              title="Video Assistance"
              description="Easy video guidance to keep you on track."
              bgColor="bg-gray-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="🧩"
              title="Seamless Integration"
              description="Easily integrates with your existing systems."
              bgColor="bg-orange-100 dark:bg-neutral-900"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegalWiz;
