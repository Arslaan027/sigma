import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TrademarkFAQs = () => {
  const faqs = [
    {
      question: "What is a trademark, and why do I need one for my business?",
      answer:
        "A trademark is a unique symbol, logo, name, or design that distinguishes your products or services from others in the market. By registering a trademark with Sigma Solutions, you secure legal protection against unauthorized use of your brand and strengthen your business identity.",
    },
    {
      question: "How do I know if my trademark is available for registration?",
      answer:
        "Sigma Solutions conducts a comprehensive trademark search to ensure your proposed mark is not already registered or in use. This step helps prevent potential conflicts and increases the chances of successful registration.",
    },
    {
      question: "What types of trademarks can be registered?",
      answer:
        "Sigma Solutions can help you register different types of trademarks, including logos, business names, product names, slogans, and even sounds or smells that uniquely represent your brand.",
    },
    {
      question:
        "What is the process for registering a trademark with Sigma Solutions?",
      answer:
        "Our trademark registration process involves an initial consultation, a trademark search, filing the application, and following up with the Trademark Registry. Sigma Solutions will guide you through each step, ensuring compliance with all legal requirements.",
    },
    {
      question: "How long does it take to get a trademark registered?",
      answer:
        "Trademark registration is a multi-step process that can take 6-12 months, depending on the complexities involved. Sigma Solutions will keep you updated throughout the process and assist with any challenges that may arise.",
    },
    {
      question: "Can I register a trademark for a brand that’s not yet in use?",
      answer:
        "Yes, Sigma Solutions can assist you in registering a trademark even if your brand or product is still in development. You can apply for a trademark under the 'proposed to be used' category, securing your rights for future use.",
    },
    {
      question: "What are the costs involved in registering a trademark?",
      answer:
        "The cost of trademark registration depends on various factors, including the type of trademark and the classes of goods or services it covers. Sigma Solutions offers a transparent fee structure, ensuring you understand all the expenses upfront.",
    },
    {
      question: "What happens if my trademark application is opposed?",
      answer:
        "If an opposition is filed, Sigma Solutions will represent you throughout the legal proceedings, helping you build a strong case to defend your trademark and resolve the opposition as quickly as possible.",
    },
    {
      question:
        "How long is a registered trademark valid, and can it be renewed?",
      answer:
        "A registered trademark is valid for 10 years from the date of registration. Sigma Solutions offers renewal services to extend your trademark protection for another 10 years, ensuring your brand remains safeguarded.",
    },
    {
      question: "What if my trademark is similar to another one?",
      answer:
        "Sigma Solutions will help you evaluate the similarity and advise whether it's safe to proceed. We also offer strategies to modify or adjust your trademark to avoid potential legal issues.",
    },
    {
      question: "Can I register a trademark internationally?",
      answer:
        "Yes, Sigma Solutions provides international trademark registration services through the Madrid Protocol. This allows you to protect your brand across multiple countries with a single application.",
    },
    {
      question: "What happens if someone infringes on my registered trademark?",
      answer:
        "If you notice trademark infringement, Sigma Solutions will assist you in taking legal action. This can include sending a cease-and-desist letter or filing a lawsuit to protect your brand's intellectual property rights.",
    },
    {
      question: "Can I sell or license my trademark to another party?",
      answer:
        "Yes, trademarks can be sold or licensed. Sigma Solutions offers assistance in drafting agreements and ensuring the proper legal procedures are followed to transfer or license your trademark rights.",
    },
    {
      question:
        "What is the role of trademark classes, and how do I choose the right one?",
      answer:
        "Trademark classes categorize goods and services for which a trademark is registered. Sigma Solutions will help you choose the appropriate class(es) based on your business activities to ensure your brand is adequately protected.",
    },
    {
      question: "What if my trademark application is rejected?",
      answer:
        "If your trademark application is rejected, Sigma Solutions will provide guidance on the next steps, which could involve revising the application or filing an appeal.",
    },
    {
      question: "Do I need to register my trademark if I only operate locally?",
      answer:
        "Yes, registering a trademark is crucial regardless of your business size or location. Sigma Solutions ensures your local brand is protected from infringement, helping you build a strong brand presence even in local markets.",
    },
    {
      question: "Can I register multiple trademarks at once?",
      answer:
        "Yes, you can file multiple trademark applications for different logos, names, or products. Sigma Solutions offers bulk trademark registration services to streamline the process and reduce costs.",
    },
    {
      question:
        "Will my trademark registration be valid in other states within India?",
      answer:
        "Yes, a registered trademark is valid throughout India. Sigma Solutions ensures that your brand receives national protection, safeguarding your intellectual property across all states.",
    },
    {
      question: "What documentation is required for trademark registration?",
      answer:
        "The documentation required includes your business details, proof of identity, and a clear representation of the trademark. Sigma Solutions will provide a detailed checklist of documents needed and assist you in preparing them for submission.",
    },
    {
      question:
        "How does Sigma Solutions help in maintaining a trademark after registration?",
      answer:
        "Sigma Solutions offers post-registration services such as trademark monitoring, renewals, and enforcement to ensure continuous protection for your brand. We help you stay compliant with trademark laws and avoid lapses in protection.",
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
            Here are some common questions and answers about our Trademark
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

export default TrademarkFAQs;
