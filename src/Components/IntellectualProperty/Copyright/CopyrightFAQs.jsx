import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CopyrightFAQs = () => {
  const faqs = [
    {
      question:
        "What is copyright, and why is it important to register my work?",
      answer:
        "Copyright is the legal protection provided to the creators of original works such as literary, musical, artistic, or digital content. By registering your copyright with Sigma Solutions, you ensure exclusive rights to reproduce, distribute, and display your work, protecting it from unauthorized use.",
    },
    {
      question: "What types of works can be registered for copyright?",
      answer:
        "Sigma Solutions assists with copyright registration for a variety of works, including literary works, music, films, art, software, architectural designs, and digital content like blogs or websites.",
    },
    {
      question: "Do I need to register copyright for my work to be protected?",
      answer:
        "Copyright protection is automatic upon creation, but registering your copyright with Sigma Solutions provides legal evidence of ownership and strengthens your ability to enforce your rights in case of disputes or infringement.",
    },
    {
      question: "How long does it take to register a copyright?",
      answer:
        "The copyright registration process typically takes 6-8 months, depending on the nature of the work and the completeness of the application. Sigma Solutions handles all the paperwork and communication to ensure a smooth and timely registration process.",
    },
    {
      question: "What is the cost of copyright registration?",
      answer:
        "The cost of copyright registration varies depending on the type of work being registered. Sigma Solutions provides a clear and transparent fee structure, so you know all the costs involved upfront.",
    },
    {
      question: "Can I copyright multiple works at once?",
      answer:
        "Yes, you can file for copyright registration for multiple works simultaneously. Sigma Solutions can assist you in grouping your works where applicable and making the process more efficient.",
    },
    {
      question: "What if someone uses my work without permission?",
      answer:
        "If your work is used without authorization, Sigma Solutions can help you take legal action. This may involve sending cease-and-desist letters, filing lawsuits, or seeking compensation for damages due to copyright infringement.",
    },
    {
      question: "How long does copyright protection last?",
      answer:
        "Copyright protection usually lasts for the lifetime of the creator plus 60 years in India. Sigma Solutions can help you understand the specific terms for different types of works and ensure your rights are maintained.",
    },
    {
      question: "Can I transfer or sell my copyright?",
      answer:
        "Yes, you can transfer or sell your copyright to another party. Sigma Solutions provides guidance and legal support in drafting transfer agreements, ensuring all terms comply with copyright laws.",
    },
    {
      question: "How do I prove that I own the copyright?",
      answer:
        "Registering your copyright with Sigma Solutions gives you official documentation proving your ownership. This documentation is crucial if you need to defend your rights in court or negotiate licensing agreements.",
    },
    // Add more FAQ entries as needed...
  ];

  return (
    <div className="bg-gray-300 py-16 px-4 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h3>

          <p className="text-lg text-gray-600 mb-8 dark:text-gray-200">
            Here are some common questions and answers about our Copyright
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

export default CopyrightFAQs;
