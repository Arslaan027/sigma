import { motion } from "framer-motion"; // for animations
import BBSL from "../../assets/Image/BBSLcon.jpg"; // Background image
import { duration } from "@mui/material";

const BBSLconclusion = () => {
  // Define animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Start hidden and slightly to the left
    visible: { opacity: 1, x: 0 }, // Fully visible and centered
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0 }, // Fully visible and centered
  };

  return (
    <div className="relative flex mx-auto flex-col max-w-6xl md:flex-row items-center md:items-start p-8 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
      {/* Left - Image Section */}
      <motion.div
        className="w-full md:w-1/3"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        transition={{ duration: 0.5 }} // Animation duration
      >
        <img
          src={BBSL}
          alt="Business Solutions"
          className="rounded-lg shadow-md"
        />
      </motion.div>

      {/* Right - Text Content Section */}
      <motion.div
        className="w-full md:w-2/3 text-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Conclusion: How Sigma Solutions Can Help
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          At Sigma Solutions, we specialize in providing comprehensive support
          for entrepreneurs looking to buy, sell, or lease businesses in
          Northeast India. From conducting due diligence and managing regulatory
          requirements to offering financial and legal consulting, we streamline
          the entire process. With our expert project reports, business
          registration services, and market insights, Sigma Solutions ensures a
          smooth transition for all parties involved.
        </p>
        <motion.button
          className="bg-green-500 hover:bg-green-400 text-white py-2 px-6 rounded-md shadow transition duration-300"
          whileHover={{ scale: 1.05, rotate: 2 }} // Added rotation on hover
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BBSLconclusion;
