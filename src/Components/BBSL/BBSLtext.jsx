import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import text1 from "../../assets/Image/text1.jpg";
import text2 from "../../assets/Image/text2.jpg";
import text3 from "../../assets/Image/text3.jpg";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const BBSLtext = () => {
  const sectionsRef = useRef([]);

  // Add a function to push refs to the sectionsRef array
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { x: -100, opacity: 0 }, // Start from left and invisible
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger when the top of the section is 80% down the viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Business Buying, Selling, and Leasing Services in
        <span className="text-green-500"> Northeast India</span>
      </h1>

      <section ref={addToRefs} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. Categories and Types of Business Buying, Selling, and Leasing
          Services
        </h2>
        <p className="text-lg mb-4">
          Understanding the different categories within business buying,
          selling, and leasing is essential. Each type comes with its own set of
          dynamics and regulatory requirements.
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Business Buying:</strong> This involves acquiring an
            existing business with an established customer base, assets, and
            revenue.
          </li>
          <li>
            <strong>Business Selling:</strong> Entrepreneurs who are ready to
            exit their businesses often sell them to new owners.
          </li>
          <li>
            <strong>Business Leasing:</strong> Leasing a business typically
            involves renting out a business’s physical assets or property.
          </li>
        </ul>
        <p className="text-lg">
          Each type offers unique opportunities and risks, and it is crucial for
          entrepreneurs to identify which service aligns best with their
          long-term goals.
        </p>
        <img
          src={text1}
          alt="Business Buying"
          className="w-full h-64 object-cover rounded-lg my-6"
        />
      </section>

      <section ref={addToRefs} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. Regulatory Requirements and Legal Framework
        </h2>
        <p className="text-lg mb-4">
          The legal framework surrounding business buying, selling, and leasing
          is complex and must be thoroughly understood to avoid legal pitfalls.
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>
            <strong>Licensing:</strong> Specific licenses and permits are
            necessary to ensure smooth operations.
          </li>
          <li>
            <strong>Contracts and Agreements:</strong> Business purchase
            agreements, lease agreements, and non-disclosure agreements (NDAs)
            must be well-drafted.
          </li>
          <li>
            <strong>Compliance:</strong> Businesses must adhere to the regional
            tax, labor, and environmental regulations.
          </li>
        </ul>
        <p className="text-lg">
          Before entering any transaction, entrepreneurs must consult with legal
          professionals to ensure compliance with regional and national laws.
        </p>
        <img
          src={text2}
          alt="Legal Framework"
          className="w-full h-64 object-cover rounded-lg my-6"
        />
      </section>

      <section ref={addToRefs} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. Step-by-Step Guide to Starting and Managing the Process
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              For Buying a Business:
            </h3>
            <ol className="list-decimal ml-8 mb-4">
              <li>Research the Market.</li>
              <li>Identify Opportunities.</li>
              <li>Due Diligence.</li>
              <li>Secure Financing.</li>
              <li>Negotiate Terms.</li>
              <li>Complete the Transaction.</li>
            </ol>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              For Selling a Business:
            </h3>
            <ol className="list-decimal ml-8 mb-4">
              <li>Valuation.</li>
              <li>Prepare Financials.</li>
              <li>Market the Business.</li>
              <li>Negotiate Offers.</li>
              <li>Legal Transfer.</li>
            </ol>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">
              For Leasing a Business:
            </h3>
            <ol className="list-decimal ml-8 mb-4">
              <li>Assess Assets.</li>
              <li>Create a Lease Agreement.</li>
              <li>Select Tenants.</li>
              <li>Manage the Lease.</li>
            </ol>
          </div>
        </div>

        <img
          src={text3}
          alt="Illustration of the step-by-step guide for buying, selling, and leasing businesses"
          className="w-full h-64 object-cover rounded-lg"
        />
      </section>

      {/* Additional sections can follow the same structure */}
    </div>
  );
};

export default BBSLtext;
