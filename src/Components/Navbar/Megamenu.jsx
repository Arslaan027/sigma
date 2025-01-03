import { useState } from "react";
import { Link } from "react-router-dom";

const Megamenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track megamenu visibility

  const closeMenu = () => {
    setIsMenuOpen(false); // Function to close megamenu
  };

  const businessServices = [
    { path: "/company-formation", label: "Private Limited Companies" },
    {
      path: "/company-formation",
      label: "Public Limited Companies (PLC)",
    },
    {
      path: "/company-formation",
      label: "Limited Liability Partnership (LLP)",
    },
    { path: "/company-formation", label: "One Person Company (OPC)" },
    { path: "/company-formation", label: "Partnership Firm" },
    { path: "/company-formation", label: "Sole Proprietorship Firm" },
    { path: "/company-formation", label: "Section 8 Company" },
    { path: "/company-formation", label: "Cooperative Society" },
    { path: "/company-formation", label: "Foreign Company" },
  ];

  const accountingServices = [
    { path: "/iso-certification", label: "ISO Certifications" },
    { path: "/gst-registration", label: "GST Registration" },
    { path: "/food-safety", label: "FSSAI License" },
    { path: "/udyam-registration", label: "Udyam Registration (MSME)" },
    { path: "/drug-license", label: "Drug License" },
    { path: "/import-export-code", label: "Import Export Certificate (IEC)" },
    { path: "/Startup", label: "Startup India Registration" },
    { path: "/Trading", label: "Trading License" },
    { path: "/DSC", label: "Digital Signature Certificate (DSC)" },
  ];

  const products = [
    { label: "NGO Registration", path: "/ngo-society-registrations" },
    {
      label: "International Business Setup",
      path: "/International-Business-Setup",
    },
    { label: "Intellectual Property", path: "/Intellectual-Property" },
    { label: "Exhibition Services", path: "/Exhibition-Services" },
    { label: "Business Buying, Selling & Leasing", path: "/BBSL" },
  ];

  return (
    <>
      {isMenuOpen && ( // Render only if the menu is open
        <div className="w-screen max-w-2xl bg-white border-t shadow-md p-8 rounded-2xl dark:bg-neutral-800 ">
          <div className="grid grid-cols-3 gap-0">
            {/* Business Services Column */}
            <section aria-labelledby="company-heading">
              <h4
                id="company-heading"
                className="font-semibold text-gray-800 mb-4 dark:text-gray-300"
              >
                Business Formation
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {businessServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="hover:text-green-500 block dark:text-gray-300"
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
                className="font-semibold text-gray-800 mb-4 dark:text-gray-300"
              >
                Licencing & Certification
              </h4>
              <ul className="space-y-2 text-gray-600">
                {accountingServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="hover:text-green-500 block dark:text-gray-300"
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
                className="font-semibold text-gray-800 mb-4 dark:text-gray-300"
              >
                Others
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {products.map((product) => (
                  <li key={product.label}>
                    <Link
                      to={product.path}
                      className="hover:text-green-500 block dark:text-gray-300"
                      onClick={closeMenu} // Close menu on click
                    >
                      {product.label}
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
