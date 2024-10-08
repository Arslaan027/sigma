import ES from "../../assets/Image/ESassist.jpg";
import { Link } from "react-router-dom";

const ESassist = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4 dark:text-gray-300">
            How Sigma<span className="text-green-500">Solutions</span> Can
            Assist
          </h1>
          <p className="text-md dark:text-white text-gray-500 mb-6">
            Sigma Solutions can help businesses with:
          </p>
          <ul className="list-disc list-inside text-md dark:text-white text-gray-500 mb-6">
            <li>
              Project Report Drafting: Comprehensive reports for planning and
              budgeting your exhibition stand needs.
            </li>
            <li>
              Business Registration and Licensing: Assistance with the necessary
              documentation and approvals required for participating in
              exhibitions, especially in international markets.
            </li>
            <li>
              Exhibition Strategy: Sigma Solutions helps businesses craft
              strategies to optimize their exhibition participation, ensuring
              that their brand gets the most out of the event.
            </li>
            <li>
              Marketing and Promotions: Assistance with marketing materials and
              promotional campaigns to drive traffic to your exhibition stand.
            </li>
          </ul>
          <p className="text-sm dark:text-white text-gray-500 mb-6">
            By choosing Sigma Solutions, you ensure that your exhibition
            presence is handled with expertise, creativity, and a strong focus
            on delivering results, both in India and abroad.
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
              backgroundImage: `url(${ES})`,
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

export default ESassist;
