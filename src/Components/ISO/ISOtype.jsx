import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  MdSecurity,
  MdEco,
  MdHealthAndSafety,
  MdEnergySavingsLeaf,
  MdGppGood,
} from "react-icons/md";
import { motion } from "framer-motion";

// ISO certifications data with icons
const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description:
      "Ensures businesses meet customer  requirements through a quality management system.",
    icon: <MdGppGood className="text-green-500 text-5xl mb-4" />,
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description:
      "Minimizes environmental impact by implementing responsible environmental practices.",
    icon: <MdEco className="text-green-500 text-5xl mb-4" />,
  },
  {
    id: 3,
    title: "ISO 27001:2013",
    description:
      "Focuses on protecting sensitive information and ensuring data security in the organization.",
    icon: <MdSecurity className="text-green-500 text-5xl mb-4" />,
  },
  {
    id: 4,
    title: "ISO 45001:2018",
    description:
      "Promotes occupational health and safety to ensure a safe working environment.",
    icon: <MdHealthAndSafety className="text-green-500 text-5xl mb-4" />,
  },
  {
    id: 5,
    title: "ISO 50001:2018",
    description:
      "Helps businesses manage energy efficiently, reducing environmental impact and operational costs.",
    icon: <MdEnergySavingsLeaf className="text-green-500 text-5xl mb-4" />,
  },
];

// Slide component with icons
const ISOTypeSlide = ({ cert }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mx-2 h-full flex flex-col justify-between items-center text-center">
    {cert.icon}
    <h3 className="text-xl text-green-500 font-semibold mb-4">{cert.title}</h3>
    <p className="text-gray-600">{cert.description}</p>
  </div>
);

// Custom arrows for the slider
const NextArrow = ({ onClick }) => (
  <div
    className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700" />
  </div>
);

const ISOtype = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mx-auto text-center mb-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">
          Types of <span className="text-green-500">ISO Certifications</span>
        </h2>
        <p className="text-lg mb-6">
          There are various ISO standards, each designed for different
          industries and processes. Some of the most common types include:
        </p>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative max-w-5xl mx-auto">
          <Slider {...settings}>
            {certifications.map((cert) => (
              <div key={cert.id}>
                <ISOTypeSlide cert={cert} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default ISOtype;
