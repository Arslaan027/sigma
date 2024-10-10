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
  UserIcon,
  BanknotesIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const IECprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">IEC</span> Registration Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the IEC registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Visit DGFT Website */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <UserIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Visit DGFT Website
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Access the official DGFT website at{" "}
              <a href="https://dgft.gov.in" className="text-blue-600">
                dgft.gov.in
              </a>
              .
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Create an Account */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Create an Account
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Sign up using your PAN number as the login ID.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Fill in the Application Form */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <BanknotesIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fill in the Application Form
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the application form (ANF 2A) with required details like
              personal and business information.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Upload Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <div className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Upload Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upload the necessary documents including identity proof, address
              proof, and bank details.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Pay the Fee */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <BanknotesIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Pay the Fee
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Pay the registration fee online, which is generally ₹500.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit the Application */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit the Application
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After submitting the form and documents, you will receive an IEC
              number within 1-5 working days.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default IECprocess;
