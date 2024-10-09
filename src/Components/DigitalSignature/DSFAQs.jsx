import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DSFAQs = () => {
  const faqs = [
    {
      question: "What is a Digital Signature Certificate (DSC)?",
      answer:
        "A DSC is a secure digital key issued by a certifying authority to verify the identity of the certificate holder and authenticate digital transactions.",
    },
    {
      question: "Why do I need a DSC for my business?",
      answer:
        "A DSC is necessary for filing e-forms with the Ministry of Corporate Affairs (MCA), e-tenders, signing documents online, filing GST returns, and more. It ensures the authenticity of electronic documents.",
    },
    {
      question: "How can I apply for a DSC in Arunachal Pradesh?",
      answer:
        "You can apply for a DSC through any authorized certifying authority. Sigma Solutions can assist in the application process and handle all necessary paperwork on your behalf.",
    },
    {
      question: "How long is a DSC valid?",
      answer: "A DSC is valid for 1-2 years, after which it must be renewed.",
    },
    {
      question: "What documents are required for obtaining a DSC?",
      answer: (
        <>
          <p>The required documents include:</p>
          <ul className="list-decimal ml-6">
            <li>Proof of identity (PAN, Aadhaar)</li>
            <li>Proof of address</li>
            <li>Passport-size photographs</li>
            <li>Authorization letters for companies</li>
          </ul>
        </>
      ),
    },
    {
      question: "What is the difference between Class 2 and Class 3 DSC?",
      answer: (
        <>
          <p>
            Class 2 DSC is used for e-filing tax returns and ROC forms, while
            Class 3 DSC is required for high-security transactions like
            e-tendering and auctions.
          </p>
        </>
      ),
    },
    {
      question: "Can Sigma Solutions help in obtaining a DSC for my company?",
      answer:
        "Yes, Sigma Solutions provides end-to-end support for obtaining DSCs, including document preparation, application submission, and issuance.",
    },
    {
      question: "Can I use a DSC to file my tax returns?",
      answer:
        "Yes, DSC is required for filing corporate tax returns and is also optional for individuals filing returns online.",
    },
    {
      question: "Can a DSC be used for multiple purposes?",
      answer:
        "Yes, depending on the class of DSC, it can be used for various purposes, including tax filing, signing documents, and participating in e-tenders.",
    },
    {
      question: "How secure is a DSC?",
      answer:
        "DSCs are highly secure and protect the integrity and authenticity of documents signed digitally, reducing the risk of tampering.",
    },
    {
      question: "What happens if my DSC expires?",
      answer:
        "Once expired, the DSC cannot be used for signing documents. You must renew it before its expiration to avoid disruptions in business operations.",
    },
    {
      question: "Can I renew my DSC before it expires?",
      answer:
        "Yes, you can renew your DSC before the expiry date, and Sigma Solutions can assist with the renewal process.",
    },
    {
      question: "Is physical verification required for obtaining a DSC?",
      answer:
        "For Class 3 DSC, in-person verification is typically required, whereas Class 2 DSC does not always need personal verification.",
    },
    {
      question: "What is the process of renewing a DSC?",
      answer:
        "The renewal process involves re-submitting the required documents and application to the certifying authority. Sigma Solutions can handle this for you.",
    },
    {
      question: "How long does it take to get a DSC issued?",
      answer:
        "The issuance of a DSC usually takes 2-5 working days after document verification and processing.",
    },
    {
      question: "Is a DSC legally binding?",
      answer:
        "Yes, DSCs are legally binding in India under the Information Technology Act, 2000.",
    },
    {
      question: "Can a DSC be used for filing GST returns?",
      answer:
        "Yes, DSC is required for company GST registrations and return filings.",
    },
    {
      question: "What are the fees for obtaining a DSC?",
      answer:
        "The fees depend on the certifying authority and the class of DSC. Sigma Solutions provides a clear breakdown of costs for obtaining or renewing a DSC.",
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
            Here are some common questions and answers about Digital Signature
            Certificates.
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

export default DSFAQs;
