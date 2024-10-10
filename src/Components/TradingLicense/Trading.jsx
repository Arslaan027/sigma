import TChero from "./TChero";
import TCFAQs from "./TCFAQs";
import Tradingwhat from "./Tradingwhat";
import TCprocess from "./TCprocess";
import TCdocument from "./TCdocument";
import TCassist from "./TCassist";
import TCnewFAQs from "./TCnewFAQs";

const Trading = () => {
  return (
    <div>
      <TChero />
      <Tradingwhat />
      <TCprocess />
      <TCdocument />
      <TCnewFAQs />
      <TCassist />
      <TCFAQs />
    </div>
  );
};

export default Trading;
