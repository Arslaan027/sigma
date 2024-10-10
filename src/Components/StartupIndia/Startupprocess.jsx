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

const Startupprocess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">Startup India</span> Registration
          Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to register your startup under the Startup India
          initiative.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Incorporate Your Business */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Incorporate Your Business
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Ensure that your business is incorporated as a Private Limited
              Company, LLP, or Partnership Firm.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Access the Startup India Portal */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PaperAirplaneIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Access the Startup India Portal
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Visit the official Startup India portal at startupindia.gov.in to
              begin the registration process.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Create an Account */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Create an Account
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Sign up on the Startup India portal using your email ID to create
              an account for your startup.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Fill in the Application */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fill in the Application
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Provide all necessary details about your business, such as the
              nature of the business, proof of concept, and innovation details.
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
              Upload required documents like incorporation certificates, PAN,
              and proof of innovation.
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
              After filling out all the details and uploading the documents,
              submit the application for review. The Startup India team will
              assess your application for recognition.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Startupprocess;
