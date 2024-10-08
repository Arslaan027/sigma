import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Certifications data
const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description:
      "This certification underscores our dedication to ensuring we consistently provide products and services that meet customer and regulatory requirements.",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description:
      "Our environmental certification reflects our proactive approach to minimizing our environmental impact and ecological responsibility.",
  },
  {
    id: 3,
    title: "ISO 27001:2013",
    description:
      "This certification demonstrates our commitment to information security management, ensuring the safety and confidentiality of your data.",
  },
  {
    id: 4,
    title: "ISO 50001:2018",
    description:
      "Our energy management certification showcases our efforts in improving energy efficiency and reducing environmental impact.",
  },
  {
    id: 5,
    title: "ISO 10002:2014",
    description:
      "This certification emphasizes our focus on customer satisfaction and effective complaint handling to continuously improve our services.",
  },
  {
    id: 6,
    title: "SA 8000",
    description:
      "This certification reflects our commitment to fair labor practices and ethical working conditions, ensuring we uphold the highest standards of social responsibility.",
  },
  {
    id: 7,
    title: "5S",
    description:
      "The 5S certification signifies our commitment to workplace organization, productivity, and safety.",
  },
  {
    id: 8,
    title: "BIFMA Certificate",
    description:
      "Our BIFMA certification assures clients of our commitment to safety, sustainability, and performance in furniture and workspace design.",
  },
];

const CertificationSlide = ({ cert }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mx-2 h-full flex flex-col justify-between">
      <h3 className="text-xl text-green-500 font-semibold mb-4">
        {cert.title}
      </h3>
      <p className="text-gray-600">{cert.description}</p>
    </div>
  );
};

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

const Certification = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
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
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center justify-center mx-auto  text-center mb-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">
          Our <span className="text-green-500">Certifications</span>
        </h2>
        <p className="text-lg mb-6">
          At Sigma Solutions, our commitment to excellence is reflected in our
          robust portfolio of certifications. These credentials not only
          demonstrate our adherence to the highest industry standards but also
          establish us as an ideal business partner for your needs.
        </p>
        <p className="text-lg">Here’s how our certifications set us apart:</p>
      </div>

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
                <CertificationSlide cert={cert} />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Certification;
