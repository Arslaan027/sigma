import React from "react";
import about from "../../assets/Image/about.jpg";
import { Link } from "react-router-dom";

const AboutTop = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4 dark:text-gray-300">
            Helping businesses <br />
            <span className="text-green-500">succeed</span> through the power of
            video.
          </h1>
          <p className="text-lg dark:text-white text-gray-500 mb-6">
            Video is the future of business in this digital-focused world. Sigma
            Solutions helps organizations humanize their communications and
            personalize customer experiences.
          </p>
          <div>
            <Link
              to="/vm"
              className="px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700 transition transform hover:scale-105"
            >
              Vision & Mission
            </Link>
          </div>
        </div>

        {/* Right Image with Unique Shape */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 hidden md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${about})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px", // Adjust height as needed
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutTop;
