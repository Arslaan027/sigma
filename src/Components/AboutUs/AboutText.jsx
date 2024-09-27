import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import partner from "../../assets/Image/partnership.jpg";
import young from "../../assets/Image/young.jpg";
import innovation from "../../assets/Image/innovation.jpg";
import pm from "../../assets/Image/pm.jpg";
import cs from "../../assets/Image/cs.jpg";
import finanace from "../../assets/Image/finanace.jpg";
import hospitality from "../../assets/Image/hospitality.jpg";

// Animation variants
const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutText = () => {
  return (
    <div className="bg-transparent">
      <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4 dark:text-gray-300 text-center my-5">
        About Sigma<span className="text-green-500">Solution</span>.
      </h1>

      {/* Section 1: Business Partnership */}
      <motion.div
        className="flex flex-col-reverse justify-center md:flex-row items-center gap-20 my-10 p-4 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={partner}
          alt="Business Partnership"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2 text-green-500">
            Business Partnership
          </h2>
          <p>
            Welcome to Sigma Solutions, your ultimate one-stop destination for
            all business and individual needs in Arunachal Pradesh. We
            understand that embarking on the journey of entrepreneurship can be
            daunting, which is why we offer a comprehensive suite of services
            designed to empower aspiring entrepreneurs, business owners, and
            individual clients to turn their dreams into reality.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2: Entrepreneurial Journey */}
      <motion.div
        className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-20 my-10  p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={young}
          alt="Entrepreneurial Journey"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Entrepreneurial Journey
          </h2>
          <p>
            At Sigma Solutions, we pride ourselves on being more than just a
            service provider; we are your dedicated partner in success. Our
            experienced team guides you through the complexities of starting and
            managing your business, ensuring you have the necessary
            certifications and protections in place.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 3: Innovative Design Solutions */}
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 my-10  p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={innovation}
          alt="Innovative Design Solutions"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Innovative Design Solutions
          </h2>
          <p>
            Creativity meets functionality with our design specialists, who
            excel in transforming spaces through innovative architecture,
            interior design, and landscaping solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 4: Civil and Structural Services */}
      <motion.div
        className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-20 my-10 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={cs}
          alt="Civil and Structural Services"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Civil and Structural Services
          </h2>
          <p>
            Our engineering expertise—spanning civil, mechanical, electrical,
            and plumbing services—ensures that your projects are built on a
            solid foundation of quality and compliance.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 5: Financial Management */}
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 my-10 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={finanace}
          alt="Financial Management"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Financial Management
          </h2>
          <p>
            We take the hassle out of financial management by providing expert
            accounting services and tax compliance support, allowing you to
            focus on what you do best—growing your business.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 6: Hospitality Services */}
      <motion.div
        className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-20 my-10 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={hospitality}
          alt="Hospitality Services"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Hospitality Services
          </h2>
          <p>
            For those in the hospitality sector, we offer tailored solutions
            that encompass everything from concept development to operational
            support, ensuring unforgettable experiences for your customers.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 7: Project Management */}
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 my-10 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={pm}
          alt="Project Management"
          className="w-full md:w-1/4 rounded-lg shadow-lg"
          variants={imageVariants}
        />
        <motion.div className="md:w-1/3" variants={textVariants}>
          <h2 className="text-2xl font-semibold mb-2  text-green-500">
            Project Management
          </h2>
          <p>
            With our project management expertise, we ensure timely delivery and
            high standards while offering ongoing maintenance services to keep
            your facilities in prime condition.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutText;
