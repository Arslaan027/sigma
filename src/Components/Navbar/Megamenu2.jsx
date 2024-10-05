import { useState } from "react";
import { Link } from "react-router-dom";

const Megamenu2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // State to track megamenu visibility

  const closeMenu = () => {
    setIsMenuOpen(false); // Function to close megamenu
  };

  const furnitureServices = [
    { path: "/furniture/living-room", label: "Living Room Furniture" },
    { path: "/furniture/bedroom", label: "Bedroom Furniture" },
    { path: "/furniture/office", label: "Office Furniture" },
    { path: "/furniture/outdoor", label: "Outdoor Furniture" },
  ];

  return (
    <>
      {isMenuOpen && (
        <div className="w-screen max-w-2xl bg-white border-t shadow-md p-8 rounded-2xl dark:bg-neutral-800">
          <div className="grid grid-cols-2 gap-0">
            <section aria-labelledby="furniture-heading">
              <h4
                id="furniture-heading"
                className="font-semibold text-gray-800 mb-4 dark:text-gray-300"
              >
                Furniture Services
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {furnitureServices.map((service) => (
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
            <section aria-labelledby="furniture-heading">
              <h4
                id="furniture-heading"
                className="font-semibold text-gray-800 mb-4 dark:text-gray-300"
              >
                Furniture Services
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {furnitureServices.map((service) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default Megamenu2;
