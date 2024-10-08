import React from "react";
import TReimg from "../../../../assets/Image/TReimg.jpg";
import { Link } from "react-router-dom";

const TrademarkRectification = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-green-600 leading-tight mb-4 dark:text-gray-300">
            Trademark Rectification
          </h1>
          <h2 className="text-lg font-semibold">Definition:</h2>
          <p className="text-gray-700 mb-4 text-sm">
            Rectification refers to the process of correcting any errors or
            lapses in the registration of a trademark.
          </p>
          <h2 className="text-md font-semibold">Benefits:</h2>
          <ul className="text-gray-700 mb-4 text-sm list-disc list-inside">
            <li>
              <strong>Maintains Accuracy:</strong> Ensures the accuracy and
              validity of the registered trademark.
            </li>
            <li>
              <strong>Allows Corrections:</strong> Corrects data errors in the
              trademark record.
            </li>
          </ul>
          <h2 className="text-md font-semibold">Process:</h2>
          <ol className="text-gray-700 mb-4 text-sm list-decimal list-inside">
            <li>
              <strong>Application Filing:</strong> Submit a rectification
              request to the Trademark Office.
            </li>
            <li>
              <strong>Processing:</strong> The Trademark Office reviews the
              rectification request.
            </li>
            <li>
              <strong>Approval:</strong> If accepted, the trademark details are
              corrected.
            </li>
          </ol>
          <h2 className="text-md font-semibold">Documents Needed:</h2>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Application for Rectification</li>
            <li>
              Supporting documents showing the error or the need for
              rectification
            </li>
          </ul>
        </div>

        {/* Right Image with Unique Shape */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${TReimg})`,
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

export default TrademarkRectification;
