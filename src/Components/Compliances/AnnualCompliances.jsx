import React, { useState } from "react";

const AnnualCompliances = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Annual Filing for Private Limited Companies",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Form AOC-4:</strong> Filing of the financial statements
            within 30 days of AGM.
          </li>
          <li>
            <strong>Form MGT-7:</strong> Submission of the annual return within
            60 days of AGM.
          </li>
          <li>
            <strong>Income Tax Returns:</strong> To be filed on or before
            September 30.
          </li>
          <li>
            <strong>AGM:</strong> Should be held annually, with not more than 15
            months between AGMs.
          </li>
        </ul>
      ),
    },
    {
      title: "2. Annual Compliance of a Private Limited Company",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Appointment of Auditors:</strong> Auditor holds office till
            the sixth AGM.
          </li>
          <li>
            <strong>Director’s Report:</strong> A report on company state and
            policies, filed during AGM.
          </li>
          <li>
            <strong>Maintaining Statutory Registers:</strong> Such as register
            of members and directors.
          </li>
        </ul>
      ),
    },
    {
      title: "3. Annual Compliance of LLP (Limited Liability Partnership)",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Form 11:</strong> Filed by May 30 detailing management
            affairs.
          </li>
          <li>
            <strong>Form 8:</strong> Statement of Accounts and Solvency filed
            within 30 days.
          </li>
          <li>
            <strong>Income Tax Return:</strong> Filed by July 31 or September 30
            based on audit.
          </li>
        </ul>
      ),
    },
    {
      title: "4. Compliances of Section 8 Company",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Annual Returns and Financial Statements:</strong> Must file
            Form AOC-4 and MGT-7.
          </li>
          <li>
            <strong>Income Tax Exemption:</strong> Must comply with Income Tax
            Act for non-profit status.
          </li>
        </ul>
      ),
    },
    {
      title: "5. Compliances of Nidhi Company",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>NDH-1:</strong> Yearly compliance return filed within 90
            days.
          </li>
          <li>
            <strong>NDH-3:</strong> Half-yearly return detailing financial
            condition.
          </li>
          <li>
            <strong>Annual General Meeting:</strong> Must be held and financial
            statements presented.
          </li>
        </ul>
      ),
    },
    {
      title: "6. Compliances Of NBFC (Non-Banking Financial Companies)",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>NBS-9:</strong> Annual return submitted to RBI detailing
            operations.
          </li>
          <li>
            <strong>Financial Statements Audit:</strong> Conducted by a
            qualified auditor.
          </li>
          <li>
            <strong>Monthly, Quarterly, and Half-Yearly Returns:</strong> Must
            be submitted to RBI.
          </li>
          <li>
            <strong>Income Tax Returns:</strong> Must be filed as per applicable
            laws.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-white dark:bg-neutral-900">
      <div className=" max-w-5xl rounded-lg  p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-green-500">Annual Compliances </span> in India
        </h1>
        <p className="text-lg mb-6">
          Here is a detailed explanation of various annual filings and
          compliance requirements for different types of entities in India.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="flex justify-between items-center w-full p-4 text-left dark:bg-neutral-800 bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-lg  dark:text-gray-200"
              onClick={() => toggleSection(index)}
            >
              <span className="text-xl font-semibold">{section.title}</span>
              <span
                className={`ml-4 transition-transform ${
                  openSection === index ? "transform rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openSection === index && (
              <div className="p-4 bg-gray-50 rounded-lg mt-2 dark:bg-neutral-800 dark:text-gray-300">
                {section.content}
              </div>
            )}
          </div>
        ))}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            Compliance for all these entities is critical as non-adherence can
            lead to penalties, legal issues, and in severe cases, closure of the
            business.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AnnualCompliances;
