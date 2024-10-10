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

const TCprocess = () => {
  return (
    <div className="w-full md:w-[36rem] mx-auto my-16 px-5">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Trading License Application Process
        </h1>
        <p className="text-gray-500 mt-3">
          A step-by-step guide to obtaining a trading license in Arunachal
          Pradesh.
        </p>
      </div>

      {/* Timeline */}
      <Timeline>
        {/* Determine the Jurisdiction */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Determine the Jurisdiction
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Identify the local body (municipality or panchayat) that has
              jurisdiction over your business area.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Application Form */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <DocumentIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Application Form
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Obtain and fill out the trading license application form available
              at the local municipal office or online.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Fee Payment */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <PaperAirplaneIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Fee Payment
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              An application fee is required for processing. The amount may vary
              depending on the nature and size of the business. Ensure that the
              payment is made through the recommended method, usually a bank
              draft or online transaction.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Inspection */}
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Inspection
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Once the application is submitted, the local authorities will
              conduct an inspection of the premises to ensure it complies with
              the legal requirements.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Approval and Issuance */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Approval and Issuance
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              If the inspection report is satisfactory and all documents are in
              order, the trading license will be issued. This process can take a
              few weeks depending on the workload of the local authorities.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        {/* Receive Trading License */}
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 mr-5">
              <CheckCircleIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Receive Trading License
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-gray-600 ml-5">
              Upon approval, you will receive your trading license, allowing you
              to operate legally within the jurisdiction.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TCprocess;
