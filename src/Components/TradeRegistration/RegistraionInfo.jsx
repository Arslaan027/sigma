import { useEffect, useRef, useState } from "react";

const RegistrationInfo = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]); // Refs to keep track of each step element

  useEffect(() => {
    // IntersectionObserver options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the step is visible
    };

    // Callback function for when the steps come into the viewport
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = entry.target.getAttribute("data-index");
          setVisibleSteps((prevSteps) => [...prevSteps, Number(stepIndex)]);
        }
      });
    };

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each step element
    stepRefs.current.forEach((stepRef) => {
      if (stepRef) {
        observer.observe(stepRef);
      }
    });

    // Cleanup observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        <span className="text-green-500">Trade License</span> Registration
      </h1>

      {/* Overview Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 dark:bg-neutral-800">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center dark:text-gray-200">
          Overview
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 ">
          {/* Left Column */}
          <div className="flex-1 md:pr-10 mb-6 md:mb-0">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m2 0h6M3 6h18M3 18h18"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Name of Approval / License:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-200">
                    Trade License
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3 dark:text-gray-200">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-100">
                    Issuing Authority:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-300">
                    Urban Local Body
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Stage:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-200">
                    Pre-Operation
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h6M9 6H3m6 12H3"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    SLA/ Number of Days:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-200">
                    30 Days
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-300 "></div>

          {/* Right Column */}
          <div className="flex-1 md:pl-4">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3M12 2v2m0 18v2M12 8h2a4 4 0 100-8h-4a4 4 0 000 8h2m0 6v6"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Documents Requigreen:
                  </strong>
                  <ul className="list-disc ml-6 text-gray-700 mt-1 dark:text-gray-200">
                    <li>ID Proof of Applicant</li>
                    <li>Address Proof of Applicant</li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Form Submission:
                  </strong>
                  <a
                    href="http://niveshmitra.up.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition"
                  >
                    niveshmitra.up.nic.in
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1v-4"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Fee:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-200">
                    Variable Fee (Auto calculated based on inputs)
                  </span>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m-6 4h6"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="block font-semibold dark:text-gray-200">
                    Mode of Payment:
                  </strong>
                  <span className="text-gray-700 dark:text-gray-200">
                    Online
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white p-6 rounded-lg shadow-md dark:bg-neutral-800">
        <h2 className="text-xl text-center font-bold mb-4">
          Procedure for Getting the License
        </h2>

        <div className="relative border-l border-gray-200 ml-1">
          {[
            "Open the Online Single Window Portal and register using personal and contact details.",
            "After logging in, fill the common application form and create a unit.",
            'Select "Apply for Permission", choose unit, department ("Urban Development Department"), and service ("Trade License").',
            "Fill the form, select license type, validity, upload requigreen documents, and submit the application.",
            'Go to "Pay Consolidated Fee" in the portal, select unit and service, and pay the calculated fee online.',
            "ULB’s verifying officer verifies the application and forwards it to the approving officer.",
            'The approving officer generates the order for the "Trade License".',
            "Track the status at the dashboard in the online portal.",
            'Download the trade license from the portal by clicking on "CERTIFICATE/NOC ISSUED".',
            "Verify the certificate by entering the Certificate No. under 'NOC Search' in the online system.",
          ].map((step, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`mb-10 ml-2 transform transition-transform duration-500 ${
                visibleSteps.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -left-3.5 border border-white"></div>
              <p className="text-lg font-semibold text-gray-700  dark:text-gray-200">
                Step {index + 1}
              </p>
              <p className="text-gray-600 mt-2 dark:text-gray-200">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationInfo;
