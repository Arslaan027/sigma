import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import icons for collapsible
import { Link } from "react-router-dom"; // Import Link for navigation
import NGO from "../../assets/Vedio/NGO.mp4";

const NGOstep = () => {
  const stepsData = [
    {
      title: "1. Trusts:",
      steps: [
        "Choose a Name: Unique name for the trust.",
        "Draft a Trust Deed: Document outlining the trust’s objectives and operations.",
        "Get the Trust Deed Registered: Register with the local sub-registrar.",
        "Obtain PAN: Apply for a Permanent Account Number.",
        "Open a Bank Account: In the name of the trust.",
      ],
      details: {
        purpose:
          "Charitable activities, including relief of poverty, education, and medical relief.",
        governingLaw: "Indian Trusts Act, 1882.",
        registrationAuthority: "Sub-registrar of the respective area.",
        keyFeatures: [
          "Formed for charitable purposes.",
          "Governed by trustees.",
          "No central law for trusts; state-specific laws prevail.",
        ],
      },
      link: "/trusts", // Add the link for Trusts
    },
    {
      title: "2. Societies:",
      steps: [
        "Choose a Name: Unique name for the society.",
        "Draft Memorandum of Association (MOA): Outlining the objectives.",
        "Draft Rules and Regulations: Internal governance structure.",
        "Application for Registration: Submit the MOA, rules, and a list of governing body members to the Registrar of Societies.",
        "Obtain PAN: Apply for a Permanent Account Number.",
        "Open a Bank Account: In the name of the society.",
      ],
      details: {
        purpose:
          "Promotion of literature, science, fine arts, or charitable activities.",
        governingLaw: "Societies Registration Act, 1860.",
        registrationAuthority: "Registrar of Societies.",
        keyFeatures: [
          "A minimum of seven members is required to form a society.",
          "Operates under state jurisdiction.",
          "More flexible structure than a trust.",
          "Managed by a governing body or managing committee.",
        ],
      },
      link: "/societies", // Add the link for Societies
    },
    {
      title: "3. Section 8 Companies:",
      steps: [
        "Choose a Name: Unique name for the company.",
        "Draft Memorandum and Articles of Association: Outlining objectives and rules.",
        "Apply for Name Approval: Through the Ministry of Corporate Affairs (MCA).",
        "File Form INC-12: To obtain a license to operate as a Section 8 company.",
        "Register the Company: File the incorporation documents with the MCA.",
        "Obtain PAN: Apply for a Permanent Account Number.",
        "Open a Bank Account: In the name of the company.",
      ],
      details: {
        purpose:
          "Non-profit organization formed for the promotion of commerce, art, science, sports, education, research, social welfare, etc.",
        governingLaw: "Companies Act, 2013.",
        registrationAuthority: "Registrar of Companies.",
        keyFeatures: [
          "Most regulated structure among NGOs.",
          "No minimum share capital requirement.",
          "Operates with greater transparency and compliance than trusts and societies.",
        ],
      },
      link: "/section8", // Add the link for Section 8 Companies
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-neutral-900 p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-300 rounded-lg shadow-lg p-6">
        {/* Title Section */}
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Types of <span className="text-green-500">NGOs</span> in India
        </h3>

        {/* Video Section */}
        <div className="w-full h-auto rounded-lg shadow-md mb-6">
          <video
            className="md:w-[4600px] md:h-[250px] h-[100px] w-[400px] rounded-lg object-cover"
            autoPlay
            loop
            muted
            playsInline // Ensures autoplay works on mobile without needing interaction
          >
            <source src={NGO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Steps Sections */}
        {stepsData.map(({ title, steps, details, link }, sectionIndex) => {
          const [isOpen, setIsOpen] = useState(false); // State for collapsible section

          return (
            <div key={sectionIndex} className="mb-6 border-b-2 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-700 p-3 rounded-lg transition duration-300 ease-in-out"
                onClick={() => setIsOpen(!isOpen)} // Toggle state on click
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {title}
                </h4>
                {isOpen ? <FaCaretUp /> : <FaCaretDown />}
              </div>

              {isOpen && (
                <div className="mt-2">
                  <ul className="list-disc list-inside pl-6">
                    {steps.map((step, index) => (
                      <li
                        key={index}
                        className="transition duration-300 ease-in-out p-2 rounded-lg text-gray-700 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-600 hover:shadow-lg"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h5 className="font-semibold text-gray-800 dark:text-white">
                      Details:
                    </h5>
                    <ul className="list-disc list-inside pl-6 mt-2">
                      {Object.entries(details).map(([key, value], index) => (
                        <li
                          key={index}
                          className="text-gray-600 dark:text-neutral-500"
                        >
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {value}
                        </li>
                      ))}
                      <li className="text-gray-600 dark:text-neutral-500">
                        <strong>Key Features:</strong>
                        <ul className="list-disc list-inside pl-6 mt-1">
                          {details.keyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Check Documentation Button */}
                  <div className="mt-4 flex justify-center items-center">
                    <Link to={link}>
                      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out">
                        Check Documentation
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NGOstep;
