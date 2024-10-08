import PatentBenefits from "./PatentBenefits";
import PatentDocument from "./PatentDocument";
import PatentEligibility from "./PatentEligibility";
import PatentFAQs from "./PatentFAQs";
import Patenthero from "./Patenthero";
import PatentProcess from "./PatentProcess";

const Patent = () => {
  return (
    <div>
      <Patenthero />
      <PatentDocument />
      <PatentProcess />
      <PatentBenefits />
      <PatentEligibility />
      <PatentFAQs />
    </div>
  );
};

export default Patent;
