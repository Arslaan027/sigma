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
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CogIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const ISOprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">ISO</span> Certification Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the ISO certification process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Gap Analysis */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Gap Analysis
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Conduct a thorough review of current processes to identify areas
              that need improvement to meet ISO standards.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Documentation */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Documentation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Prepare and update necessary documents including manuals,
              procedures, and process workflows.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Implementation */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CogIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Implementation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Implement the processes and standards required by ISO with support
              from Sigma Solutions.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Internal Audit */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <div className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Internal Audit
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Conduct internal audits to ensure that the systems are functioning
              according to ISO standards.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Certification Audit */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Certification Audit
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              A third-party certification body performs the final audit. Upon
              successful completion, your business is ISO certified.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ISOprocess;
