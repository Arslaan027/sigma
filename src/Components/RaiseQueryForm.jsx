import { useEffect } from "react";
import queryImage from "../assets/Image/handshake.jpg"; // Add an appropriate image for the query form

const RaiseQueryForm = () => {
  useEffect(() => {
    const form = document.getElementById("query-form");
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
          Raise <span className="text-green-500">Query</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Have a question or need assistance? Fill out the form below, and we'll
          get back to you as soon as possible.
        </p>

        {/* Flex Container for Image and Form */}
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Query Image */}
          <div className="flex-1 mb-12 md:mb-0 transition-transform duration-300">
            <img
              src={queryImage}
              alt="Query Assistance"
              className="w-full h-80 max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <form
              id="query-form"
              className="space-y-2 transition-opacity duration-500 opacity-0 h-80"
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
                  required
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
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="query"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Query
                </label>
                <textarea
                  id="query"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-neutral-700 dark:text-white sm:text-sm transition duration-200 hover:border-green-400"
                  placeholder="Type your query here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 transform hover:scale-105"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaiseQueryForm;
