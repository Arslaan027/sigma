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
  UserCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const GSTASprocess = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Steps to File GST <span className="text-green-500">Returns</span>
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to filing GST returns.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Collect Invoices */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <UserCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Collect Invoices
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Gather and organize invoices and records for the reporting period.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Upload Invoices */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentTextIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Upload Invoices
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upload invoices to the GST portal and validate details such as
              sales, purchases, input tax credit, and taxes paid.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Submit Return */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <div className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Submit Return
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Submit the return electronically on the GST portal.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Pay Tax Liabilities */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Pay Tax Liabilities
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Pay any outstanding tax liabilities if applicable.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default GSTASprocess;
