import React from "react";
import tax from "../../assets/Image/tax.png";

const IStax = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Center the content vertically and horizontally */}
      <div className="max-w-5xl w-full">
        <div className="text-3xl text-center font-bold mb-4 mt-5">
          Taxation of{" "}
          <span className="text-green-500">Indian Subsidiary Companies</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Tax Information Section */}
          <div className="w-full lg:w-2/3 p-4 text-gray-500">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Income Tax Applicability:</strong> Taxes are imposed on
                all income generated within or outside India, encompassing
                dividends received from foreign subsidiaries.
              </li>
              <li>
                <strong>Tax Rates for Foreign Subsidiaries:</strong> Tax rates
                for foreign subsidiaries in India vary, with a rate of 50% for
                royalties received for technical services from the government or
                any Indian entity, and a rate of 40% for other forms of income.
              </li>
              <li>
                <strong>Surcharge Rates:</strong>
                <ul className="list-inside list-disc pl-5">
                  <li>
                    A 2% surcharge is levied if the income falls between Rs. 1
                    Crore and Rs. 10 Crores.
                  </li>
                  <li>
                    For incomes exceeding Rs. 10 Crores, a higher surcharge of
                    5% is imposed.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Health and Education Cess:</strong> Additionally, a 4%
                health and education cess is added to the total tax amount,
                contributing to social welfare initiatives.
              </li>
              <li>
                <strong>Concessional Tax Rates:</strong> Specific sectors,
                including but not limited to oil exploration, air
                transportation, and shipping businesses, benefit from
                concessional tax rates, providing favorable conditions for
                entities operating in these industries.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
            <img
              src={tax}
              alt="Taxation of Indian Subsidiary Companies"
              className="w-full h-auto max-w-72 max-h-80  rounded-lg" // Increased max width and height
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IStax;
