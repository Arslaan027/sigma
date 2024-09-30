import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import icons for collapsible
import NGO from "../../assets/Image/NGOstep.png";

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
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-50 dark:bg-neutral-900 p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-neutral-300 rounded-lg shadow-lg p-6">
        {/* Image Section */}
        <img
          src={NGO}
          alt="NGO Steps"
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />

        {/* Title Section */}
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Steps for Incorporation
        </h3>

        {/* Steps Sections */}
        {stepsData.map(({ title, steps }, sectionIndex) => {
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NGOstep;
