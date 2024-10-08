import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function BBSLFAQs() {
  const faqs = [
    {
      question:
        "What services does Sigma Solutions offer for business buying, selling, and leasing?",
      answer:
        "Sigma Solutions provides end-to-end support for entrepreneurs and business owners looking to buy, sell, or lease a business. Our services include due diligence, market analysis, contract drafting, negotiation, and regulatory compliance assistance.",
    },
    {
      question:
        "How does Sigma Solutions assist in the process of buying a business?",
      answer:
        "Sigma Solutions offers expert guidance in identifying potential businesses, conducting due diligence, and assessing the financial health and viability of the business. We also help with negotiations, legal paperwork, and finalizing the deal.",
    },
    {
      question: "Can Sigma Solutions help me sell my business?",
      answer:
        "Yes, Sigma Solutions specializes in business sales. We assist with business valuation, marketing, finding potential buyers, and handling negotiations to ensure you get the best value for your business.",
    },
    {
      question:
        "What should I consider when leasing a business property through Sigma Solutions?",
      answer:
        "Sigma Solutions helps you understand the financial, legal, and operational implications of leasing a property. We provide expert advice on lease agreements, property evaluations, and market conditions to ensure you make an informed decision.",
    },
    {
      question:
        "How does Sigma Solutions ensure confidentiality during the business selling process?",
      answer:
        "Sigma Solutions takes confidentiality seriously and ensures that all sensitive information is protected throughout the transaction. We follow strict non-disclosure agreements and safeguard your business details during negotiations and marketing.",
    },
    {
      question:
        "Can Sigma Solutions help with business valuation before buying or selling?",
      answer:
        "Absolutely. Sigma Solutions conducts thorough business valuations based on market trends, financial data, and asset assessments to provide you with a fair and accurate valuation for your business.",
    },
    {
      question:
        "What types of businesses does Sigma Solutions work with for buying, selling, and leasing?",
      answer:
        "Sigma Solutions works across multiple industries, including retail, hospitality, manufacturing, technology, and service sectors. Whether you're looking to buy a small business or lease a commercial property, we can assist you.",
    },
    {
      question:
        "Does Sigma Solutions assist with negotiating the terms of a business lease?",
      answer:
        "Yes, Sigma Solutions provides expert negotiation services. We help you secure favorable lease terms, ensuring that all aspects, such as rent, duration, and property conditions, align with your business goals.",
    },
    {
      question:
        "What documentation is needed to sell a business, and can Sigma Solutions assist with this?",
      answer:
        "Sigma Solutions helps you prepare all necessary documentation, including financial statements, business licenses, contracts, and tax records, to ensure a smooth business sale transaction.",
    },
    {
      question:
        "How long does it take to buy or sell a business with the help of Sigma Solutions?",
      answer:
        "The timeframe varies depending on the complexity of the transaction. However, Sigma Solutions works efficiently to ensure that all processes, from due diligence to final contracts, are completed in a timely manner.",
    },
    {
      question:
        "What are the key benefits of using Sigma Solutions for leasing business properties?",
      answer:
        "Sigma Solutions offers industry expertise, market knowledge, and negotiation skills to ensure that you find the right business property at the best possible terms. We also handle lease reviews and compliance with local regulations.",
    },
    {
      question:
        "Does Sigma Solutions provide services for international business transactions?",
      answer:
        "Yes, Sigma Solutions has extensive experience in international business transactions, including buying, selling, and leasing businesses abroad. We offer tailored support for international markets, legal regulations, and cross-border transactions.",
    },
    {
      question:
        "How does Sigma Solutions handle the due diligence process when buying a business?",
      answer:
        "Sigma Solutions conducts comprehensive due diligence by reviewing financial records, operational data, legal obligations, and market conditions to ensure that you are fully informed before making a purchase decision.",
    },
    {
      question: "Can Sigma Solutions help me find a buyer for my business?",
      answer:
        "Yes, Sigma Solutions has an extensive network of potential buyers. We actively market your business to qualified buyers and facilitate introductions, ensuring you receive competitive offers.",
    },
    {
      question:
        "What are the costs associated with business buying, selling, or leasing services at Sigma Solutions?",
      answer:
        "The costs depend on the scope and complexity of the transaction. Sigma Solutions provides transparent pricing and will give you a detailed breakdown of fees for services such as valuations, negotiations, and legal support.",
    },
    {
      question:
        "What role does Sigma Solutions play in closing a business sale?",
      answer:
        "Sigma Solutions manages the entire closing process, ensuring that all documentation is in order, legal requirements are met, and financial transactions are secure, so you can close the deal with confidence.",
    },
    {
      question:
        "How does Sigma Solutions support entrepreneurs in finding business opportunities for purchase?",
      answer:
        "Sigma Solutions offers a tailored approach, helping entrepreneurs identify viable business opportunities through market research, financial analysis, and business matching services based on your interests and goals.",
    },
    {
      question:
        "What industries does Sigma Solutions specialize in for business leasing?",
      answer:
        "Sigma Solutions specializes in a wide range of industries, including retail spaces, office buildings, manufacturing units, and hospitality venues. We help you secure the ideal property based on your industry requirements.",
    },
    {
      question:
        "How does Sigma Solutions assist with regulatory compliance during a business acquisition or sale?",
      answer:
        "Sigma Solutions ensures that all regulatory requirements, including tax obligations, business licenses, and permits, are fulfilled to ensure a smooth and legally compliant transaction.",
    },
    {
      question:
        "Why should I choose Sigma Solutions for my business buying, selling, or leasing needs?",
      answer:
        "Sigma Solutions offers unmatched expertise, personalized service, and a deep understanding of the local and international markets. We ensure a smooth, transparent, and efficient process that meets your business goals.",
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
            Here are some common questions and answers about our services. If
            you have more questions, feel free to contact us!
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl dark:bg-neutral-800 dark:text-gray-200"
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon className="text-green-500" />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
              >
                <Typography className="text-xl font-semibold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6 dark:bg-neutral-800 dark:text-gray-200">
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
