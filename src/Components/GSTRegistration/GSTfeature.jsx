import React from "react";

const GSTfeature = () => {
  const features = [
    {
      id: 1,
      title: "New GST Registration Concept",
      content:
        "GST is a comprehensive tax that combines various indirect taxes like VAT, CST, service tax, excise duty, and entertainment tax. It was introduced in India in July 2017.",
    },
    {
      id: 2,
      title: "GST Registration Limit",
      content:
        "If your business turnover exceeds ₹40 lakh in a year (with exceptions for certain businesses), GST registration is required from the start.",
    },
    {
      id: 3,
      title: "GST Tax Rates",
      content:
        "GST tax rates vary by product or service, ranging from 0% to 28%.",
    },
    {
      id: 4,
      title: "Input Tax Credit Scheme",
      content:
        "Only registered GSTIN holders can avail of the input tax credit scheme, allowing them to claim taxes already paid during the purchase of goods or services.",
    },
    {
      id: 5,
      title: "GST Return Filing",
      content:
        "All GSTIN holders must file three GST returns monthly or quarterly, while tax payments are due every month.",
    },
    {
      id: 6,
      title: "Composition Scheme",
      content:
        "GST registration offers a composition scheme for businesses with a turnover of less than ₹1 crore, allowing them to pay taxes monthly at a rate of 1% to 5% without claiming input tax credit.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Features of <span className="text-green-500">GST Registration</span>
      </h1>
      <div className="space-y-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-4 border rounded-md shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-neutral-800 border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {`${feature.id}. ${feature.title}`}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GSTfeature;
