import { useState } from "react";
import { Link } from "react-router-dom";

const Megamenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track megamenu visibility

  const closeMenu = () => {
    setIsMenuOpen(false); // Function to close megamenu
  };

  const businessServices = [
    { path: "/company-formation", label: "Business Formation" },
    { path: "/ngo-society-registrations", label: "NGO Registration" },
    { path: "/", label: "Licensing & Certifications" },
    { path: "/", label: "Intellectual Property" },
    { path: "/", label: "International Business Setup" },
    { path: "/", label: "Exhibition Services" },
    { path: "/", label: "Business Buying, Selling AND Leasing" },
  ];

  const accountingServices = [
    { path: "/gst-returns", label: "GST Returns Services" },
    { path: "/dsc-pan-epf", label: "DSC, PAN, EPF" },
    { path: "/income-tax", label: "Income Tax Related Services" },
    { path: "/book-keeping", label: "Book Keeping Services" },
    { path: "/notice-scrutiny", label: "Notice & Scrutiny" },
    { path: "/agreements", label: "Agreements" },
    { path: "/loan-consultancy", label: "Loan Consultancy" },
  ];

  const products = [
    { label: "Documentation", path: "/" },
    { label: "Pricing", path: "/" },
    { label: "Web", path: "/" },
    { label: "License", path: "/" },
  ];

  const resources = [
    { label: "Blog", path: "/" },
    { label: "Events", path: "/" },
    { label: "Industry Tips", path: "/" },
  ];

  return (
    <>
      {isMenuOpen && ( // Render only if the menu is open
        <div className="w-screen max-w-4xl bg-white border-t shadow-md p-8 rounded-2xl">
          <div className="grid grid-cols-4 gap-0">
            {/* Business Services Column */}
            <section aria-labelledby="company-heading">
              <h4
                id="company-heading"
                className="font-semibold text-gray-800 mb-4"
              >
                Business Services
              </h4>
              <ul className="space-y-2 text-gray-600">
                {businessServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="hover:text-green-500 block"
                      onClick={closeMenu} // Close menu on click
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Accounting Services Column */}
            <section aria-labelledby="accounting-heading">
              <h4
                id="accounting-heading"
                className="font-semibold text-gray-800 mb-4"
              >
                Accounting Services
              </h4>
              <ul className="space-y-2 text-gray-600">
                {accountingServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="hover:text-green-500 block"
                      onClick={closeMenu} // Close menu on click
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
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
                {products.map((product) => (
                  <li key={product.label}>
                    <Link
                      to={product.path}
                      className="hover:text-green-500 block"
                      onClick={closeMenu} // Close menu on click
                    >
                      {product.label}
                    </Link>
                  </li>
                ))}
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
                {resources.map((resource) => (
                  <li key={resource.label}>
                    <Link
                      to={resource.path}
                      className="hover:text-green-500 block"
                      onClick={closeMenu} // Close menu on click
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Megamenu;
