import BBSLconclusion from "./BBSLconclusion";
import BBSLFAQs from "./BBSLFAQs";
import BBSLhero from "./BBSLhero";
import BBSLtext from "./BBSLtext";

const BBSL = () => {
  return (
    <div>
      <BBSLhero />
      <BBSLtext />
      <BBSLconclusion />
      <BBSLFAQs />
    </div>
  );
};

export default BBSL;
