import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const GSTFAQs = () => {
  const faqs = [
    {
      question:
        "What is GST registration, and why is it necessary for my business?",
      answer:
        "GST (Goods and Services Tax) registration is a mandatory tax registration for businesses involved in the supply of goods or services in India. Sigma Solutions helps businesses ensure compliance with GST regulations, enabling them to collect and remit taxes to the government, which is crucial for legal operations.",
    },
    {
      question: "Who is required to register for GST?",
      answer:
        "Businesses with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states) are required to register for GST. Sigma Solutions provides expert guidance to determine if your business falls under the mandatory registration category and assists in the registration process.",
    },
    {
      question: "What are the benefits of GST registration for my business?",
      answer:
        "By registering for GST through Sigma Solutions, your business can claim input tax credits, legally collect GST from customers, expand operations across states, and enhance credibility with clients and partners.",
    },
    {
      question:
        "How long does it take to complete GST registration with Sigma Solutions?",
      answer:
        "The time frame for GST registration usually ranges from 5 to 7 working days, depending on the correctness of the documents and details provided. Sigma Solutions ensures a quick and smooth registration process by verifying all necessary information before submission.",
    },
    {
      question: "What documents are required for GST registration?",
      answer:
        "For GST registration, you will need your PAN card, proof of business address, Aadhaar card, bank account details, and photographs of the business owner(s). Sigma Solutions assists in gathering the required documentation and submits it on your behalf.",
    },
    {
      question:
        "How can Sigma Solutions help if I’m already registered for another tax system (like VAT or Service Tax)?",
      answer:
        "If your business was previously registered under VAT, Service Tax, or other indirect tax systems, Sigma Solutions helps you transition smoothly to GST by migrating your existing registration and ensuring compliance with the new tax regime.",
    },
    {
      question:
        "What are the different types of GST registrations Sigma Solutions can assist with?",
      answer:
        "Sigma Solutions offers support for various GST registration types, including Regular GST, Composition Scheme, and Casual Taxable Person registration, depending on your business structure and turnover.",
    },
    {
      question:
        "What is the Composition Scheme, and should my business opt for it?",
      answer:
        "The Composition Scheme is designed for small businesses with a turnover of up to ₹1.5 crore, allowing them to pay tax at a lower rate without availing input tax credits. Sigma Solutions helps you determine whether your business qualifies for the Composition Scheme and explains its pros and cons.",
    },
    {
      question: "How do I track the status of my GST registration application?",
      answer:
        "Once Sigma Solutions submits your GST registration application, you can track its status through the GST portal using the ARN (Application Reference Number) provided by us. We also monitor the process and update you regularly.",
    },
    {
      question: "What happens if I fail to register for GST when required?",
      answer:
        "If a business fails to register for GST despite being eligible, it can face penalties, legal complications, and interest on unpaid taxes. Sigma Solutions ensures you meet all legal obligations, avoiding penalties and non-compliance issues.",
    },
    {
      question:
        "Can Sigma Solutions help with GST registration for businesses operating in multiple states?",
      answer:
        "Yes, Sigma Solutions provides multi-state GST registration services. If your business operates in more than one state, we assist with obtaining separate GST registrations for each location as required by law.",
    },
    {
      question:
        "What is the penalty for late registration or failure to register for GST?",
      answer:
        "The penalty for failure to register for GST is 10% of the tax due or ₹10,000, whichever is higher. Sigma Solutions helps you avoid such penalties by ensuring timely and accurate registration.",
    },
    {
      question: "What is GSTIN, and how is it different from PAN?",
      answer:
        "GSTIN (Goods and Services Tax Identification Number) is a unique 15-digit number assigned to businesses registered under GST. While PAN is your business’s identification for income tax purposes, GSTIN is used for indirect tax transactions. Sigma Solutions ensures you get your GSTIN through the registration process.",
    },
    {
      question: "Do I need to renew my GST registration periodically?",
      answer:
        "GST registration does not require renewal as it is permanent unless canceled or surrendered. However, Sigma Solutions provides ongoing support to help you maintain compliance with GST regulations, including regular filings and updates.",
    },
    {
      question:
        "How does GST registration impact the pricing of my products or services?",
      answer:
        "Once registered for GST, you will need to charge GST on your products or services. Sigma Solutions helps you adjust your pricing structure, considering the tax implications, to ensure that your pricing remains competitive while maintaining compliance.",
    },
    {
      question:
        "Can Sigma Solutions assist with GST registration for e-commerce businesses?",
      answer:
        "Yes, Sigma Solutions offers specialized GST registration services for e-commerce businesses. We help online sellers comply with the GST provisions specific to e-commerce platforms and ensure their smooth operation.",
    },
    {
      question:
        "What is the process of canceling GST registration, and can Sigma Solutions assist with it?",
      answer:
        "If your business is no longer liable for GST or has closed down, you can apply for the cancellation of your GST registration. Sigma Solutions assists with filing for cancellation and ensuring that all final returns are submitted.",
    },
    {
      question:
        "How does GST registration affect input tax credits for my business?",
      answer:
        "Once you’re GST registered, your business becomes eligible to claim input tax credits on purchases and expenses. Sigma Solutions helps you manage your GST filings to ensure you’re taking full advantage of input tax credits and reducing your overall tax liability.",
    },
    {
      question:
        "Can Sigma Solutions help me file GST returns after registration?",
      answer:
        "Yes, after completing your GST registration, Sigma Solutions provides comprehensive support with regular GST filings. We ensure timely submission of GSTR-1, GSTR-3B, and other relevant forms to avoid penalties and maintain compliance.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for GST registration services?",
      answer:
        "Sigma Solutions offers end-to-end support for GST registration, from documentation and filing to post-registration services such as return filing and compliance management. Our expertise ensures that the GST registration process is hassle-free, saving you time and preventing any legal complications.",
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
            Here are some common questions and answers about our GST
            Registration services.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{faq.question}</Typography>
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

export default GSTFAQs;
