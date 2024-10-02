import React from "react";

const Megamenu = () => {
  return (
    <div className="w-screen max-w-4xl bg-white border-t shadow-md p-8 items-center rounded-2xl">
      <div className="grid grid-cols-4 gap-0">
        {/* Company Column */}
        <section aria-labelledby="company-heading">
          <h4 id="company-heading" className="font-semibold text-gray-800 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-green-500">
                Story
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Our Mission
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Team
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Marketing & Sales
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Customer Service
              </a>
            </li>
          </ul>
        </section>

        {/* Products Column */}
        <section aria-labelledby="products-heading">
          <h4
            id="products-heading"
            className="font-semibold text-gray-800 mb-4"
          >
            Products
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-green-500">
                Documentation
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Web
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                License
              </a>
            </li>
          </ul>
        </section>

        {/* Resources Column */}
        <section aria-labelledby="resources-heading">
          <h4
            id="resources-heading"
            className="font-semibold text-gray-800 mb-4"
          >
            Resources
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-green-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500">
                Industry Tips
              </a>
            </li>
          </ul>
        </section>

        {/* Contact Column */}
        <section aria-labelledby="contact-heading">
          <h4
            id="contact-heading"
            className="font-semibold text-gray-800 mb-4 text-center"
          >
            Principal's Message
          </h4>
          <div className="text-center">
            {" "}
            {/* Centering the content */}
            <img
              src={pripic}
              alt="Principal"
              className="w-24 h-28 rounded-md shadow-lg mb-4 mx-auto" // Centering with mx-auto
            />
            <div className="text-gray-600">
              <h5 className="font-semibold">Ms Nishat Sherwani</h5>
              <p>
                Welcome to our school! Together, we will achieve great things.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Megamenu;
