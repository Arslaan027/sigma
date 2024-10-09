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
  UserCircleIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const GSTCprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Cancellation Process for{" "}
          <span className="text-green-500">GST Registration</span>
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to the GST registration cancellation process.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Voluntary Cancellation */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <UserCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Voluntary Cancellation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Log in to the GST portal, go to the ‘Services’ tab, and select
              ‘Application for Cancellation of Registration’.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Reason for Cancellation */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Provide Reason for Cancellation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Specify a reason for cancellation in the application form.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Documents */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Supporting Documents
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the final GST return and any remaining liabilities as
              supporting documents.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Initiated by Authorities */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Initiated by Authorities
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Tax authorities can cancel registration if the taxpayer has failed
              to file returns for a specified period or has defaulted on other
              compliance requirements.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Post Cancellation
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              The taxpayer must file a final return and clear any pending
              liabilities.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default GSTCprocess;
