import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const UDRFAQs = () => {
  const faqs = [
    {
      question:
        "What is Udyam Registration, and why is it important for my business?",
      answer:
        "Udyam Registration is a government initiative aimed at simplifying the registration process for Micro, Small, and Medium Enterprises (MSMEs) in India. It is important because it provides access to government schemes, subsidies, and easier loan approvals. Sigma Solutions helps businesses navigate the Udyam Registration process efficiently, ensuring you receive all the benefits that come with being recognized as an MSME.",
    },
    {
      question: "Who is eligible for Udyam Registration?",
      answer:
        "Any business entity—whether proprietorship, partnership, LLP, private limited company, or other structures—engaged in manufacturing or services is eligible. Sigma Solutions assesses your business eligibility based on investment in plant and machinery or equipment, and annual turnover, ensuring that you meet the criteria.",
    },
    {
      question: "What are the key benefits of Udyam Registration?",
      answer:
        "The key benefits include access to collateral-free loans, tax benefits, subsidies on patent registration, lower interest rates, and protection against delayed payments. Sigma Solutions helps you unlock these benefits by completing your Udyam Registration quickly and accurately.",
    },
    {
      question: "What documents are required for Udyam Registration?",
      answer:
        "You will need the Aadhaar number of the business owner, PAN details, and GSTIN (if applicable). No complex paperwork is required, and Sigma Solutions guides you in gathering and submitting the necessary information.",
    },
    {
      question:
        "How long does it take to complete Udyam Registration with Sigma Solutions?",
      answer:
        "With Sigma Solutions, the Udyam Registration process is typically completed within 1 to 3 working days, provided all the necessary details and documents are in place.",
    },
    {
      question: "Is Udyam Registration free of cost?",
      answer:
        "Yes, Udyam Registration is free of charge on the government portal. However, Sigma Solutions offers expert assistance to help you avoid mistakes and complete the process smoothly.",
    },
    {
      question:
        "Can I register multiple businesses under one Udyam Registration?",
      answer:
        "No, each business entity must be registered separately under Udyam Registration. Sigma Solutions assists with registering multiple business ventures, ensuring each one is compliant with the regulations.",
    },
    {
      question:
        "What happens if my business exceeds the MSME thresholds for investment and turnover?",
      answer:
        "If your business crosses the threshold limits for an MSME, you must update your Udyam Registration accordingly. Sigma Solutions helps you monitor these changes and ensures that your registration remains compliant.",
    },
    {
      question:
        "How can Sigma Solutions assist if my business was previously registered under Udyog Aadhaar?",
      answer:
        "Sigma Solutions can assist in migrating your business from Udyog Aadhaar to Udyam Registration. We ensure a seamless transition and provide ongoing support for compliance with the new system.",
    },
    {
      question:
        "What are the investment and turnover criteria for Udyam Registration?",
      answer:
        "For Micro Enterprises, investment should be up to ₹1 crore and turnover up to ₹5 crore. For Small Enterprises, investment should be up to ₹10 crore and turnover up to ₹50 crore. For Medium Enterprises, investment should be up to ₹50 crore and turnover up to ₹250 crore. Sigma Solutions helps you classify your business correctly based on these criteria.",
    },
    {
      question:
        "Can Sigma Solutions help businesses in all sectors with Udyam Registration?",
      answer:
        "Yes, Sigma Solutions assists businesses across all sectors, including manufacturing and services. Whether you are a small service provider or a mid-sized manufacturer, we provide expert guidance tailored to your industry.",
    },
    {
      question: "Is Udyam Registration mandatory for all businesses?",
      answer:
        "Udyam Registration is not mandatory, but it is highly recommended for MSMEs to access government schemes, subsidies, and benefits. Sigma Solutions helps businesses understand the advantages of registration and assists in completing the process efficiently.",
    },
    {
      question: "How does Udyam Registration help with loan applications?",
      answer:
        "With Udyam Registration, MSMEs can apply for collateral-free loans and receive priority sector lending from banks. Sigma Solutions helps you leverage your Udyam status to secure loans with favorable terms and conditions.",
    },
    {
      question: "What is the process of updating my Udyam Registration?",
      answer:
        "If there are changes in your business, such as increased turnover, investment, or a change in ownership, Sigma Solutions helps you update your Udyam Registration to reflect these changes and maintain compliance with MSME guidelines.",
    },
    {
      question:
        "What are the penalties for providing false information during Udyam Registration?",
      answer:
        "Providing false information during Udyam Registration can result in penalties, including fines and disqualification from government schemes. Sigma Solutions ensures that your registration is accurate and truthful, helping you avoid any legal complications.",
    },
    {
      question:
        "How can I track the status of my Udyam Registration application?",
      answer:
        "Once Sigma Solutions submits your Udyam Registration application, we provide you with the necessary tracking details. You can also check the status directly on the Udyam Registration portal using your application number.",
    },
    {
      question: "Can foreign-owned companies register under Udyam?",
      answer:
        "Only Indian-owned businesses or those with Indian directors/partners can register under Udyam. Sigma Solutions helps businesses with foreign involvement understand their eligibility and navigate the registration requirements if they qualify.",
    },
    {
      question:
        "What is the validity of Udyam Registration, and do I need to renew it?",
      answer:
        "Udyam Registration is valid for a lifetime and does not need to be renewed. Sigma Solutions ensures your registration remains up-to-date with any changes to your business, ensuring continued compliance with MSME regulations.",
    },
    {
      question: "Can Udyam Registration be used for government tenders?",
      answer:
        "Yes, Udyam-registered MSMEs receive various benefits in government tenders, including exemptions from Earnest Money Deposit (EMD) and preferential treatment. Sigma Solutions helps MSMEs take full advantage of their Udyam status when bidding for government contracts.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for Udyam Registration services?",
      answer:
        "Sigma Solutions offers expert, end-to-end assistance for Udyam Registration. From understanding eligibility to completing the registration and managing ongoing compliance, we provide personalized support to ensure your business can fully benefit from being recognized as an MSME.",
    },
  ];

  return (
    <div>
      <div className="bg-gray-300 py-16 px-4 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 dark:text-gray-200">
              Here are some common questions and answers about our Udyam
              Registration services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
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
    </div>
  );
};

export default UDRFAQs;
