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
import { CheckIcon, DocumentIcon } from "@heroicons/react/24/solid";

const FSSAIprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">FSSAI</span> License Application
          Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to obtaining an FSSAI license.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Determine License Type */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Determine License Type
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Decide which type of FSSAI license is needed (Basic, State, or
              Central) based on your business’s annual turnover and scope of
              operations.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Application Online */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Application Online
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Apply online through the FSSAI’s Food Licensing and Registration
              System (FLRS) portal by filling out Form A or Form B.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Upload Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Upload Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upload the necessary documents for verification.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Fee Payment */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fee Payment
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Pay the application fee, which varies depending on the license
              type and duration.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Inspection and Approval */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Inspection and Approval
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After submission, the FSSAI may conduct an inspection of your
              premises. Once approved, the license will be issued.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default FSSAIprocess;
