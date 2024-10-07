import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import { BsArrowRightCircle } from "react-icons/bs";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "How Do I Register My Brand Name",
    date: "October 1, 2024",
    excerpt:
      "Registering your brand name is a crucial step for any entrepreneur looking to establish a unique identity in the marketplace. Not only does this process protect your brand, but it also ensures that no one else can legally use your brand name, which can save you from potential legal disputes in the future.",
    imageUrl:
      "https://images.pexels.com/photos/7967275/pexels-photo-7967275.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Sustainable Building Practices",
    date: "September 25, 2024",
    excerpt:
      "Before you begin the registration process, it’s important to ensure that your desired brand name isn’t already in use. This involves searching the trademark database to check for existing trademarks that might be similar to yours. We’ll provide you with resources to perform this search effectively.",
    imageUrl:
      "https://images.pexels.com/photos/13900831/pexels-photo-13900831.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Innovations in Renewable Energy",
    date: "September 15, 2024",
    excerpt:
      "This section will guide you through the different forms you need to fill out and the information you must provide, including samples of how you plan to use the trademark. After successfully registering your brand name, it’s important to understand how to maintain it.",
    imageUrl:
      "https://images.pexels.com/photos/10924140/pexels-photo-10924140.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Understanding the Trademark Registration Process",
    date: "September 10, 2024",
    excerpt:
      "This section will guide you through the different forms you need to fill out and the information you must provide, including samples of how you plan to use the trademark. After successfully registering your brand name.",
    imageUrl:
      "https://images.pexels.com/photos/7103084/pexels-photo-7103084.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "Innovations in Renewable Energy",
    date: "September 15, 2024",
    excerpt:
      "This section will guide you through the different forms you need to fill out and the information you must provide, including samples of how you plan to use the trademark. After successfully registering your brand name, it’s important to understand how to maintain it.",
    imageUrl:
      "https://images.pexels.com/photos/7339620/pexels-photo-7339620.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mx-2">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-md font-semibold mt-4">{post.title}</h3>
      <p className="text-xs text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-800 mt-1 text-sm">{post.excerpt}</p>
      <a
        href="#"
        className="flex justify-center items-center w-auto text-white text-xs px-4 py-2 bg-green-500 rounded-full mt-2 inline-block"
      >
        Read More
        <BsArrowRightCircle className="ml-2" />
      </a>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow hover:bg-gray-200"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-700" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow hover:bg-gray-200"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-700" />
    </div>
  );
};

const BLOG = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 1 second
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
    <div className="container mx-auto p-4 max-w-5xl my-24">
      <h1 className="text-3xl font-bold mb-6">
        Latest <span className="text-green-500">Blogs</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Slider {...settings}>
          {blogPosts.map((post) => (
            <div key={post.id}>
              <BlogPost post={post} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default BLOG;
