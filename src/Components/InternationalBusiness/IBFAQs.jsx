import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const IBFAQs = () => {
  const faqs = [
    {
      question:
        "What is international business setup, and how can Sigma Solutions help?",
      answer:
        "International business setup involves the process of establishing a legal entity in a foreign country. Sigma Solutions provides end-to-end services, from market research and legal compliance to company registration and licensing, ensuring a smooth entry into international markets.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for international business setup?",
      answer:
        "Sigma Solutions offers comprehensive expertise in business formation, legal compliance, taxation, and ongoing operational support across the USA, UK, UAE, and more. Our localized knowledge and global network ensure that your international setup is smooth and compliant.",
    },
    {
      question:
        "What types of businesses can Sigma Solutions help set up internationally?",
      answer:
        "Sigma Solutions can assist with the setup of various business entities, including Limited Liability Companies (LLCs), public and private limited companies, foreign branches, and subsidiaries. Our services cater to all industries, from tech startups to manufacturing.",
    },
    {
      question:
        "How long does it take to set up an international business with Sigma Solutions?",
      answer:
        "The timeline varies depending on the country, type of business, and regulatory requirements. Typically, Sigma Solutions completes the process within 2 to 8 weeks, depending on the jurisdiction and complexity of the business.",
    },
    {
      question:
        "What are the legal requirements for setting up a business in another country?",
      answer:
        "Legal requirements differ from country to country. Sigma Solutions provides a detailed analysis of the local regulations in each country and ensures that your business complies with necessary laws, such as company registration, licenses, and permits.",
    },
    {
      question:
        "How does Sigma Solutions assist with taxation when setting up a business internationally?",
      answer:
        "Sigma Solutions helps optimize your tax structure by navigating local and international tax regulations. We offer advice on tax-efficient strategies and assist with compliance to minimize your tax burden while maintaining legal requirements.",
    },
    {
      question:
        "Will Sigma Solutions help with opening a bank account in a foreign country?",
      answer:
        "Yes, Sigma Solutions facilitates the process of opening corporate bank accounts in foreign countries. We liaise with financial institutions to ensure that you can set up an account quickly and easily, enabling smooth financial operations.",
    },
    {
      question:
        "Can Sigma Solutions help protect my intellectual property in foreign markets?",
      answer:
        "Absolutely. Sigma Solutions offers intellectual property protection services, including trademark, copyright, and patent registration in the countries where you plan to operate. We ensure your brand and innovations are safeguarded internationally.",
    },
    {
      question:
        "What are the costs involved in international business setup, and how does Sigma Solutions manage these?",
      answer:
        "Costs vary based on the country and type of business. Sigma Solutions provides a transparent fee structure and helps you understand the costs involved, including government fees, legal costs, and operational expenses.",
    },
    {
      question:
        "Does Sigma Solutions provide ongoing support after the business is set up?",
      answer:
        "Yes, Sigma Solutions offers ongoing support in areas like HR, payroll, accounting, compliance, and legal reporting. We ensure that your international operations run smoothly post-setup, allowing you to focus on growth and expansion.",
    },
    {
      question:
        "Can Sigma Solutions assist with hiring local employees and managing HR processes?",
      answer:
        "Sigma Solutions offers comprehensive HR solutions, including recruitment, employment contracts, payroll management, and compliance with local labor laws. We ensure that your workforce is managed efficiently and legally.",
    },
    {
      question:
        "What are the benefits of setting up a business in the USA, UK, and UAE with Sigma Solutions?",
      answer: (
        <>
          <p>Each country offers unique advantages:</p>
          <ul className="list-disc ml-6">
            <li>USA: Access to a large consumer market and innovation hub.</li>
            <li>UK: Gateway to Europe and global financial center.</li>
            <li>
              UAE: Tax-free zones and a strategic location for global trade.
            </li>
          </ul>
          <p>
            Sigma Solutions helps you leverage these benefits by providing
            tailored business setup solutions.
          </p>
        </>
      ),
    },
    {
      question:
        "How can Sigma Solutions assist with regulatory compliance in foreign markets?",
      answer:
        "Sigma Solutions ensures that your business complies with local laws and regulations by handling the necessary paperwork, licenses, and permits. We continuously monitor regulatory changes to keep your business compliant in the long term.",
    },
    {
      question:
        "How does Sigma Solutions ensure that my business can scale internationally?",
      answer:
        "Sigma Solutions offers scalable business solutions tailored to the growth needs of each client. Whether expanding operations or entering new markets, our team ensures that your international business setup is flexible and ready for future growth.",
    },
    {
      question:
        "What risks are involved in international business setup, and how does Sigma Solutions mitigate them?",
      answer:
        "Risks include legal challenges, tax implications, cultural differences, and market volatility. Sigma Solutions mitigates these risks through careful market analysis, legal expertise, and strategic advice, helping your business thrive in foreign markets.",
    },
    {
      question:
        "How does Sigma Solutions assist with customs and international trade?",
      answer:
        "Sigma Solutions provides guidance on import/export regulations, customs documentation, and trade compliance. We streamline the logistics process, ensuring that goods move smoothly across borders while staying compliant with international trade laws.",
    },
    {
      question:
        "Can Sigma Solutions help with currency exchange and financial transactions in foreign markets?",
      answer:
        "Yes, Sigma Solutions assists with managing currency exchange, international transactions, and financial services to ensure smooth financial operations across multiple countries.",
    },
    {
      question:
        "How does Sigma Solutions ensure that my business maintains good corporate governance in a foreign market?",
      answer:
        "Sigma Solutions helps implement corporate governance frameworks that meet local legal standards. We provide ongoing monitoring and reporting services, ensuring transparency and accountability in your international operations.",
    },
    {
      question:
        "Will I be able to maintain 100% ownership of my business in foreign countries with Sigma Solutions' help?",
      answer:
        "In many countries like the UAE (Free Zones), Sigma Solutions can assist in setting up a business with 100% foreign ownership. However, regulations vary by country, and we provide tailored solutions based on local laws.",
    },
    {
      question:
        "How does Sigma Solutions handle the documentation and paperwork for international business setup?",
      answer:
        "Sigma Solutions takes care of all the necessary documentation, including company formation papers, regulatory approvals, licenses, tax registrations, and compliance certificates. We ensure that all documents are properly filed and processed according to local regulations.",
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
            Here are some common questions and answers about our International
            Business Setup services.
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

export default IBFAQs;
