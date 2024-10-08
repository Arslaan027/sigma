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
  CreditCardIcon,
  MapIcon, // Use MapIcon or another available icon
} from "@heroicons/react/24/solid"; // Ensure this import is correct

const TrustProcess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">Trust</span> Registration Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the trust registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Draft the Trust Deed */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Draft the Trust Deed
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Mention the name of the trust, objects, and details of trustees in
              the trust deed.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Visit Local Sub-Registrar Office */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <MapIcon className="h-4 w-4" /> {/* Replace this icon */}
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Visit Local Sub-Registrar Office
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Bring the trust deed and necessary documents to the local
              sub-registrar office.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Documents and Pay Fees */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CreditCardIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Documents and Pay Fees
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the required documents along with the registration fees.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Trust Deed Registration */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Trust Deed Registration
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After verification, the Trust Deed is registered, and a
              certificate is issued.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TrustProcess;
