import { useEffect } from "react";
import handshake from "../../assets/Image/handshake.jpg";

const RegistrationForm = () => {
  useEffect(() => {
    const form = document.getElementById("registration-form");
    if (form) {
      form.classList.add("opacity-0");
      setTimeout(() => {
        form.classList.remove("opacity-0");
        form.classList.add("opacity-100");
      }, 100);
    }
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Trade <span className="text-green-500">Registration Form</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Register your business with ease and start growing today. Sigma
          Solutions offers seamless trade registration services, guiding you
          through every step.
        </p>

        {/* Flex Container for Image and Form */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Handshake Image */}
          <div className="flex-1 mb-12 md:mb-0 transition-transform duration-300 hover:scale-105">
            <img
              src={handshake}
              alt="Business Handshake"
              className="w-full h-auto max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <form
              id="registration-form"
              className="space-y-4 transition-opacity duration-500 opacity-0"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-neutral-700 dark:text-white sm:text-sm transition duration-200 hover:border-green-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-neutral-700 dark:text-white sm:text-sm transition duration-200 hover:border-green-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-neutral-700 dark:text-white sm:text-sm transition duration-200 hover:border-green-400"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 transform hover:scale-105"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
