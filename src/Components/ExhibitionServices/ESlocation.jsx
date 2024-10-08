import React from "react";
import Location from "../../assets/Image/ESlocation.jpg";
import { Link } from "react-router-dom";

const ESlocation = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-4 dark:text-gray-300">
            Services Provided Across Locations
          </h2>
          <ul className="list-disc list-inside text-md dark:text-white text-gray-500 space-y-4 mb-6">
            <li>
              <strong>In India:</strong> Sigma Solutions has a strong presence
              across major exhibition cities like Delhi, Mumbai, Bengaluru,
              Chennai, and Hyderabad. They cater to various national trade shows
              and expos, providing end-to-end services for both large and small
              businesses.
            </li>
            <li>
              <strong>In the UAE, UK, and USA:</strong> The company extends its
              exhibition stand services internationally, helping businesses
              establish a professional presence at global events and
              exhibitions. With a deep understanding of international trade show
              requirements, Sigma Solutions ensures smooth project execution
              across borders.
            </li>
          </ul>
          <p className="text-sm dark:text-white text-gray-500 mb-6">
            By choosing Sigma Solutions, you can trust that your exhibition
            presence is handled with expertise and a strong focus on delivering
            results.
          </p>
          <div className="flex gap-2 justify-center md:justify-start">
            <Link
              to="/contact"
              className="px-3 py-2 bg-green-600 text-white rounded-full text-xs hover:bg-green-700 transition transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image with Unique Shape */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${Location})`,
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

export default ESlocation;
