import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero1 from "../../assets/Vedio/hero1.mp4";
import hero2 from "../../assets/Vedio/hero2.mp4";
import hero3 from "../../assets/Vedio/hero3.mp4";

const videos = [hero1, hero2, hero3];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  // Change video every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVideoVisible(false);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsVideoVisible(true);
      }, 1000); // Wait for fade-out duration before changing video
    }, 4000); // Total duration for each video (2 sec display + 1 sec fade)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Animation variants
  const videoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative overflow-hidden py-40 px-6 lg:px-20 h-[80vh]">
      {/* Hero Video with Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate={isVideoVisible ? "visible" : "hidden"}
        variants={videoVariants}
        transition={{ duration: 1 }}
      >
        <video
          key={currentVideoIndex} // Add key here to force remount
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center ">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Effortless Registration, Expert Guidance
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Streamline Your Path to Success with Seamless Business Registration
        </motion.p>
        <motion.a
          href="#learn-more"
          className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-green-400 dark:bg-green-700 dark:hover:bg-green-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
