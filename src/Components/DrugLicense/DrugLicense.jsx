import DLconclusion from "./DLconclusion";
import DLdocument from "./DLdocument";
import DLduring from "./DLduring";
import DLeligibility from "./DLeligibility";
import DLFAQs from "./DLFAQs";
import DLhero from "./DLhero";
import DLpenalty from "./DLpanelty";
import DLprocess from "./DLprocess";
import DLtype from "./DLtype";
import DLValidityRenewal from "./DLvalrenew";
import DLwhat from "./DLwhat";
import DLwhoNeeds from "./DLwhoNeeds";

const DrugLicense = () => {
  return (
    <div>
      <DLhero />
      <DLwhat />
      <DLwhoNeeds />
      <DLdocument />
      <DLduring />
      <DLprocess />
      <DLValidityRenewal />
      <DLeligibility />
      <DLtype />
      <DLpenalty />
      <DLconclusion />
      <DLFAQs />
    </div>
  );
};

export default DrugLicense;
