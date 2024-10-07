import {
  //   FaInfoCircle,
  FaClipboardCheck,
  FaUserTie,
  FaRegBuilding,
  FaRegFileAlt,
} from "react-icons/fa"; // Import different icons

// Service categories, options, and descriptions with icons
const servicesData = {
  "BUSINESS SERVICES": {
    "Business Formation": {
      options: [
        {
          name: "Private Limited Companies",
          description: "Form a private limited company with limited liability.",
          icon: <FaRegBuilding className="text-green-500 mb-1" />,
          path: "/services/private-limited-companies",
        },
        {
          name: "Public Limited Companies (PLC)",
          description: "Register a public limited company for larger capital.",
          icon: <FaRegBuilding className="text-green-500 mb-1" />,
          path: "/services/public-limited-companies",
        },
        {
          name: "Limited Liability Partnership (LLP)",
          description: "Form an LLP for flexible and limited liability.",
          icon: <FaUserTie className="text-green-500 mb-1" />,
          path: "/services/limited-liability-partnership",
        },
        {
          name: "One Person Company (OPC)",
          description:
            "Establish a single-member company with limited liability.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/one-person-company",
        },
        {
          name: "Partnership Firm",
          description: "Register a traditional partnership firm.",
          icon: <FaUserTie className="text-green-500 mb-1" />,
          path: "/services/partnership-firm",
        },
        {
          name: "Sole Proprietorship Firm",
          description: "Start a sole proprietorship for individual businesses.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/sole-proprietorship-firm",
        },
        {
          name: "Section 8 Company",
          description: "Register a nonprofit organization.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/section-8-company",
        },
        {
          name: "Cooperative Society",
          description: "Form a cooperative society for mutual benefits.",
          icon: <FaRegBuilding className="text-green-500 mb-1" />,
          path: "/services/cooperative-society",
        },
      ],
    },
    "NGO Registration": {
      options: [
        {
          name: "NGO Registration",
          description: "Register an NGO quickly.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/ngo-registration",
        },
      ],
    },
    "Licensing & Certifications": {
      options: [
        {
          name: "ISO Certification",
          description: "Get ISO certification for your business.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/iso-certification",
        },
        {
          name: "GST Registration",
          description: "Register for GST compliance.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/gst-registration",
        },
        {
          name: "Udyam Registration (MSME)",
          description: "Register as an MSME for government benefits.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/udyam-registration",
        },
        {
          name: "Drug License",
          description: "Acquire a drug license for pharmaceuticals.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/drug-license",
        },
        {
          name: "Import Export Certificate (IEC)",
          description: "Get IEC for international trade.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/import-export-certificate",
        },
        {
          name: "Startup India Registration",
          description: "Register your startup with government support.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/startup-india-registration",
        },
        {
          name: "Trading License",
          description: "Obtain a trading license for commercial activities.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/trading-license",
        },
        {
          name: "Digital Signature Certificate (DSC)",
          description: "Get a DSC for online transactions.",
          icon: <FaRegFileAlt className="text-green-500 mb-1" />,
          path: "/services/digital-signature-certificate",
        },
      ],
    },
    "Intellectual Property": {
      options: [
        {
          name: "Trademark",
          description: "Register a trademark for your brand.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/trademark",
        },
        {
          name: "Copyright",
          description: "Secure copyright for your creative works.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/copyright",
        },
        {
          name: "Patent",
          description: "Obtain a patent for your inventions.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/patent",
        },
      ],
    },
    "International Business Setup": {
      options: [
        {
          name: "International Business Setup",
          description: "Quick setup for international business.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/international-business-setup",
        },
      ],
    },
    "Exhibition Services": {
      options: [
        {
          name: "Exhibition Services",
          description: "Get exhibition services in one page.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/exhibition-services",
        },
      ],
    },
    "Business Buying, Selling AND Leasing": {
      options: [
        {
          name: "Business Buying, Selling AND Leasing",
          description: "Services for business transactions.",
          icon: <FaClipboardCheck className="text-green-500 mb-1" />,
          path: "/services/business-buying-selling-leasing",
        },
      ],
    },
  },
};

export default servicesData;
