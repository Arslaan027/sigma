import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const PatentFAQs = () => {
  const faqs = [
    {
      question: "What is a patent, and why should I register one?",
      answer:
        "A patent is a legal right granted for an invention, providing the owner with exclusive rights to use, sell, or license the invention. Sigma Solutions helps protect your innovative ideas by ensuring proper patent registration, preventing others from using or profiting from your invention without permission.",
    },
    {
      question: "What types of inventions can be patented?",
      answer:
        "Sigma Solutions can assist you in registering patents for new processes, machines, manufactured goods, or any useful improvements to existing inventions. The invention must be novel, non-obvious, and industrially applicable to qualify for a patent.",
    },
    {
      question: "How do I know if my invention is patentable?",
      answer:
        "Sigma Solutions offers patentability assessments and prior art searches to determine if your invention meets the necessary criteria for patent registration. We thoroughly review existing patents and advise you on the best course of action.",
    },
    {
      question: "What is the process for patent registration?",
      answer:
        "The patent registration process involves filing a patent application, conducting a patent search, and undergoing examination by the patent office. Sigma Solutions will guide you through each step, ensuring your application meets all legal requirements.",
    },
    {
      question: "How long does it take to get a patent registered?",
      answer:
        "Patent registration typically takes 2-3 years, depending on the complexity of the invention and any potential objections or examinations. Sigma Solutions manages the entire process, keeping you informed of all updates.",
    },
    {
      question: "Can I apply for a patent before my invention is complete?",
      answer:
        "Yes, Sigma Solutions can help you file a provisional patent application to secure an early filing date while you continue working on your invention. This gives you 12 months to complete your invention and file a full patent application.",
    },
    {
      question: "What are the costs involved in patent registration?",
      answer:
        "The cost of patent registration varies based on the type of patent and the jurisdiction where you're filing. Sigma Solutions offers competitive pricing and transparent fee structures to ensure you understand all costs upfront.",
    },
    {
      question: "How long is a patent valid, and can it be renewed?",
      answer:
        "In India, a patent is valid for 20 years from the date of filing, provided all renewal fees are paid. Sigma Solutions assists with timely renewals to ensure your patent rights remain protected throughout its full term.",
    },
    {
      question:
        "What is the difference between a provisional and a complete patent application?",
      answer:
        "A provisional application is a temporary filing that establishes an early filing date but does not provide full protection. Sigma Solutions helps you file a complete application within 12 months to secure full patent protection for your invention.",
    },
    {
      question: "Can I file for a patent in multiple countries?",
      answer:
        "Yes, you can apply for international patents through the Patent Cooperation Treaty (PCT) or individual country applications. Sigma Solutions helps you navigate the complex international patenting process to protect your invention globally.",
    },
    {
      question: "What if someone infringes on my patent rights?",
      answer:
        "Sigma Solutions offers legal support for enforcing your patent rights. We can help you take legal action against patent infringers, including filing lawsuits or negotiating settlements to protect your invention.",
    },
    {
      question: "Can I sell or license my patent?",
      answer:
        "Yes, patents can be sold or licensed to third parties. Sigma Solutions assists with patent transfer or licensing agreements, ensuring your intellectual property is properly protected and that you receive fair compensation.",
    },
    {
      question: "How do I maintain my patent after it is granted?",
      answer:
        "After a patent is granted, annual renewal fees must be paid to maintain it. Sigma Solutions helps with tracking deadlines and making timely payments to ensure your patent remains in force.",
    },
    {
      question: "What happens if my patent application is rejected?",
      answer:
        "If your patent application is rejected, Sigma Solutions will help you understand the reasons for rejection and guide you through the process of filing an appeal or revising the application to meet the necessary criteria.",
    },
    {
      question: "Do I need a patent if my invention is already in use?",
      answer:
        "Yes, even if your invention is already in use, obtaining a patent ensures you have the exclusive rights to commercialize it. Sigma Solutions helps protect your innovation by securing patent rights that prevent others from copying or profiting from your idea.",
    },
    {
      question: "What documentation is required for patent registration?",
      answer:
        "To file a patent application, you’ll need detailed descriptions, drawings, and technical specifications of your invention. Sigma Solutions provides a checklist and guides you through the preparation of these documents to ensure a successful application.",
    },
    {
      question: "Can I patent software or a mobile app?",
      answer:
        "In India, software cannot be patented unless it has a technical application. Sigma Solutions will assess whether your software qualifies for patent protection and help you navigate the complexities of software patent laws.",
    },
    {
      question:
        "What is the role of Sigma Solutions in the patent examination process?",
      answer:
        "Sigma Solutions will represent you throughout the examination process, responding to any objections raised by the patent office and ensuring all legal requirements are met. We work to address any issues that could delay or prevent your patent from being granted.",
    },
    {
      question: "Can I modify my patent after it has been filed?",
      answer:
        "Yes, modifications can be made to a patent application after filing, but they must comply with certain legal restrictions. Sigma Solutions will assist you in making any necessary amendments while ensuring your application remains valid.",
    },
    {
      question:
        "How does Sigma Solutions help with patent strategy and commercialization?",
      answer:
        "Sigma Solutions provides strategic advice on how to leverage your patent for commercial success. We can help you with market research, identifying licensing opportunities, and creating a patent portfolio to enhance your business’s value and market position.",
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
            Here are some common questions and answers about our Patent
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

export default PatentFAQs;
