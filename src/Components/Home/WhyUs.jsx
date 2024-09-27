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
    <section className="py-16 bg-gray-50 dark:bg-black ">
      <div className="container mx-auto px-4 max-w-5xl">
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
              className="text-lg font-bold  uppercase mb-4"
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              Why Sigma Solutions
            </motion.h2>
            <motion.h1
              className="text-3xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-300 mb-6"
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              Choosing <span className="text-green-500">Sigma Solutions</span>{" "}
              to Make a Difference
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
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 text-center mx-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard
              icon="🌐"
              title="Comprehensive Expertise Across Multiple Sectors"
              description="Sigma Solutions is a one-stop destination for a wide range of services, including business, commercial, and residential solutions."
              bgColor="bg-yellow-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="👥"
              title="Highly Experienced and Qualified Team"
              description="Our team comprises industry experts with years of hands-on experience."
              bgColor="bg-blue-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="✅"
              title="Commitment to Quality and Safety"
              description="Quality is our top priority, following strict control and safety standards."
              bgColor="bg-green-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="⏰"
              title="Timely Project Delivery"
              description="Our team ensures that we meet deadlines without compromising on quality."
              bgColor="bg-purple-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="💰"
              title="Competitive Pricing and Value for Money"
              description="We offer competitive pricing without compromising on quality."
              bgColor="bg-orange-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="📞"
              title="24/7 Emergency Services"
              description="Our 24/7 emergency support ensures your critical systems are always protected."
              bgColor="bg-red-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="🔄"
              title="End-to-End Project Management"
              description="From concept to completion, we offer full-service project management."
              bgColor="bg-gray-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="🤝"
              title="High Client Retention and Positive Referrals"
              description="Many of our clients continue to work with us on multiple projects."
              bgColor="bg-teal-100 dark:bg-neutral-900"
            />
            <FeatureCard
              icon="🔗"
              title="Long-Term Partnerships"
              description="We aim to be your go-to partner for all future needs."
              bgColor="bg-indigo-100 dark:bg-neutral-900"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLegalWiz;
