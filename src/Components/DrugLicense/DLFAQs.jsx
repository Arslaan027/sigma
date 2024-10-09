import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DLFAQs = () => {
  const faqs = [
    {
      question: "What is a Drug License, and why do I need it for my business?",
      answer:
        "A Drug License is a legal permit required for businesses involved in the manufacture, sale, distribution, or trade of drugs and pharmaceuticals in India. Sigma Solutions helps businesses obtain this license to comply with the Drugs and Cosmetics Act, 1940, ensuring safe and legal operations in the pharmaceutical sector.",
    },
    {
      question: "Who needs to apply for a Drug License?",
      answer:
        "Any entity engaged in the production, distribution, sale, or import/export of drugs, including pharmaceuticals, cosmetics, and medical devices, must obtain a Drug License. This includes manufacturers, wholesalers, retailers, pharmacies, and importers. Sigma Solutions guides you through determining which type of license your business requires.",
    },
    {
      question:
        "What types of Drug Licenses are available, and how does Sigma Solutions help?",
      answer: (
        <>
          <p>
            There are several types of Drug Licenses based on your business
            model:
          </p>
          <ul className="list-decimal ml-6">
            <li>Manufacturing License for drug manufacturers</li>
            <li>Wholesale License for distributors and suppliers</li>
            <li>Retail License for pharmacies and retail sellers</li>
            <li>
              Loan License for businesses using another facility to manufacture
              drugs
            </li>
          </ul>
          <p>
            Sigma Solutions assists in identifying the right license for your
            business and helps with the entire application process.
          </p>
        </>
      ),
    },
    {
      question: "What documents are required for Drug License Registration?",
      answer: (
        <>
          <p>The documents required include:</p>
          <ul className="list-decimal ml-6">
            <li>PAN card of the business entity or individual</li>
            <li>Proof of business premises (ownership or rental agreement)</li>
            <li>Site plan of the premises</li>
            <li>
              Qualification certificates of the pharmacist or technical staff
            </li>
            <li>Affidavit of non-conviction for the owner</li>
          </ul>
          <p>
            Sigma Solutions provides a complete checklist and assists you in
            gathering and submitting these documents for a smooth application
            process.
          </p>
        </>
      ),
    },
    {
      question:
        "How long does it take to get a Drug License through Sigma Solutions?",
      answer:
        "The process typically takes around 30 to 60 days, depending on the type of license and the regulatory checks involved. Sigma Solutions ensures that your application is filed correctly and helps expedite the process by liaising with authorities.",
    },
    {
      question: "Do I need different Drug Licenses for different states?",
      answer:
        "Yes, if your business operates in multiple states, you will need to obtain a Drug License in each state where you plan to manufacture, distribute, or sell drugs. Sigma Solutions can help you manage the applications for multiple states efficiently.",
    },
    {
      question: "Is a Drug License mandatory for online pharmacies?",
      answer:
        "Yes, online pharmacies must have a valid Retail Drug License as well as other approvals to operate legally. Sigma Solutions helps online pharmacies navigate the registration process, ensuring compliance with all legal requirements.",
    },
    {
      question:
        "What are the qualifications required for obtaining a Retail Drug License?",
      answer:
        "For a Retail Drug License, you must employ a registered pharmacist who holds the necessary qualifications. Sigma Solutions helps you ensure that your business complies with the staffing and qualification requirements for obtaining the license.",
    },
    {
      question: "How does Sigma Solutions assist in Drug License renewal?",
      answer:
        "Drug Licenses are generally valid for 5 years and must be renewed before they expire. Sigma Solutions tracks your license validity and handles the renewal process on your behalf, ensuring no lapses in compliance.",
    },
    {
      question: "What is the role of CDSCO in Drug License Registration?",
      answer:
        "The Central Drugs Standard Control Organization (CDSCO) is the national regulatory authority responsible for approving licenses related to the manufacturing, import, and sale of drugs. Sigma Solutions ensures that your application complies with CDSCO guidelines for approval.",
    },
    {
      question: "What are the penalties for operating without a Drug License?",
      answer:
        "Operating without a valid Drug License can lead to hefty penalties, including fines, suspension of business operations, or legal action. Sigma Solutions helps you avoid these risks by ensuring your business is fully compliant with all regulatory requirements.",
    },
    {
      question:
        "Can Sigma Solutions help with Drug License modification or transfer?",
      answer:
        "Yes, if there are changes to your business, such as relocation, changes in ownership, or updates to the product line, Sigma Solutions assists in modifying or transferring your existing Drug License to ensure continued compliance with regulatory standards.",
    },
    {
      question:
        "What happens during a Drug License inspection, and how can Sigma Solutions help me prepare?",
      answer:
        "During a Drug License inspection, the authorities will assess your premises for hygiene, storage conditions, documentation, and compliance with safety regulations. Sigma Solutions helps you prepare for the inspection by ensuring your facilities meet all legal requirements, minimizing the risk of penalties.",
    },
    {
      question:
        "How does Sigma Solutions assist in obtaining a Manufacturing License?",
      answer:
        "Sigma Solutions guides manufacturers through the application process for obtaining a Manufacturing Drug License by helping with documentation, ensuring compliance with regulatory standards, and managing site inspections to secure approval.",
    },
    {
      question: "Can a Drug License be revoked?",
      answer:
        "Yes, a Drug License can be revoked if your business violates any of the terms set out in the Drugs and Cosmetics Act, such as selling counterfeit drugs, failing to maintain proper records, or non-compliance with quality standards. Sigma Solutions helps you avoid these pitfalls by ensuring ongoing compliance with regulations.",
    },
    {
      question: "Is a separate license required for the sale of cosmetics?",
      answer:
        "Yes, cosmetics also fall under the purview of the Drugs and Cosmetics Act, and you need a specific license to manufacture or sell cosmetics. Sigma Solutions helps you obtain the appropriate licenses for cosmetics alongside your drug-related licenses.",
    },
    {
      question: "What are the costs involved in Drug License Registration?",
      answer:
        "The cost of obtaining a Drug License varies depending on the type of license, the scale of your business, and the location. Sigma Solutions provides a clear breakdown of costs and offers affordable assistance to help you navigate the registration process.",
    },
    {
      question: "Can Sigma Solutions help with importing/exporting drugs?",
      answer:
        "Yes, if you are involved in importing or exporting drugs, Sigma Solutions can assist you in obtaining the Import/Export License in addition to your Drug License. We ensure that you comply with both domestic and international regulations for drug trade.",
    },
    {
      question:
        "What are the storage requirements for drugs under the Drugs and Cosmetics Act?",
      answer:
        "Drugs must be stored in hygienic, temperature-controlled environments to maintain their efficacy. Sigma Solutions helps you understand and comply with these storage requirements, ensuring your premises meet the legal standards during inspections.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for Drug License Registration services?",
      answer:
        "Sigma Solutions offers expert guidance throughout the Drug License Registration process, from documentation and application submission to compliance and inspection preparation. Our in-depth knowledge of the pharmaceutical sector ensures that your business obtains the necessary licenses smoothly and operates within legal frameworks, avoiding any regulatory issues.",
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
            Here are some common questions and answers about our Drug License
            Registration services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DLFAQs;
