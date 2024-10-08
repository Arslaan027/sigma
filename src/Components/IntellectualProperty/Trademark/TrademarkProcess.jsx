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
  PencilIcon,
  EyeIcon,
  NewspaperIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const TrademarkProcess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">Trademark</span> Registration Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the trademark registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Trademark Search */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Trademark Search
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Check for existing similar marks to ensure the uniqueness of the
              trademark.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Application Filing */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PencilIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Application Filing
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the trademark registration form (TM-A) to start the
              registration process.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Examination */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <EyeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Examination
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              The application is examined by the Trademark Office to verify its
              compliance with the law.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Publication */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <NewspaperIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Publication
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              If approved, the trademark is published in the Trademark Journal,
              allowing for public objection.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Registration */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Registration
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After a 4-month objection period, the trademark is officially
              registered.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TrademarkProcess;
