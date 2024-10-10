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
  IdentificationIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const DSprocess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          How to Obtain a{" "}
          <span className="text-green-500">Digital Signature Certificate</span>{" "}
          (DSC) in India
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to obtain a DSC in India.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Choose the Certifying Authority */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <IdentificationIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Choose the Certifying Authority
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Select an authorized Certifying Authority (CA) such as eMudhra,
              Sify, or NCode.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Select the Right DSC Class */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Select the Right DSC Class
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Choose between Class 1, Class 2, or Class 3 DSC based on your
              business needs.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit the Application */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PaperAirplaneIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit the Application
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Complete the online application or submit it through an authorized
              agent with the required documentation.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Provide Necessary Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <UserCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Provide Necessary Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit proof of identity, proof of address, a passport-size
              photograph, and an authorization letter if applicable.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Verification */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Verification
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              For Class 3 DSC, personal verification may be required by the
              certifying authority.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Issuance */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Issuance
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After verification, the DSC is issued, typically in the form of a
              USB token.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default DSprocess;
