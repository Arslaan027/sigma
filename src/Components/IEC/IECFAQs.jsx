import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const IECFAQs = () => {
  const faqs = [
    {
      question:
        "What is IEC Registration, and why do I need it for my business?",
      answer:
        "IEC (Import Export Code) registration is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT). It is mandatory for businesses involved in the import or export of goods and services. Sigma Solutions helps businesses obtain IEC registration, ensuring legal compliance and access to international trade opportunities.",
    },
    {
      question: "Who needs to apply for IEC Registration?",
      answer:
        "Any business engaged in import and export activities in India, including individuals, proprietorships, partnerships, LLPs, and companies, must apply for IEC registration. Sigma Solutions helps all types of businesses determine their eligibility and file for IEC registration.",
    },
    {
      question: "Can individuals apply for IEC, or is it only for companies?",
      answer:
        "Yes, individuals can also apply for IEC if they are involved in import or export activities. Sigma Solutions guides individuals through the registration process, ensuring a seamless experience even for first-time applicants.",
    },
    {
      question: "What documents are required for IEC Registration?",
      answer: (
        <>
          <p>The key documents include:</p>
          <ul className="list-decimal ml-6">
            <li>PAN card of the individual or business entity.</li>
            <li>Aadhaar card (for individuals or proprietors).</li>
            <li>
              Business registration documents (for companies, LLPs,
              partnerships).
            </li>
            <li>Bank account details and a cancelled cheque.</li>
          </ul>
        </>
      ),
    },
    {
      question:
        "How long does it take to get IEC Registration through Sigma Solutions?",
      answer:
        "The process typically takes 1 to 5 working days after submission, provided all documents are in order. Sigma Solutions ensures that the application is filed correctly, speeding up the approval process.",
    },
    {
      question: "Is IEC Registration mandatory for all businesses?",
      answer:
        "IEC Registration is mandatory for any business or individual involved in import or export of goods and services. Without an IEC, customs clearance will not be granted, and banks will not process international trade transactions. Sigma Solutions ensures your business is compliant with this requirement.",
    },
    {
      question: "Can Sigma Solutions help me modify my IEC after registration?",
      answer:
        "Yes, Sigma Solutions provides support for modifications to your IEC, such as updating business details (e.g., change in address or bank details). We help you keep your registration up to date to avoid any compliance issues.",
    },
    {
      question: "Does IEC need to be renewed periodically?",
      answer:
        "No, IEC registration is valid for a lifetime and does not require renewal. However, if there are changes to your business details, Sigma Solutions helps you update your IEC information.",
    },
    {
      question: "What is the cost of IEC Registration?",
      answer:
        "The government charges a nominal fee of ₹500 for IEC registration. Sigma Solutions offers competitive pricing for our expert assistance, ensuring a hassle-free registration process and saving you time.",
    },
    {
      question: "Can I apply for IEC without GST registration?",
      answer:
        "While GST registration is not mandatory for IEC, it is highly recommended for businesses involved in regular imports and exports. Sigma Solutions helps you understand whether your business needs GST along with IEC registration and assists with both processes.",
    },
    {
      question:
        "What are the benefits of obtaining IEC Registration through Sigma Solutions?",
      answer:
        "Sigma Solutions provides end-to-end assistance, ensuring that your IEC registration is completed smoothly and accurately. With our help, your business gains access to global markets, avails benefits under various government schemes, and remains compliant with trade regulations.",
    },
    {
      question: "Is IEC required for service exporters?",
      answer:
        "Yes, businesses providing services to foreign clients (such as IT, consultancy, and design services) must also obtain an IEC for processing international payments. Sigma Solutions assists service-based businesses with IEC registration, enabling them to operate internationally.",
    },
    {
      question: "Can one IEC be used for multiple businesses?",
      answer:
        "No, each business entity must have its own IEC. If you own multiple businesses under different legal entities, each must apply for a separate IEC. Sigma Solutions helps you register all your business entities seamlessly.",
    },
    {
      question: "What happens if I import/export without an IEC?",
      answer:
        "Without an IEC, you cannot clear goods through customs, and banks will not process your international trade transactions. Sigma Solutions ensures that you meet all regulatory requirements, preventing any disruptions in your import-export activities.",
    },
    {
      question: "Can Sigma Solutions help me track my IEC application status?",
      answer:
        "Yes, once Sigma Solutions submits your IEC application, we provide you with the tracking details so you can monitor the status of your application through the DGFT portal.",
    },
    {
      question:
        "What is the role of Sigma Solutions in ensuring my business complies with DGFT regulations?",
      answer:
        "Sigma Solutions offers comprehensive support for compliance with DGFT regulations, ensuring your business remains updated with any changes in import-export laws, and provides ongoing advice to keep your business legally compliant.",
    },
    {
      question:
        "Is an IEC required for importing/exporting goods for personal use?",
      answer:
        "No, an IEC is not required for goods imported or exported for personal use, provided they are not for commercial purposes. Sigma Solutions focuses on helping businesses that engage in regular trade activities.",
    },
    {
      question:
        "How does Sigma Solutions ensure that my IEC registration is error-free?",
      answer:
        "Sigma Solutions carefully reviews all documentation and information before submitting the IEC application to avoid errors and delays. We also provide step-by-step guidance to ensure the process is smooth and error-free.",
    },
    {
      question: "Can I surrender my IEC if I stop my import-export business?",
      answer:
        "Yes, you can surrender your IEC if your business no longer engages in import-export activities. Sigma Solutions assists with the formalities to surrender the code, ensuring that your business complies with the required procedures.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for IEC Registration services?",
      answer:
        "Sigma Solutions offers expert guidance throughout the IEC registration process, from document collection to final submission. Our in-depth knowledge of DGFT regulations and import-export laws ensures a smooth, hassle-free experience for businesses looking to expand into international markets.",
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
            Here are some common questions and answers about IEC Registration.
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

export default IECFAQs;
