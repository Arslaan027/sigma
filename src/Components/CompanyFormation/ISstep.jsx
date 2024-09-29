import React from "react";
import step from "../../assets/Image/step.png"; // Import your image

const ISstep = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Center the content vertically and horizontally */}
      <div className="max-w-5xl w-full p-4">
        <h1 className="text-3xl text-center font-bold mb-4 mt-10">
          Requirements and Key Facts about{" "}
          <span className="text-green-500">Company Registration in India</span>
        </h1>

        {/* Company Registration Information */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
            <img
              src={step}
              alt="Company Registration Steps"
              className="w-full h-auto max-w-2xl max-h-[900px] rounded-lg" // Adjust size as needed
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-2/3 p-4">
            <div className="space-y-4">
              <div>
                <strong>Company Name:</strong> Selecting a unique and distinct
                name for your business is paramount. The chosen name must stand
                apart from existing businesses’ names or trademarks.
              </div>
              <div>
                <strong>Shareholders:</strong> The parent company can hold 100%
                of the shares, or a combination of two foreign nationals can
                serve as shareholders. Notably, there is no mandatory
                requirement for an Indian resident to be a shareholder.
              </div>
              <div>
                <strong>Share Capital:</strong> India does not impose a minimum
                capital requirement for company registration, providing
                flexibility for businesses in determining their capital
                structure.
              </div>
              <div>
                <strong>Directors:</strong> A minimum of two directors is
                mandatory, with at least one director being an Indian resident.
                Additionally, nominee directorship services can be availed if
                needed.
              </div>
              <div>
                <strong>Registered Address:</strong> Every company in India must
                have a registered address officially recorded in government
                records. Virtual office address services are available to
                fulfill this requirement efficiently.
              </div>
              <div>
                <strong>Annual General Meeting (AGM):</strong> As per the
                Companies Act, every Indian company must conduct at least one
                annual general meeting, in addition to two board meetings within
                the year.
              </div>
              <div>
                <strong>Company Secretary:</strong> Mandatory filing of three
                secretarial returns annually is overseen by a company secretary.
              </div>
            </div>

            <h3 className="font-semibold mt-4">Taxation Considerations:</h3>
            <div className="space-y-2">
              <div>
                <strong>Professional and Government Fees:</strong> Incurrence of
                professional fees, including government fees for the
                registration process.
              </div>
              <div>
                <strong>Profit Tax Rate:</strong> Post-incorporation, companies
                are subjected to a profit tax rate of approximately 25.36%.
              </div>
              <div>
                <strong>GST (Goods and Services Tax):</strong> Applicability to
                domestic sales, with monthly GST returns and an annual tax
                return mandated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISstep;
