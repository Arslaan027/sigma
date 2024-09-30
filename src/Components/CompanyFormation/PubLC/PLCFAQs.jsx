// import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const PLCFAQs = () => {
  return (
    <div className="bg-gray-300 dark:bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-300">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h3>
          <p className="text-lg text-gray-600 mb-2 dark:text-gray-400">
            Here are some common questions and answers about our services. If
            you have more questions, feel free to contact us!
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-6">
          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl dark:bg-neutral-800"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-green-500" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold dark:text-gray-200">
                What services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6 dark:bg-neutral-800 dark:text-gray-200">
              <Typography>
                We offer a range of services including business registration,
                compliance consulting, and legal advisory. Our goal is to
                support you throughout your business journey.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Add more FAQ items here */}
          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl dark:bg-neutral-800"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-green-500" />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold dark:text-gray-200">
                How long does the registration process take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6 dark:bg-neutral-800 dark:text-gray-200">
              <Typography>
                The registration process typically takes between 5 to 7 business
                days, depending on the complexity and requirements. We strive to
                ensure a smooth and efficient experience for our clients.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Continue adding more Accordion items as needed */}
        </div>
      </div>
    </div>
  );
};

export default PLCFAQs;
