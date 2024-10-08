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
  BuildingLibraryIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const SocietyProcess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-green-500">Society</span> Registration Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the society registration process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Draft the MOA and Rules & Regulations */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Draft the MOA and Rules & Regulations
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Outline the society's name, objectives, and governing body in the
              Memorandum of Association (MOA) and Rules & Regulations.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Documents to the Registrar */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <BuildingLibraryIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Documents to the Registrar
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the drafted documents to the Registrar of Societies in your
              state for review.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Society Registration */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Society Registration
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              After the application review, the society is registered and
              assigned a registration number.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default SocietyProcess;
