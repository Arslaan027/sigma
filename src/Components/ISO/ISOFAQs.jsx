import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ISOFAQs = () => {
  const faqs = [
    {
      question:
        "What is ISO certification, and why is it important for my business?",
      answer:
        "ISO certification is an international standard that ensures your products, services, and operations meet quality and regulatory requirements. Sigma Solutions offers ISO certification services to help businesses demonstrate compliance, improve efficiency, and gain credibility in the marketplace.",
    },
    {
      question:
        "What are the different types of ISO certifications Sigma Solutions can help with?",
      answer: (
        <>
          <p>
            Sigma Solutions assists businesses in obtaining various ISO
            certifications, including:
          </p>
          <ul className="list-disc ml-6">
            <li>ISO 9001: Quality Management</li>
            <li>ISO 14001: Environmental Management</li>
            <li>ISO 27001: Information Security</li>
            <li>ISO 50001: Energy Management</li>
            <li>ISO 10002: Customer Satisfaction</li>
          </ul>
          And many more, depending on the specific needs of your business.
        </>
      ),
    },
    {
      question: "How does ISO 9001 certification benefit my business?",
      answer:
        "ISO 9001, offered by Sigma Solutions, focuses on improving your company’s quality management system. It enhances customer satisfaction, streamlines processes, and can lead to reduced operational costs, giving you a competitive edge in the market.",
    },
    {
      question:
        "What are the steps involved in obtaining ISO certification through Sigma Solutions?",
      answer: (
        <>
          <p>
            Sigma Solutions follows a structured process for ISO certification:
          </p>
          <ul className="list-decimal ml-6">
            <li>Understanding your business needs</li>
            <li>Conducting a gap analysis</li>
            <li>
              Providing guidance on documentation and process improvements
            </li>
            <li>Preparing for external audits</li>
            <li>Assisting with certification from an accredited body</li>
          </ul>
        </>
      ),
    },
    {
      question:
        "How long does it take to get ISO certified with Sigma Solutions?",
      answer:
        "The timeline for ISO certification varies depending on the size of your organization and the complexity of your processes. Generally, with Sigma Solutions’ expert guidance, businesses can achieve certification within 3 to 6 months.",
    },
    {
      question:
        "What are the costs associated with ISO certification from Sigma Solutions?",
      answer:
        "The cost of ISO certification depends on factors such as the type of certification, the size of your business, and the complexity of your operations. Sigma Solutions offers competitive pricing packages that are tailored to meet your specific requirements.",
    },
    {
      question: "Is ISO certification mandatory for all businesses?",
      answer:
        "ISO certification is not mandatory but highly recommended. Sigma Solutions helps businesses decide which certifications are beneficial based on their industry, clients’ expectations, and legal requirements.",
    },
    {
      question: "How often do we need to renew our ISO certification?",
      answer:
        "ISO certifications typically need to be renewed every three years. Sigma Solutions provides ongoing support to help you maintain compliance and prepare for renewal audits.",
    },
    {
      question: "What documents are required for ISO certification?",
      answer:
        "Documentation requirements vary depending on the ISO standard you are applying for. Sigma Solutions helps prepare the necessary documentation, including quality manuals, process flowcharts, and audit reports, tailored to the specific ISO standard.",
    },
    {
      question: "How do I know if my business is ready for ISO certification?",
      answer:
        "Sigma Solutions conducts a comprehensive pre-assessment to determine your business’s readiness for ISO certification. We identify any gaps in compliance and provide guidance on addressing those gaps before the final audit.",
    },
    {
      question: "What happens if my business fails the ISO audit?",
      answer:
        "If your business fails the ISO audit, Sigma Solutions works with you to correct any non-conformities identified during the audit. We assist with creating an action plan to address deficiencies and help you through the re-audit process.",
    },
    {
      question:
        "Can Sigma Solutions provide ongoing support after certification?",
      answer:
        "Yes, Sigma Solutions offers post-certification support to ensure your business remains compliant. We provide regular updates on ISO standard changes, assist with internal audits, and help you prepare for recertification.",
    },
    {
      question: "Does ISO certification cover multiple sites of my business?",
      answer:
        "Yes, ISO certification can cover multiple sites, but each site must be audited for compliance. Sigma Solutions helps businesses with multi-site operations streamline their certification process and ensure that all locations meet ISO standards.",
    },
    {
      question:
        "Is there a difference between ISO certification for large and small businesses?",
      answer:
        "The ISO certification process is similar for both large and small businesses, though smaller companies may have less complex processes. Sigma Solutions tailors its services to the size and scope of your business to make the certification process efficient and cost-effective.",
    },
    {
      question: "How does Sigma Solutions ensure a smooth ISO audit process?",
      answer:
        "Sigma Solutions works closely with businesses to prepare for audits by conducting internal reviews, training employees, and addressing any potential non-conformities. Our goal is to make the audit process as seamless as possible, ensuring you meet the required ISO standards.",
    },
    {
      question:
        "Can Sigma Solutions help with multiple ISO certifications simultaneously?",
      answer:
        "Yes, Sigma Solutions specializes in helping businesses obtain multiple ISO certifications in an integrated manner. This can save time and resources by combining audits and documentation for standards like ISO 9001, ISO 14001, and ISO 45001.",
    },
    {
      question:
        "Will ISO certification help my business in international markets?",
      answer:
        "ISO certification is recognized globally and can greatly improve your credibility in international markets. Sigma Solutions helps you achieve certifications that align with global standards, making it easier to enter and compete in foreign markets.",
    },
    {
      question:
        "What industries does Sigma Solutions serve for ISO certification?",
      answer:
        "Sigma Solutions provides ISO certification services across various industries, including manufacturing, construction, IT, healthcare, hospitality, and more. We tailor our services to meet the specific needs and standards of your industry.",
    },
    {
      question:
        "How does ISO 27001 certification protect my business’s information?",
      answer:
        "ISO 27001 focuses on information security management. Sigma Solutions helps businesses implement security controls to protect sensitive data, ensuring compliance with both regulatory requirements and customer expectations regarding data protection.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for my ISO certification needs?",
      answer:
        "Sigma Solutions offers a comprehensive, end-to-end ISO certification service that includes consultation, documentation assistance, audit preparation, and post-certification support. Our experienced team ensures that your business meets the highest international standards efficiently and effectively.",
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
            Here are some common questions and answers about our ISO
            Certification services.
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

export default ISOFAQs;
