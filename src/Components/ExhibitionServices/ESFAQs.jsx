import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ESFAQs = () => {
  const faqs = [
    {
      question: "What types of exhibition stands does Sigma Solutions offer?",
      answer:
        "Sigma Solutions offers a wide range of exhibition stands, including custom-built stands, modular stands, portable stands, and interactive technology-driven stands. Each type is tailored to fit the client’s needs, event requirements, and branding objectives.",
    },
    {
      question: "How does Sigma Solutions help with custom stand design?",
      answer:
        "Sigma Solutions works closely with you to create a bespoke stand design that reflects your brand identity and goals. The process includes initial consultations, 3D visualizations, and mockups to ensure you are fully satisfied with the design before construction begins.",
    },
    {
      question: "What are modular stands, and why should I choose them?",
      answer:
        "Modular stands from Sigma Solutions are flexible and reusable, allowing for easy reconfiguration based on event space and requirements. These stands are cost-effective, durable, and sustainable, making them a great choice for businesses that participate in multiple events.",
    },
    {
      question: "Does Sigma Solutions provide portable exhibition stands?",
      answer:
        "Yes, Sigma Solutions offers lightweight, portable stands that are easy to transport and assemble. These stands are ideal for smaller events, roadshows, and exhibitions where quick setup and tear-down are essential without compromising on quality and visual appeal.",
    },
    {
      question:
        "What is the process for getting an exhibition stand built by Sigma Solutions?",
      answer:
        "The process begins with an initial consultation to understand your needs and objectives. Sigma Solutions then provides design concepts and 3D visualizations. After finalizing the design, the stand is constructed, delivered, and set up at the exhibition venue. Sigma Solutions handles everything from start to finish.",
    },
    {
      question:
        "Does Sigma Solutions offer exhibition stand services internationally?",
      answer:
        "Yes, Sigma Solutions provides exhibition stand services both in India and abroad. With business operations in the UAE, UK, and USA, Sigma Solutions ensures smooth execution of exhibition stands for international events, handling all logistical aspects to ensure a seamless experience.",
    },
    {
      question:
        "Can Sigma Solutions integrate technology into my exhibition stand?",
      answer:
        "Absolutely! Sigma Solutions specializes in integrating cutting-edge technology like LED displays, touchscreens, virtual reality (VR), augmented reality (AR), and other interactive elements to create engaging and immersive exhibition stands that attract and retain visitor attention.",
    },
    {
      question:
        "How long does it take for Sigma Solutions to design and build an exhibition stand?",
      answer:
        "The time frame varies depending on the complexity and type of the stand. Custom-built stands may take several weeks from concept to delivery, while modular or portable stands can be delivered in a shorter time. Sigma Solutions ensures timely delivery, keeping you updated throughout the process.",
    },
    {
      question:
        "What additional services does Sigma Solutions provide with exhibition stands?",
      answer:
        "In addition to stand design and building, Sigma Solutions offers a range of services including graphic design, branding, booth staffing, transportation, on-site management, and post-event dismantling. They also offer storage and maintenance services for stands intended for reuse.",
    },
    {
      question: "How much do Sigma Solutions’ exhibition stand services cost?",
      answer:
        "The cost varies depending on the type, size, and complexity of the stand. Sigma Solutions provides tailored quotes based on your specific needs, ensuring competitive pricing without compromising on quality. They offer a range of options to fit different budgets.",
    },
    {
      question:
        "Does Sigma Solutions provide graphic design services for exhibition stands?",
      answer:
        "Yes, Sigma Solutions offers professional graphic design services to ensure that all visual elements of your stand, such as banners, panels, and displays, are aligned with your brand’s identity. Their in-house team ensures high-quality, vibrant designs that capture attention.",
    },
    {
      question:
        "Can Sigma Solutions handle the logistics for transporting exhibition stands to different locations?",
      answer:
        "Yes, Sigma Solutions takes care of all logistics, including transportation of the stand to the exhibition venue, both locally and internationally. They ensure that your stand arrives on time and is set up efficiently at the event.",
    },
    {
      question:
        "What is included in Sigma Solutions’ turnkey exhibition stand services?",
      answer:
        "Sigma Solutions provides end-to-end solutions, meaning they handle every aspect of the exhibition stand process, from design and construction to transport, setup, on-site management, and post-event dismantling. This ensures that your focus remains on the event itself while Sigma Solutions manages the logistics.",
    },
    {
      question:
        "How does Sigma Solutions ensure the sustainability of exhibition stands?",
      answer:
        "Sigma Solutions is committed to sustainability and uses eco-friendly materials and processes in its stand construction. They offer modular systems that can be reused across events, reducing waste and environmental impact, while maintaining high-quality standards.",
    },
    {
      question:
        "Can Sigma Solutions help with booth staffing for my exhibition?",
      answer:
        "Yes, Sigma Solutions can provide professional booth staff, including promoters and brand ambassadors, who are trained to engage with visitors and effectively represent your brand at the event. If you prefer to use your own team, Sigma Solutions also offers staff training services.",
    },
    {
      question:
        "What are the benefits of choosing Sigma Solutions over other exhibition stand providers?",
      answer:
        "Sigma Solutions stands out for its combination of creativity, attention to detail, and end-to-end management. Their global presence, experience in diverse industries, and focus on innovative, technology-driven stands make them a reliable partner for businesses looking to maximize their presence at exhibitions.",
    },
    {
      question: "Can Sigma Solutions store my exhibition stand for future use?",
      answer:
        "Yes, Sigma Solutions offers post-event storage services for exhibition stands. They ensure that your stand is safely stored and maintained for future events, reducing the need for rebuilding and lowering costs.",
    },
    {
      question: "What size exhibition stands can Sigma Solutions build?",
      answer:
        "Sigma Solutions can design and build exhibition stands of all sizes, from small portable booths to large custom-built pavilions. The stand size is tailored to the specific event, location, and your business’s branding needs.",
    },
    {
      question: "How does Sigma Solutions ensure on-time delivery and setup?",
      answer:
        "Sigma Solutions prides itself on efficient project management. They provide clear timelines and updates throughout the design and construction process, ensuring that the stand is delivered and set up well before the event begins. Their experienced team handles all aspects of the setup, ensuring a smooth and timely process.",
    },
    {
      question:
        "Can Sigma Solutions assist with exhibition strategy and marketing?",
      answer:
        "Yes, Sigma Solutions helps businesses not only with stand design but also with crafting strategies for optimizing their exhibition presence. This includes marketing support, promotional material design, and guidance on driving traffic to the stand, ensuring you get the most out of your exhibition experience.",
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
  );
};

export default ESFAQs;
