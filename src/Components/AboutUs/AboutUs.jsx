import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image2 from "../../assets/Image/about2.jpg";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image2}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Main Container Animation */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-center mb-12 relative z-10"
        >
          {/* Heading Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-red-500"
          >
            About Us
          </motion.h1>

          {/* Paragraph Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl mx-auto max-w-4xl transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Paragraph Animations */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
            >
              At Sigma Solutions, we are the architects of your success, proudly
              serving as the trusted partner for ambitious entrepreneurs,
              visionary business leaders, and dynamic individuals across North
              East India. Our mission is to be the ultimate resource for all
              your business and personal aspirations, offering a comprehensive
              suite of solutions tailored to your unique needs. Whether you're
              igniting a new startup, scaling your business, or enhancing your
              living or working environment, we're here to make your vision a
              reality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
            >
              Our diverse range of services encompasses Business Registrations &
              Certifications, Accounting, and Architectural Services, seamlessly
              blending with our expertise in Interior Design, Furniture &
              Fixtures, and Decorative Items. We are also your go-to experts for
              Hotel, Restaurant & Catering (Horeca) services, providing
              top-notch solutions for the hospitality sector. From Packaging &
              Printing to Digital Marketing, Production Line Setup, and Storage
              & Material Handling, Sigma Solutions equips you with everything
              you need to drive efficiency and growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
            >
              What distinguishes us is our global perspective. With a footprint
              in the UAE, UK, and USA, we infuse every project with
              international experience and cutting-edge best practices. Our
              innovative IT Equipment & Security solutions and strategic
              assistance with Business Buying, Selling & Leasing ensure that
              your long-term success is within reach.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl leading-relaxed"
            >
              At Sigma Solutions, we're not just a service provider—we're your
              dedicated partners in progress, committed to delivering
              unparalleled quality, expertise, and excellence. Let us guide you
              in achieving your vision and elevate your business to new heights.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
