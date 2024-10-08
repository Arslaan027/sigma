import React, { useState } from "react";
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import image1 from "../../assets/Image/exhibition1.jpg"; // Example image for custom stand design
import image2 from "../../assets/Image/exhibition2.jpg"; // Example image for modular exhibition stands
import image3 from "../../assets/Image/exhibition3.jpg"; // Example image for portable stands
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const EStext = () => {
  const [activeIndex, setActiveIndex] = useState([0]); // State to track the active section

  // Array of sections with headings, paragraphs, and images
  const sections = [
    {
      title: "1. Custom Stand Design",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Tailored Solutions: Sigma Solutions provides bespoke stand designs
              that align with your brand’s identity and objectives. Whether you
              need a minimalistic or elaborate design, the team works closely
              with you to deliver a stand that perfectly represents your
              business.
            </p>
            <p className="text-sm mb-4">
              3D Visualization: Before finalizing the design, you are provided
              with 3D renders and visualizations of the stand to give you a
              realistic preview of the final product.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image1}
              alt="Custom Stand Design"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2. Modular Exhibition Stands",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Flexibility and Reusability: For clients who participate in
              multiple events, modular exhibition stands offer a versatile and
              cost-effective solution. These stands can be reconfigured for
              different spaces and events, ensuring consistency in branding
              while offering adaptability.
            </p>
            <p className="text-sm mb-4">
              Sustainable Design: Sigma Solutions focuses on sustainable
              materials and modular systems that can be reused and repurposed,
              reducing environmental impact.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image2}
              alt="Modular Exhibition Stands"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "3. Portable Stands",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Easy Setup and Transport: Sigma Solutions provides portable stands
              that are lightweight, easy to assemble, and ideal for businesses
              looking for cost-effective, quick setup solutions. These stands
              are especially beneficial for roadshows, small exhibitions, or
              single-day events.
            </p>
            <p className="text-sm mb-4">
              High Quality: Despite being portable, these stands are built with
              high-quality materials that ensure durability and a professional
              appearance.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image3}
              alt="Portable Stands"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "4. Interactive and Technology-Driven Stands",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Integrating Technology: Sigma Solutions incorporates the latest
              technology into exhibition stands to enhance visitor engagement.
            </p>
            <p className="text-sm mb-4">
              Engagement-Focused: Creating engaging stands that attract visitors
              and encourage interaction, making your event memorable.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image1}
              alt="Interactive and Technology-Driven Stands"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "5. Turnkey Solutions",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              End-to-End Management: Sigma Solutions handles everything from
              design to installation, ensuring a hassle-free experience.
            </p>
            <p className="text-sm mb-4">
              Global Reach: Providing seamless exhibition stand services
              internationally, accommodating diverse client needs.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image2}
              alt="Turnkey Solutions"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "6. Exhibition Stand Storage and Maintenance",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Post-Event Storage: Sigma Solutions offers storage services for
              future events, keeping your stands safe and ready.
            </p>
            <p className="text-sm mb-4">
              Maintenance Services: Refurbishment services to keep stands in
              perfect condition, ensuring longevity and quality.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image3}
              alt="Exhibition Stand Storage and Maintenance"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "7. Graphic Design and Branding",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Brand Identity Integration: Sigma Solutions provides expert
              graphic design services to ensure that your stand reflects your
              brand’s identity. From banners to display panels, all elements are
              designed to create a cohesive and visually appealing presentation.
            </p>
            <p className="text-sm mb-4">
              High-Quality Printing: All graphic elements are printed using the
              latest technology, ensuring high-resolution and vibrant displays
              that effectively communicate your brand message.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image1}
              alt="Graphic Design and Branding"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
    {
      title: "8. Booth Staffing and Training",
      content: (
        <div className="flex">
          <div className="w-1/2">
            <p className="text-sm mb-4">
              Professional Staffing: Sigma Solutions can provide professional
              staff for your events, ensuring your booth is well-represented.
            </p>
            <p className="text-sm mb-4">
              Staff Training: Offering training to maximize engagement at the
              stand, helping your team connect with visitors effectively.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image2}
              alt="Booth Staffing and Training"
              className="w-auto h-36 object-cover rounded-lg my-6"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Key Aspects of{" "}
        <span className="text-green-500">Exhibition Stand Services</span>
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border cursor-pointer flex justify-between items-center bg-green-50 py-2 px-4 md:px-8 rounded-full mb-2"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h2 className="text-sm mb-1">{section.title}</h2>
              <FaArrowRight className="text-sm" />
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 flex justify-center items-center mt-4 md:mt-0">
          {activeIndex !== null && (
            <div className="border border-gray-300 rounded-lg p-4 text-sm w-full md:w-auto">
              <h2 className="text-xl text-center font-semibold mb-4">
                {sections[activeIndex].title}
              </h2>
              {sections[activeIndex].content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EStext;
