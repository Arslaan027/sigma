import TrademarkBenefits from "./TrademarkBenefits";
import TrademarkDocument from "./TrademarkDocument";
import TrademarkEligibility from "./TrademarkEligibility";
import TrademarkFAQs from "./TrademarkFAQs";
import Trademarkhero from "./Trademarkhero";
import TrademarkProcess from "./TrademarkProcess";
import TrademarkProcesses from "./TrademarkText/TrademarkText";

const Trademark = () => {
  return (
    <div>
      <Trademarkhero />
      <TrademarkDocument />
      <TrademarkProcess />
      <TrademarkBenefits />
      <TrademarkEligibility />
      <TrademarkProcess />
      <TrademarkProcesses />
      <TrademarkFAQs />
    </div>
  );
};

export default Trademark;
