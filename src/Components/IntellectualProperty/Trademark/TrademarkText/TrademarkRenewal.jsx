import React from "react";
import TRimg from "../../../../assets/Image/TRimg.jpg";
import { Link } from "react-router-dom";

const TrademarkRenewal = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-green-600 leading-tight mb-4 dark:text-gray-300">
            Trademark Renewal
          </h1>
          <h2 className="text-lg font-semibold">Definition:</h2>
          <p className="text-gray-700 mb-4 text-sm">
            Trademark renewal is the process of extending the protection of a
            registered trademark beyond its initial 10-year validity.
          </p>
          <h2 className="text-md font-semibold">Benefits:</h2>
          <ul className="text-gray-700 mb-4 text-sm list-disc list-inside">
            <li>
              <strong>Maintains Legal Protection:</strong> Ensures the trademark
              remains legally protected.
            </li>
            <li>
              <strong>Avoids Penalties:</strong> Prevents penalties or lapses in
              trademark rights.
            </li>
          </ul>
          <h2 className="text-md font-semibold">Process:</h2>
          <ol className="text-gray-700 mb-4 text-sm list-decimal list-inside">
            <li>
              <strong>Application Filing:</strong> Submit the renewal
              application (Form TM-R).
            </li>
            <li>
              <strong>Processing:</strong> The Trademark Office processes the
              renewal request.
            </li>
            <li>
              <strong>Grant of Renewal:</strong> Upon approval, the trademark is
              renewed for another 10 years.
            </li>
          </ol>
          <h2 className="text-md font-semibold">Documents Needed:</h2>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Application Form (TM-R)</li>
            <li>Power of Attorney (if applicable)</li>
            <li>Trademark Registration Certificate</li>
          </ul>
        </div>

        {/* Right Image with Unique Shape */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${TRimg})`,
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

export default TrademarkRenewal;
