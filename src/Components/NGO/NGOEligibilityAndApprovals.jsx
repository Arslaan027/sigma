import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const NGOEligibilityAndApprovals = () => {
  const eligibilityCriteria = [
    "Trusts: At least two trustees (in some states, three are required).",
    "Societies: A minimum of seven members is needed to form a society.",
    "Section 8 Companies: A minimum of two directors and two members is required.",
  ];

  const keyApprovals = [
    {
      title: "12A Registration",
      description: (
        <>
          <p>
            <strong>Purpose:</strong> Grants tax-exempt status to NGOs under the
            Income Tax Act, 1961.
          </p>
          <p>
            <strong>Benefits:</strong> Allows the NGO to receive donations that
            are exempt from income tax.
          </p>
          <p>
            <strong>Eligibility:</strong> Available to NGOs that are registered
            as trusts, societies, or Section 8 companies.
          </p>
          <p>
            <strong>Process:</strong> Apply to the Commissioner of Income Tax
            with necessary documents (e.g., trust deed, registration
            certificate, audited accounts). The application must be submitted
            within one year of registration.
          </p>
        </>
      ),
    },
    {
      title: "80G Registration",
      description: (
        <>
          <p>
            <strong>Purpose:</strong> Provides donors with tax deductions for
            contributions made to the NGO.
          </p>
          <p>
            <strong>Benefits:</strong> Donors can claim a deduction of up to 50%
            of the amount donated.
          </p>
          <p>
            <strong>Eligibility:</strong> NGOs must have 12A registration to
            apply for 80G.
          </p>
          <p>
            <strong>Process:</strong> Submit the application to the Commissioner
            of Income Tax, including the NGO’s registration certificate, PAN,
            and audited financial statements. Approval is typically granted for
            a specific period (e.g., 5 years) and needs to be renewed
            thereafter.
          </p>
        </>
      ),
    },
    {
      title: "FCRA Registration",
      description: (
        <>
          <p>
            <strong>Full Form:</strong> Foreign Contribution (Regulation) Act,
            2010.
          </p>
          <p>
            <strong>Purpose:</strong> Regulates the acceptance of foreign
            contributions by NGOs in India.
          </p>
          <p>
            <strong>Benefits:</strong> Allows NGOs to receive foreign funds for
            their activities.
          </p>
          <p>
            <strong>Eligibility:</strong> NGOs must have been registered for at
            least three years and should have a good track record of work.
          </p>
          <p>
            <strong>Process:</strong> Apply online to the Ministry of Home
            Affairs (MHA) with the required documents (e.g., registration
            certificate, annual reports, details of foreign contributions). The
            NGO must adhere to the prescribed guidelines and submit annual
            returns regarding foreign contributions.
          </p>
        </>
      ),
    },
    {
      title: "CSR Registration",
      description: (
        <>
          <p>
            <strong>Purpose:</strong> Enables NGOs to receive funds from
            Corporate Social Responsibility (CSR) initiatives.
          </p>
          <p>
            <strong>Eligibility:</strong> NGOs must ensure compliance with the
            Companies Act, 2013.
          </p>
        </>
      ),
    },
    {
      title: "State-Level Approvals",
      description: (
        <>
          <p>
            <strong>Purpose:</strong> Depending on the state, NGOs may need
            additional registrations or approvals related to local laws.
          </p>
          <p>
            <strong>Eligibility:</strong> Compliance with specific state
            regulations is necessary.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Eligibility <span className="text-green-500">Criteria</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Eligibility Criteria for NGO Registration in India
        </motion.h1>
      </div>
      <ul className="list-disc pl-8 mb-12">
        {eligibilityCriteria.map((criteria, index) => (
          <li
            key={index}
            className="text-gray-600 dark:text-gray-200 mb-2 flex items-center"
          >
            <FiCheckCircle className="text-green-500 mr-2" />
            {criteria}
          </li>
        ))}
      </ul>

      <div className="mb-12 text-center">
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key <span className="text-green-500">Approvals</span>
        </motion.h3>
        <motion.h1
          className="text-lg text-gray-600 mb-8 dark:text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Key Approvals Required for NGOs in India
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {keyApprovals.map((approval, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-md shadow-lg p-6 dark:bg-neutral-900"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-500 mb-2">
              {approval.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-100">
              {approval.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-200">
          These steps may vary slightly based on the state and specific
          circumstances, so it's advisable to consult with a legal expert for
          tailored guidance. These registrations not only help in building trust
          with donors but also ensure that the NGO operates within the legal
          framework, promoting transparency and accountability in its financial
          dealings.
        </p>
      </div>
    </div>
  );
};

export default NGOEligibilityAndApprovals;
