import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const FSSAIFAQs = () => {
  const faqs = [
    {
      question:
        "What is an FSSAI license, and why do I need it for my food business?",
      answer:
        "An FSSAI license is a mandatory certification for anyone involved in the food business, issued by the Food Safety and Standards Authority of India. It ensures your business complies with food safety regulations. Sigma Solutions helps businesses like yours obtain this license to ensure that your products meet legal and safety standards, promoting consumer trust and business credibility.",
    },
    {
      question:
        "What types of FSSAI licenses are available, and how do I know which one I need?",
      answer:
        "There are three types of FSSAI licenses: Basic Registration, State License, and Central License. The type you need depends on your business’s annual turnover and the scope of your operations. Sigma Solutions assesses your business needs and helps you choose the correct license to ensure compliance.",
    },
    {
      question: "What documents are required for FSSAI license registration?",
      answer:
        "To apply for an FSSAI license, you need documents such as proof of identity, address proof, business premises proof, a detailed list of food products, and a food safety management plan. Sigma Solutions simplifies the process by helping you gather and submit the required documents.",
    },
    {
      question:
        "How long does it take to get an FSSAI license through Sigma Solutions?",
      answer:
        "Typically, it takes around 7 to 20 working days to process an FSSAI license, depending on the type of license and the completion of documents. Sigma Solutions ensures that your application is submitted promptly and tracks the process to get your license as quickly as possible.",
    },
    {
      question:
        "How can Sigma Solutions assist with FSSAI license registration?",
      answer:
        "Sigma Solutions provides end-to-end FSSAI registration services. From choosing the right type of license to gathering and submitting documents, our experts ensure the process is hassle-free. We handle everything, including application filing, follow-up, and compliance guidance.",
    },
    {
      question:
        "What is the validity period of an FSSAI license, and how can Sigma Solutions help with renewals?",
      answer:
        "FSSAI licenses are valid for 1 to 5 years, depending on the period you select. Sigma Solutions keeps track of your license expiry date and helps you renew it well in advance to avoid penalties or business disruptions.",
    },
    {
      question: "What happens if I don't register for an FSSAI license?",
      answer:
        "Operating a food business without an FSSAI license is illegal and can lead to penalties, fines, and even business shutdowns. Sigma Solutions ensures that your business is compliant with food safety laws, protecting you from legal issues.",
    },
    {
      question: "How much does FSSAI license registration cost?",
      answer:
        "The cost of obtaining an FSSAI license depends on the type of license (Basic, State, or Central) and the duration you choose (1 to 5 years). Sigma Solutions provides transparent pricing and helps you understand the fees involved based on your business type.",
    },
    {
      question:
        "Is FSSAI license registration required for home-based food businesses?",
      answer:
        "Yes, even home-based food businesses must register with FSSAI if their annual turnover exceeds ₹12 lakhs. Sigma Solutions can help home-based entrepreneurs navigate the registration process smoothly, ensuring compliance with FSSAI regulations.",
    },
    {
      question:
        "Can Sigma Solutions help if my business operates in multiple states?",
      answer:
        "Yes, Sigma Solutions provides specialized services for businesses operating across multiple states. For such businesses, a Central FSSAI license is required, and we help you manage the process effectively.",
    },
    {
      question:
        "Do I need to display the FSSAI license number at my business premises?",
      answer:
        "Yes, the FSSAI license number must be displayed at your business premises and printed on all food packaging. Sigma Solutions ensures you meet these compliance requirements, helping you avoid penalties.",
    },
    {
      question:
        "Can I transfer my FSSAI license to a new owner if I sell my business?",
      answer:
        "Yes, FSSAI allows license transfers in case of a change in business ownership. Sigma Solutions assists in transferring the license to the new owner, ensuring all legal formalities are fulfilled smoothly.",
    },
    {
      question:
        "What happens during an FSSAI inspection, and how can Sigma Solutions help me prepare?",
      answer:
        "An FSSAI inspection ensures that your business complies with food safety regulations. Sigma Solutions helps you prepare for these inspections by ensuring that your premises, documentation, and processes meet all FSSAI standards, minimizing the risk of penalties.",
    },
    {
      question:
        "Is the FSSAI license applicable for food import/export businesses?",
      answer:
        "Yes, businesses involved in the import or export of food products require a Central FSSAI license. Sigma Solutions provides expert assistance to businesses engaged in international trade, ensuring compliance with all regulatory requirements.",
    },
    {
      question:
        "What is the penalty for non-compliance with FSSAI regulations?",
      answer:
        "Non-compliance with FSSAI regulations can result in hefty fines ranging from ₹25,000 to ₹5 lakhs, depending on the nature of the violation. Sigma Solutions helps your business stay compliant, avoiding legal issues and financial penalties.",
    },
    {
      question:
        "What is the difference between FSSAI registration and a license?",
      answer:
        "FSSAI registration is for small businesses with a turnover of less than ₹12 lakhs, while FSSAI licenses (State and Central) are required for medium and large businesses with higher turnovers. Sigma Solutions helps you understand which category your business falls into and handles the appropriate registration or licensing process.",
    },
    {
      question:
        "How do I track the status of my FSSAI application submitted through Sigma Solutions?",
      answer:
        "Once Sigma Solutions submits your FSSAI application, we provide you with an Application Reference Number (ARN) that allows you to track the status of your application on the FSSAI portal. We also keep you updated throughout the process.",
    },
    {
      question:
        "Can Sigma Solutions assist with modifying my existing FSSAI license?",
      answer:
        "Yes, if there are any changes to your business, such as a new address, additional products, or changes in ownership, Sigma Solutions helps you modify your existing FSSAI license to reflect these changes, ensuring compliance.",
    },
    {
      question: "How can Sigma Solutions assist with FSSAI license renewal?",
      answer:
        "Sigma Solutions offers comprehensive renewal services for FSSAI licenses. We remind you when your renewal is due and handle the renewal application process to ensure there are no lapses in your license validity.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for FSSAI license registration?",
      answer:
        "Sigma Solutions offers a streamlined, hassle-free process for FSSAI license registration, backed by expert guidance. We provide personalized support, handle all paperwork, and ensure your business meets all legal requirements, saving you time and avoiding unnecessary complications.",
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
              Here are some common questions and answers about our FSSAI
              License.
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
    </div>
  );
};

export default FSSAIFAQs;
