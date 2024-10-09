import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const StartupFAQs = () => {
  const faqs = [
    {
      question:
        "What is Startup India Registration, and why is it important for my business?",
      answer:
        "Startup India Registration is a government initiative designed to provide startups with benefits such as tax exemptions, funding opportunities, and easier compliance with regulations. Sigma Solutions assists startups by guiding them through the registration process, helping them access these benefits and fostering growth and innovation.",
    },
    {
      question: "Who is eligible for Startup India Registration?",
      answer:
        "To be eligible, your business must be a Private Limited Company, Limited Liability Partnership (LLP), or Partnership Firm, have been in operation for less than 10 years, and have a turnover not exceeding ₹100 crore. Sigma Solutions evaluates your eligibility and ensures you meet the criteria for registration.",
    },
    {
      question: "What are the benefits of Startup India Registration?",
      answer:
        "Registered startups can enjoy benefits such as tax exemptions, easier access to funding, IPR support, simplified compliance, and opportunities for networking. Sigma Solutions helps you unlock these benefits by completing the registration process quickly and accurately.",
    },
    {
      question: "What documents are required for Startup India Registration?",
      answer: (
        <>
          <p>The documents required include:</p>
          <ul className="list-decimal ml-6">
            <li>Your company’s incorporation certificate</li>
            <li>PAN card</li>
            <li>
              Proof of innovation (pitch deck, website, product description)
            </li>
            <li>Details about the business</li>
          </ul>
        </>
      ),
    },
    {
      question:
        "How long does it take to complete Startup India Registration through Sigma Solutions?",
      answer:
        "The registration process typically takes 2 to 3 weeks, provided all documents are in order. Sigma Solutions ensures that your application is complete and correct, minimizing delays in receiving your Startup India certification.",
    },
    {
      question: "Is there any fee for Startup India Registration?",
      answer:
        "Startup India Registration is free of charge on the government portal. However, Sigma Solutions provides expert assistance at competitive rates to guide you through the process, ensuring everything is done correctly to avoid rejections or delays.",
    },
    {
      question: "Can foreign-owned startups register under Startup India?",
      answer:
        "Yes, foreign-owned startups can register as long as they are incorporated in India and meet the eligibility criteria of being innovative and working towards product or service development. Sigma Solutions helps foreign-owned businesses navigate the registration process seamlessly.",
    },
    {
      question:
        "How does Sigma Solutions help in ensuring my startup qualifies for tax exemptions?",
      answer:
        "Startups registered under Startup India can apply for a three-year income tax exemption. Sigma Solutions ensures that your business meets the necessary criteria and assists in the application process for tax benefits, making sure you avail all available exemptions.",
    },
    {
      question:
        "What is the role of IPR benefits in Startup India, and how can Sigma Solutions help?",
      answer:
        "IPR benefits include faster processing of patents, trademarks, and design registrations, with significant fee reductions. Sigma Solutions helps startups with the entire intellectual property registration process, ensuring you get the rebates and legal protections you deserve.",
    },
    {
      question:
        "Can Sigma Solutions help in securing funding under Startup India?",
      answer:
        "Yes, Sigma Solutions assists startups in accessing funding opportunities under the Startup India Seed Fund Scheme (SISFS) and the Fund of Funds. We help you prepare the necessary documentation and connect you with venture capitalists and government funds.",
    },
    {
      question:
        "What kind of innovation is required for Startup India Registration?",
      answer:
        "Your startup should be working towards innovation in product, service, or technology development. This could involve improving an existing process or introducing a novel solution. Sigma Solutions helps startups articulate their innovation and prepares the documentation needed to prove it during the registration process.",
    },
    {
      question:
        "What happens if my startup doesn’t meet the eligibility criteria?",
      answer:
        "If your startup doesn’t meet the eligibility criteria (e.g., turnover exceeds ₹100 crore or the business is older than 10 years), you won’t qualify for Startup India benefits. Sigma Solutions evaluates your startup thoroughly before applying to avoid unnecessary rejections and can guide you toward alternative benefits if needed.",
    },
    {
      question:
        "How can Sigma Solutions assist with the compliance requirements after registration?",
      answer:
        "Sigma Solutions provides ongoing compliance support after registration, helping you with annual filings, tax filings, and keeping track of government regulations to ensure that your startup remains compliant with the Startup India guidelines.",
    },
    {
      question: "Can an existing business register under Startup India?",
      answer:
        "Yes, if your business has been in operation for less than 10 years, has a turnover below ₹100 crore, and meets the innovation criteria, you can register under Startup India. Sigma Solutions helps evaluate your existing business for eligibility and handles the registration process.",
    },
    {
      question:
        "Does Startup India Registration provide networking opportunities?",
      answer:
        "Yes, through Startup India, registered startups gain access to a network of mentors, investors, and industry experts. Sigma Solutions helps you tap into these networking opportunities to grow your business by connecting you to the right contacts.",
    },
    {
      question:
        "Can I apply for multiple government schemes after Startup India Registration?",
      answer:
        "Yes, once registered under Startup India, your startup becomes eligible for multiple government schemes, including tax benefits, funding opportunities, and export incentives. Sigma Solutions helps you navigate these schemes and maximize your business’s benefits.",
    },
    {
      question: "What happens if my Startup India application gets rejected?",
      answer:
        "If your application is rejected due to incomplete information or lack of innovation, Sigma Solutions works with you to revise and refile the application. We identify the reasons for rejection and guide you through the process of resubmitting with stronger supporting documentation.",
    },
    {
      question: "How does Startup India support technology-based startups?",
      answer:
        "Startup India provides special incentives, funding, and incubation support for technology-based startups. Sigma Solutions assists tech startups in registering and accessing government-backed schemes that provide growth opportunities in this sector.",
    },
    {
      question:
        "Is there a limit to how many startups I can register under Startup India?",
      answer:
        "There is no limit to how many startups an individual can register under Startup India, provided each startup meets the eligibility criteria. Sigma Solutions helps entrepreneurs manage multiple startups and register each one independently.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for Startup India Registration services?",
      answer:
        "Sigma Solutions offers expert, end-to-end assistance with Startup India Registration, ensuring that your application is thorough, compliant, and accurate. We provide tailored support, helping startups unlock the full range of government benefits, including tax exemptions, funding, and access to mentors and investors.",
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
            Here are some common questions and answers about Startup India
            Registration.
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

export default StartupFAQs;
