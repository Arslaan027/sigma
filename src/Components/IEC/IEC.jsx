import IEChero from "./IEChero";
import IECFAQs from "./IECFAQs";
import IECwhat from "./IECwhat";
import IECdocument from "./IECdocument";
import IECprocess from "./IECprocess";
import IECneedswho from "./IECneedswho";
import IECbenefits from "./IECbenefits";
import IECmainFAQs from "./IECmainFAQs";
import IECconclusion from "./IECconclusion";
import IECimpreason from "./IECimpreason";

const IEC = () => {
  return (
    <div>
      <IEChero />
      <IECwhat />
      <IECdocument />
      <IECimpreason />
      <IECprocess />
      <IECneedswho />
      <IECmainFAQs />
      <IECbenefits />
      <IECconclusion />
      <IECFAQs />
    </div>
  );
};

export default IEC;
