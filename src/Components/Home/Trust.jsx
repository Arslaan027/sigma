import React, { useRef } from "react";
import google from "../../assets/Image/Google.png";
import arslaan from "../../assets/Image/arslaan.jpg";
import salman from "../../assets/Image/salman.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Trust = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-300 py-24 hidden md:block dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-32">
          {/* Text Content on the Left */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-6 dark:text-gray-100">
              Hear What Our Customers Have To Say
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-100">
              Sigma
              <span className="text-green-500 dark:text-green-400">
                Solutions
              </span>{" "}
              is used by tens of thousands of founders to start, manage, and
              grow their business
            </h3>
            <p className="text-green-500 text-xl font-bold mb-4 dark:text-green-400">
              {inView ? <CountUp start={0} end={20000} duration={7} /> : "0"}+
              Happy Customers
            </p>
            <p className="text-gray-600 text-md mb-6 dark:text-gray-300">
              We are one of India's highest rated service providers, known for
              completing Business incorporations and other compliance services
              in record time. Don’t just take our word for it—read it for
              yourself.
            </p>
            <p className="text-gray-500 text-sm mb-6 dark:text-gray-400">
              Sigma Solution is a startup India registered company
            </p>
          </motion.div>

          {/* Testimonial Box on the Right */}
          <motion.div
            className="md:w-2/4 flex flex-col items-center md:items-end"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full bg-white p-6 shadow-xl rounded-xl dark:bg-neutral-800">
              {/* Slider Component */}
              <Slider {...sliderSettings} ref={sliderRef}>
                {[
                  {
                    text: "Great experience to have associated with SIGMA SOLUTION team. All documentation for registration was done online with prompt updates. Thanks to the entire team, especially Priyanka ma'am, for personally updating me and Himanshi for coordinating... Thank you...",
                    author: "Trinity Finserv LLP",
                  },
                  {
                    text: "Fantastic service and very professional. The process was smooth, and the team was very responsive to all my queries. Highly recommend SigmaSolutions for anyone looking to start their business with ease.",
                    author: "Future Tech Ltd.",
                  },
                  {
                    text: "Excellent support and quick turnaround time. The team at SigmaSolutions made the entire process hassle-free. I’m impressed with their professionalism and dedication to customer satisfaction.",
                    author: "Global Enterprises",
                  },
                ].map((testimonial, index) => (
                  <div className="px-4" key={index}>
                    <div className="flex items-center mb-4">
                      <img
                        src={google}
                        alt="Google"
                        className="w-10 h-10 mr-4"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Posted on
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 dark:text-gray-300">
                      {testimonial.text}
                    </p>
                    <p className="font-bold text-gray-800 dark:text-gray-100">
                      {testimonial.author}
                    </p>
                  </div>
                ))}
              </Slider>

              {/* Navigation Arrows */}
              <div className="absolute bottom-[-3px] right-28 transform translate-x-full">
                <div className="absolute top-1/2 transform -translate-y-1/10 flex space-x-2">
                  <button
                    className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center dark:bg-green-400"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center dark:bg-green-400"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Customer Images */}
              <div className="absolute top-0 left-0 -ml-12 transform -translate-x-full">
                <img
                  src={arslaan}
                  alt="Trinity"
                  className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <div className="absolute top-0 right-0 flex space-x-2 transform translate-x-12 -translate-y-12">
                <img
                  src={salman}
                  alt="customer 1"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
                <img
                  src={arslaan}
                  alt="customer 2"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
