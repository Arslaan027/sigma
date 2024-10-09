import ISO from "../../assets/Image/LC.jpg";
import { Link } from "react-router-dom";

const ISOassist = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4 dark:text-gray-300">
            How Sigma<span className="text-green-500"> Solutions</span> Can Help
            With ISO Certification
          </h1>
          <p className="text-md dark:text-white text-gray-500 mb-6">
            Sigma Solutions offers end-to-end support for ISO certification,
            including:
          </p>
          <ul className="list-disc list-inside text-md dark:text-white text-gray-500 mb-6">
            <li>Identifying the appropriate ISO standard for your business.</li>
            <li>
              Conducting gap analyses and preparing necessary documentation.
            </li>
            <li>Helping with the implementation of ISO standards.</li>
            <li>
              Conducting internal audits and preparing you for certification
              audits.
            </li>
            <li>
              Providing post-certification support, including maintenance and
              renewals.
            </li>
          </ul>
          <p className="text-sm dark:text-white text-gray-500 mb-6">
            With Sigma Solutions, you can navigate the complexities of ISO
            certification with confidence and expertise.
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
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 hidden md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${ISO})`,
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

export default ISOassist;
