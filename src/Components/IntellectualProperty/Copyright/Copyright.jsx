import CopyrightBenefits from "./CopyrightBenefits";
import CopyrightDocument from "./CopyrightDocument";
import CopyrightEligibility from "./CopyrightEligibility";
import CopyrightFAQs from "./CopyrightFAQs";
import Copyrighthero from "./Copyrighthero";

const Copyright = () => {
  return (
    <div>
      <Copyrighthero />
      <CopyrightDocument />
      <CopyrightBenefits />
      <CopyrightEligibility />
      <CopyrightFAQs />
    </div>
  );
};

export default Copyright;
