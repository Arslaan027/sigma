import React from "react";
import help from "../../assets/Image/help.png"; // Import the image

const IShelp = () => {
  return (
    <>
      <div className="text-3xl text-center font-bold mb-4 mt-5">
        How Sigma<span className="text-green-500">Solution</span> Can Assist
        with Indian Subsidiary Registration?
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around w-full max-w-6xl mx-auto my-12 p-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
          <img
            src={help}
            alt="How Registerkaro Can Assist"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-justify">
          <p className="text-lg text-gray-600 mb-4">
            We simplify the entire registration process, guiding you through key
            steps such as choosing a distinctive name, acquiring vital Director
            Identification Numbers (DIN) and Digital Signature Certificates
            (DSC). Additionally, we offer assistance with PAN and TAN
            applications and facilitate the establishment of a dedicated company
            bank account.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our proficient team is dedicated to ensuring strict adherence to
            regulatory standards, encompassing compliance with the Foreign
            Exchange Management Act (FEMA), Companies Act, 2013, Reserve Bank of
            India (RBI) regulations, and the Income Tax Act, 1961.
          </p>
          <p className="text-lg text-gray-600">
            With SigmaSolution as your partner, you can initiate and grow your
            Indian subsidiary business confidently and efficiently.
          </p>
        </div>
      </div>
    </>
  );
};

export default IShelp;
