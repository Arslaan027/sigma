import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const NGOFAQs = () => {
  const faqs = [
    {
      question: "What is an NGO, and why should I register one?",
      answer:
        "An NGO (Non-Governmental Organization) is a non-profit entity that works for the betterment of society. Registering your NGO provides it with legal recognition, allowing it to open bank accounts, apply for grants, and receive donations legally. Sigma Solutions helps aspiring NGOs through the entire registration process, ensuring compliance with all legal requirements.",
    },
    {
      question:
        "What are the different types of NGOs that can be registered in India?",
      answer: (
        <>
          <p>NGOs can be registered as:</p>
          <ul className="list-disc ml-6">
            <li>Trusts (under the Indian Trusts Act, 1882)</li>
            <li>Societies (under the Societies Registration Act, 1860)</li>
            <li>Section 8 Companies (under the Companies Act, 2013)</li>
          </ul>
          <p>
            Sigma Solutions offers expert guidance on selecting the right type
            of NGO structure based on your goals and operational plans.
          </p>
        </>
      ),
    },

    {
      question:
        "How do I decide which type of NGO is best for my organization?",
      answer: (
        <>
          <p>Each type has its advantages:</p>
          <ul className="list-disc ml-6">
            <li>Trusts: Suitable for long-term charitable work.</li>
            <li>
              Societies: Ideal for cultural, scientific, and charitable
              initiatives.
            </li>
            <li>
              Section 8 Companies: Best for organizations that require a
              corporate structure with stringent compliance.
            </li>
          </ul>
          <p>
            At Sigma Solutions, we assess your organization's objectives and
            suggest the best structure accordingly.
          </p>
        </>
      ),
    },
    {
      question: "What documents are required for NGO registration?",
      answer: (
        <>
          <p>The required documents include:</p>
          <ul className="list-disc ml-6">
            <li>
              For Trust: Trust deed, ID proofs of trustees, and office address
              proof.
            </li>
            <li>
              For Society: Memorandum of Association, list of members, and
              bylaws.
            </li>
            <li>
              For Section 8 Company: Memorandum and Articles of Association,
              Digital Signatures, and Director Identification Numbers (DINs).
            </li>
          </ul>
          <p>
            Sigma Solutions assists in preparing and verifying all necessary
            documents to avoid delays.
          </p>
        </>
      ),
    },
    {
      question:
        "How long does the NGO registration process take with Sigma Solutions?",
      answer: (
        <>
          <p>The timeframe depends on the type of NGO:</p>
          <ul className="list-disc ml-6">
            <li>Trust: 15-30 days</li>
            <li>Society: 20-30 days</li>
            <li>Section 8 Company: 30-45 days</li>
          </ul>
          <p>
            Sigma Solutions expedites the process by ensuring that all
            documentation and procedures are completed correctly from the start.
          </p>
        </>
      ),
    },
    {
      question: "Can I start fundraising as soon as my NGO is registered?",
      answer:
        "Yes, once your NGO is registered, you can start raising funds. However, for receiving foreign funds, FCRA (Foreign Contribution Regulation Act) registration is necessary. Sigma Solutions helps you with both the NGO registration and FCRA registration to ensure smooth fundraising operations.",
    },
    {
      question:
        "What is the role of trustees or members in an NGO, and how do we appoint them?",
      answer:
        "Trustees or members are responsible for the management and governance of the NGO. In a trust, trustees are appointed via the trust deed. In a society, a governing body is formed by its members. Section 8 companies have directors who act as governing members. Sigma Solutions helps you structure your management team to ensure effective governance.",
    },
    {
      question: "Can an NGO make profits or engage in business activities?",
      answer:
        "An NGO can generate profits, but all profits must be used solely for charitable purposes, as stipulated in its governing documents. Sigma Solutions advises you on permissible business activities for NGOs and helps ensure compliance with the legal framework.",
    },
    {
      question: "Can foreigners be involved in the management of my NGO?",
      answer:
        "Yes, foreigners can be involved, but you will need to comply with FCRA regulations if your NGO plans to receive foreign donations. Sigma Solutions ensures that your NGO is prepared for both local and international operations.",
    },
    {
      question: "Is it mandatory to register an NGO with the government?",
      answer:
        "While not mandatory, registering your NGO provides legal recognition, enabling it to open a bank account, apply for tax exemptions, and gain credibility with donors. Sigma Solutions simplifies this registration process and ensures all legalities are properly addressed.",
    },
    {
      question: "What are the tax benefits for a registered NGO?",
      answer:
        "Registered NGOs can apply for 12A registration, which exempts them from paying income tax. Additionally, 80G certification allows donors to claim tax deductions for donations made to the NGO. Sigma Solutions assists in securing these tax exemptions for your NGO.",
    },
    {
      question: "Can I convert my existing entity into an NGO?",
      answer:
        "Yes, existing entities like trusts or societies can be converted into Section 8 companies or other forms of NGOs, depending on the need. Sigma Solutions provides guidance on converting or restructuring your existing entity to suit your objectives.",
    },
    {
      question:
        "Does Sigma Solutions offer assistance with post-registration compliance?",
      answer:
        "Yes, Sigma Solutions offers ongoing support to ensure compliance with statutory requirements, including annual returns filing, maintaining accounts, auditing, and meeting FCRA requirements if applicable.",
    },
    {
      question: "What is FCRA registration, and do I need it for my NGO?",
      answer:
        "FCRA registration is mandatory if your NGO intends to receive foreign funds. Sigma Solutions can help you apply for FCRA registration once your NGO is operational and meets the eligibility criteria.",
    },
    {
      question: "Can an NGO registered in India operate internationally?",
      answer:
        "Yes, an NGO registered in India can operate internationally and accept foreign donations, but it must comply with FCRA regulations. Sigma Solutions guides you through the necessary steps to ensure your NGO meets international operational standards.",
    },
    {
      question:
        "How does Sigma Solutions help in drafting the NGO's objectives and mission statement?",
      answer:
        "A clear and legally compliant mission statement is crucial for NGO registration. Sigma Solutions collaborates with you to draft precise objectives aligned with your goals and ensures they are acceptable to registration authorities.",
    },
    {
      question:
        "How can Sigma Solutions assist with fundraising and grant applications for my NGO?",
      answer:
        "Sigma Solutions not only handles your registration but also offers post-registration services, including advising on fundraising strategies and assisting in applying for grants and CSR funds from corporate entities.",
    },
    {
      question:
        "What are the legal obligations after registering an NGO with Sigma Solutions?",
      answer:
        "Post-registration, your NGO must maintain proper records, file annual reports, and comply with tax laws. Sigma Solutions offers a comprehensive post-registration service to help you stay compliant with all legal obligations.",
    },
    {
      question:
        "Can Sigma Solutions help me with obtaining 80G and 12A tax exemption certificates for my NGO?",
      answer:
        "Yes, Sigma Solutions specializes in securing tax exemptions under 80G and 12A, which are essential for maximizing donor contributions and minimizing your NGO’s tax liabilities.",
    },
    {
      question: "Why should I choose Sigma Solutions for NGO registration?",
      answer:
        "Sigma Solutions is a one-stop solution for NGO registration, offering a seamless process from document preparation to legal compliance. With expertise in different types of NGO structures, ongoing compliance support, and a focus on transparency, Sigma Solutions ensures that your NGO gets off to the best possible start and remains legally compliant throughout its journey.",
    },
  ];

  return (
    <div className="bg-gray-300 py-16 px-4 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 dark:text-gray-200">
            Here are some common questions and answers about our NGO
            Registration services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} className="bg-white dark:bg-neutral-700">
              <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Typography className="font-bold text-black">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-black">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NGOFAQs;
