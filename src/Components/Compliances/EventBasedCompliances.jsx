import React from "react";
import {
  FaRegFileAlt,
  FaUserCheck,
  FaClipboardCheck,
  FaRegBuilding,
  FaRegAddressCard,
  FaRegClock,
  FaClipboardList,
  FaRegPaperPlane,
} from "react-icons/fa";

const EventBasedCompliances = () => {
  const compliances = [
    {
      title: "1. Director KYC (Know Your Customer)",
      icon: <FaUserCheck size={28} className="text-blue-500" />,
      content: (
        <p>
          Director KYC is a mandatory compliance requirement for all directors
          of a company to submit their personal details, including proof of
          identity and address, to the Ministry of Corporate Affairs (MCA). This
          ensures that the MCA has updated and accurate records of all company
          directors. Failure to comply with this requirement may result in
          disqualification.
        </p>
      ),
    },
    {
      title: "2. Appointment of Auditor",
      icon: <FaClipboardCheck size={28} className="text-green-500" />,
      content: (
        <p>
          Every company is required to appoint an auditor to examine the
          financial records, ensure legal compliance, and assess the financial
          statements. This appointment typically happens at the company's Annual
          General Meeting (AGM) and must be notified to the MCA. The appointed
          auditor ensures transparency and compliance with statutory
          regulations.
        </p>
      ),
    },
    {
      title: "3. Change in Object Clause (MOA & AOA)",
      icon: <FaRegFileAlt size={28} className="text-orange-500" />,
      content: (
        <p>
          A change in the object clause refers to altering the main business
          activities of the company as outlined in its Memorandum of Association
          (MOA). This requires shareholder approval through a special resolution
          and filing with the MCA. The Articles of Association (AOA) may also
          need amendment to reflect these changes.
        </p>
      ),
    },
    {
      title: "4. Change in Name Clause",
      icon: <FaRegBuilding size={28} className="text-red-500" />,
      content: (
        <p>
          If a company decides to change its name, it must amend the name clause
          in the Memorandum of Association (MOA). The change requires
          shareholder approval through a special resolution and registration
          with the Registrar of Companies (ROC).
        </p>
      ),
    },
    {
      title: "5. Change in Registered Office",
      icon: <FaRegAddressCard size={28} className="text-purple-500" />,
      content: (
        <p>
          Changing the registered office of a company involves altering its
          official address as listed with the MCA. This change may involve
          shifting within the same state, to another state, or even outside
          India. Depending on the type of shift, specific regulatory approvals
          and documentation are required.
        </p>
      ),
    },
    {
      title: "6. Removal of Director",
      icon: <FaRegClock size={28} className="text-teal-500" />,
      content: (
        <p>
          A company can remove a director before the expiry of their term
          through shareholder approval in a general meeting. The process
          involves serving notice to the director, providing the right to
          respond, and passing an ordinary resolution. The removal must be
          communicated to the MCA.
        </p>
      ),
    },
    {
      title: "7. Appointment & Resignation of Director",
      icon: <FaClipboardList size={28} className="text-pink-500" />,
      content: (
        <p>
          The appointment of a director involves adding a new individual to the
          Board of Directors, requiring shareholder approval. Resignation, on
          the other hand, occurs when a director voluntarily steps down from
          their position. Both processes require filing forms with the MCA to
          update the company's records.
        </p>
      ),
    },
    {
      title: "8. Change in Share Capital",
      icon: <FaRegPaperPlane size={28} className="text-indigo-500" />,
      content: (
        <p>
          This refers to any increase or reduction in the company’s authorized
          or issued share capital. Changes in share capital, such as issuing new
          shares, splitting shares, or converting debentures into shares,
          require shareholder approval and notification to the MCA.
        </p>
      ),
    },
    {
      title: "9. Change in Directors",
      icon: <FaUserCheck size={28} className="text-blue-500" />,
      content: (
        <p>
          When there is a change in the composition of the Board of Directors,
          either through appointment, removal, or resignation, the company must
          update the MCA records. This is essential to maintain proper
          governance and compliance with corporate laws.
        </p>
      ),
    },
    {
      title: "10. Appointment of Managing Director",
      icon: <FaClipboardCheck size={28} className="text-green-500" />,
      content: (
        <p>
          A managing director is appointed by the board to take charge of
          day-to-day operations. The appointment requires shareholder approval,
          filing with the MCA, and must adhere to guidelines on term limits and
          qualifications.
        </p>
      ),
    },
    {
      title: "11. Change of Auditor",
      icon: <FaRegFileAlt size={28} className="text-orange-500" />,
      content: (
        <p>
          If a company wants to change its auditor, it must gain approval from
          shareholders through a resolution and notify the MCA. The new auditor
          is responsible for continuing the examination of the company’s
          financials.
        </p>
      ),
    },
    {
      title: "12. Change in Authorized Capital",
      icon: <FaRegBuilding size={28} className="text-red-500" />,
      content: (
        <p>
          Authorized capital refers to the maximum share capital a company is
          authorized to issue. To change it, the company needs to pass a
          resolution and file the necessary forms with the MCA, along with
          amending the Memorandum of Association (MOA).
        </p>
      ),
    },
    {
      title: "13. Change in Name of Company",
      icon: <FaRegAddressCard size={28} className="text-purple-500" />,
      content: (
        <p>
          Changing the name of the company involves passing a special resolution
          by the shareholders and obtaining approval from the MCA. The new name
          must be unique and compliant with regulatory norms.
        </p>
      ),
    },
    {
      title: "14. Issue & Transfer of Shares",
      icon: <FaRegClock size={28} className="text-teal-500" />,
      content: (
        <p>
          The issuance of shares involves creating new shares for investors,
          while the transfer refers to the movement of ownership from one
          shareholder to another. Both processes require documentation,
          shareholder approval, and filings with the MCA.
        </p>
      ),
    },
    {
      title: "15. Company Closure",
      icon: <FaClipboardList size={28} className="text-pink-500" />,
      content: (
        <p>
          Company closure, or winding up, involves formally dissolving the
          company’s legal existence. This could be voluntary or through
          regulatory intervention. The process includes settling debts,
          distributing assets, and filing documents with the MCA for
          deregistration.
        </p>
      ),
    },
    {
      title: "16. Legal Drafting",
      icon: <FaRegPaperPlane size={28} className="text-indigo-500" />,
      content: (
        <p>
          Legal drafting refers to the process of preparing various legal
          documents like contracts, agreements, resolutions, and notices
          required for compliance. Proper drafting ensures that company
          documents are in line with legal standards and regulatory
          requirements.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white max-w-5xl dark:bg-neutral-900 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Event Based Compliances
      </h1>
      <p className="text-lg mb-6">
        Here is a breakdown of the terms related to company-based compliances:
      </p>

      <ul className="space-y-4 w-full">
        {compliances.map((compliance, index) => (
          <li
            key={index}
            className="flex items-start border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {compliance.icon}
            <div className="ml-3">
              <h2 className="text-xl font-semibold">{compliance.title}</h2>
              {compliance.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventBasedCompliances;
