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
import { DocumentIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const DLprocess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Drug License{" "}
          <span className="text-green-500">Registration Process</span>
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the drug license registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Step 1: Choose the Type of License */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <div className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Choose the Type of License
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Determine the type of drug license you need based on your business
              (manufacturing, wholesale, retail, etc.).
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 2: Submit Application */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Application
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit your application to the State Drugs Control Department or
              CDSCO based on the license type.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 3: Prepare and Upload Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Prepare and Upload Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upload all necessary documents related to your business, staff,
              and premises.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 4: Inspection */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Inspection
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              The drug licensing authorities will inspect your premises to
              ensure compliance with required standards.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 5: Approval and Issuance of License */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Approval and Issuance of License
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Once all criteria are met, the drug license will be issued to the
              applicant.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default DLprocess;
