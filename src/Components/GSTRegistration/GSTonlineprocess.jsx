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
  DocumentTextIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const GSTonlineprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          GST Registration{" "}
          <span className="text-green-500">Online Process</span>
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the online GST registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Visit GST Portal */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DevicePhoneMobileIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Visit GST Portal
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Visit the GST portal and click on ‘New Registration.’
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Provide Details */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <UserCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Provide Necessary Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Provide necessary details like business name, PAN, email, and
              mobile number.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* OTP Verification */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Verify Contact Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Verify the email and mobile number using OTP.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Fill in Details */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fill in Business Details
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Fill in business details, address, and bank details.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <BanknotesIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Relevant Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit relevant documents, such as PAN, address proof, and
              identity proof.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Application Processing */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <div className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Application Processing
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Once submitted, ARN (Application Reference Number) is generated.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* GSTIN Issuance */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              GSTIN Issuance
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              The application is processed, and upon approval, the GSTIN (GST
              Identification Number) is issued.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default GSTonlineprocess;
