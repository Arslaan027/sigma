import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  DocumentIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  HomeIcon, // Example alternative
} from "@heroicons/react/24/solid";

const Sec8Process = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">Section 8</span> Company Registration
          Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the registration process for Section 8
          companies.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Name Approval Application */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PaperAirplaneIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Apply for Name Approval
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Apply for a name approval via the Ministry of Corporate Affairs
              (MCA) portal.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Form INC-12 */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Form INC-12
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit Form INC-12 to obtain a license for a Section 8 company.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit INC-7 for Registration */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <HomeIcon className="h-4 w-4" /> {/* Example alternative */}
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit INC-7 for Registration
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit INC-7 (for the company’s registration) with necessary
              documents like the MOA, AOA, and ID proofs.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Section 8 Company Registration */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Section 8 Company Registration
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upon approval, the company is registered under Section 8 of the
              Companies Act, 2013.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Sec8Process;
