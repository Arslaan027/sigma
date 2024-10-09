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
  HomeIcon,
} from "@heroicons/react/24/solid";

const UDRprocess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Udyam <span className="text-green-500">Registration Process</span>
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the Udyam registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Step 1: Visit Udyam Registration portal */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Visit Udyam Registration Portal
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Go to the Udyam Registration portal:{" "}
              <a
                href="https://udyamregistration.gov.in"
                className="text-green-500"
              >
                udyamregistration.gov.in
              </a>
              .
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 2: Enter Aadhaar details */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Enter Aadhaar Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Fill in your Aadhaar number and validate it using the OTP sent to
              your registered mobile number.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 3: Provide PAN details */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PaperAirplaneIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Provide PAN Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              If applicable, enter your PAN and GSTIN for verification.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 4: Fill in business details */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fill in Business Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Provide your business name, address, bank account details, and
              type of organization.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 5: Select the type of enterprise */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Select Type of Enterprise
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Choose between micro, small, or medium categories based on your
              investment and turnover.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Step 6: Submit and receive URN */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit and Receive URN
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After submission, receive your Udyam Registration Number (URN) and
              certificate as proof of MSME registration.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default UDRprocess;
