import GSThero from "./GSThero";
import GSTwhat from "./GSTwhat";
import GSTdocument from "./GSTdocument";
import GSTbenefits from "./GSTbenefits";
import GSTFAQs from "./GSTFAQs";
import GSTconclusion from "./GSTconclusion";
import GSTonlineprocess from "./GSTonlineprocess";
import GSTIN from "./GSTIN";
import GSTLUT from "./GSTLUT";
import GSTCancellation from "./GSTCancellation";
import GSTAdvisoryServices from "./GSTAdvisoryServices";
import GSTAnnualReturnFiling from "./GSTAnnualReturnFiling";

const GSTRegistration = () => {
  return (
    <div>
      <GSThero />
      <GSTwhat />
      <GSTIN />
      <GSTdocument />
      <GSTonlineprocess />
      <GSTbenefits />
      <GSTLUT />
      <GSTCancellation />
      <GSTAdvisoryServices />
      <GSTAnnualReturnFiling />
      <GSTconclusion />
      <GSTFAQs />
    </div>
  );
};

export default GSTRegistration;
