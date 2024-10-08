import React from "react";
import TOimg from "../../../../assets/Image/TOimg.jpg";
import { Link } from "react-router-dom";

const TrademarkObjection = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between relative gap-10">
        {/* Right Image with Unique Shape */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0 md:block">
          <div
            className="relative z-0 w-full overflow-hidden shadow-lg transition-transform transform"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 70%, 80% 100%, 0 100%)",
              backgroundImage: `url(${TOimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px", // Adjust height as needed
            }}
          />
        </div>
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center z-10">
          <h1 className="text-4xl font-bold text-green-600 leading-tight mb-4 dark:text-gray-300">
            Trademark Objection
          </h1>
          <h2 className="text-lg font-semibold">Definition:</h2>
          <p className="text-gray-700 mb-4 text-sm">
            Trademark objection occurs when the Trademark Office or a third
            party opposes the registration of a trademark due to similarities
            with existing trademarks or non-compliance with legal standards.
          </p>
          <h2 className="text-md font-semibold">Benefits:</h2>
          <ul className="text-gray-700 mb-4 text-sm list-disc list-inside">
            <li>
              <strong>Defending an objection:</strong> Ensures your brand’s
              protection and exclusivity.
            </li>
          </ul>
          <h2 className="text-md font-semibold">Process:</h2>
          <ol className="text-gray-700 mb-4 text-sm list-decimal list-inside">
            <li>
              <strong>Objection Notice:</strong> Receive the objection notice.
            </li>
            <li>
              <strong>Draft Response:</strong> Prepare and file a response
              (within 30 days) to the objection.
            </li>
            <li>
              <strong>Hearing:</strong> If required, attend a hearing before the
              Trademark Officer.
            </li>
            <li>
              <strong>Approval or Refusal:</strong> The trademark is either
              accepted or refused based on the response.
            </li>
          </ol>
          <h2 className="text-md font-semibold">Documents Needed:</h2>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>Trademark Objection Notice</li>
            <li>Proof of prior use or documentation supporting your claim</li>
            <li>Trademark registration application</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrademarkObjection;
