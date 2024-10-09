import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TCFAQs = () => {
  const faqs = [
    {
      question: "What is TC Registration, and why is it important?",
      answer:
        "TC Registration is a process through which businesses can register their trade for legal recognition and operational authorization. It helps ensure compliance with regulations, protects business interests, and enhances credibility in the market.",
    },
    {
      question: "Who can apply for TC Registration?",
      answer:
        "Any individual or entity intending to operate a trade, whether as a sole proprietor, partnership, or corporation, can apply for TC Registration. It is essential to meet the eligibility criteria set by the governing authority.",
    },
    {
      question: "What are the benefits of TC Registration?",
      answer:
        "TC Registration offers numerous benefits including legal protection, access to government schemes, eligibility for loans and grants, and the ability to participate in tenders and contracts.",
    },
    {
      question: "What documents are required for TC Registration?",
      answer: (
        <>
          <p>The documents required include:</p>
          <ul className="list-decimal ml-6">
            <li>Identity proof (Aadhar, PAN, etc.)</li>
            <li>Address proof of the business</li>
            <li>Business incorporation certificate (if applicable)</li>
            <li>Proof of trade name (if applicable)</li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does it take to complete TC Registration?",
      answer:
        "The TC Registration process usually takes 2 to 4 weeks, depending on the completeness of the application and document verification. We ensure that your application is thorough to minimize delays.",
    },
    {
      question: "Is there a fee for TC Registration?",
      answer:
        "The registration fee may vary based on the type of trade and the governing body. It is typically a nominal fee, and additional costs may arise if you opt for professional assistance.",
    },
    {
      question: "Can foreign entities register for TC?",
      answer:
        "Yes, foreign entities can register for TC if they comply with local regulations and fulfill the necessary requirements for doing business in the country.",
    },
    {
      question: "How does TC Registration help in obtaining financing?",
      answer:
        "Having a TC Registration improves your credibility and trustworthiness, making it easier to secure loans or funding from banks and financial institutions.",
    },
    {
      question: "What happens if my TC Registration application is rejected?",
      answer:
        "If your application is rejected, you will be provided with the reasons for rejection. You can revise your application and reapply after addressing the identified issues.",
    },
    {
      question: "Are there any compliance requirements after TC Registration?",
      answer:
        "Yes, businesses must comply with annual filings, tax submissions, and other regulatory requirements to maintain their TC status. We offer ongoing support to help you stay compliant.",
    },
    {
      question: "Can an existing business apply for TC Registration?",
      answer:
        "Yes, existing businesses can apply for TC Registration as long as they meet the eligibility criteria and comply with the required regulations.",
    },
    {
      question: "Does TC Registration provide networking opportunities?",
      answer:
        "Yes, registered businesses can network with industry peers, access support groups, and participate in events that facilitate business growth.",
    },
    {
      question: "How can I choose the right consultant for TC Registration?",
      answer:
        "When choosing a consultant, look for experience, positive reviews, and a clear understanding of your business needs. We offer tailored assistance to guide you through the registration process smoothly.",
    },
    {
      question: "What are the common challenges faced during TC Registration?",
      answer:
        "Common challenges include incomplete documentation, misunderstanding of eligibility criteria, and delays in processing. Our team helps you navigate these challenges effectively.",
    },
    {
      question: "Is there a limit on the number of TCs a person can register?",
      answer:
        "No, there is no specific limit on the number of TCs a person can register, provided each application meets the eligibility criteria.",
    },
    {
      question: "Why choose us for TC Registration services?",
      answer:
        "We provide comprehensive, professional services for TC Registration, ensuring that your application is accurate, complete, and compliant, maximizing your chances for approval.",
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
            Here are some common questions and answers about TC Registration.
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

export default TCFAQs;
