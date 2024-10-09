import { motion } from "framer-motion"; // Import framer-motion for animations

const FSSAIeligibility = () => {
  return (
    <div className="flex justify-center items-center dark:bg-neutral-900">
      <div className="max-w-5xl dark:bg-neutral-900 p-8 rounded-lg mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Eligibility Criteria for{" "}
          <span className="text-green-500">FSSAI License</span>
        </motion.h2>

        {/* Eligibility Criteria Section */}
        <motion.div
          className="mt-6 text-lg text-left max-w-3xl mx-auto text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <ul className="list-disc list-inside">
            <li>Basic registration is for small-scale operations.</li>
            <li>State licenses are for businesses operating at a mid-level.</li>
            <li>
              Central licenses are mandatory for large-scale operators,
              importers, exporters, and businesses operating in multiple states.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FSSAIeligibility;
