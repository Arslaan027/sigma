import ESassist from "./ESassist";
import ESFAQs from "./ESFAQs";
import ESheadpara from "./ESheadpara";
import EShero from "./EShero";
import ESlocation from "./ESlocation";
import EStext from "./EStext";
import WhySS from "./WhySS";

const ES = () => {
  return (
    <div>
      <EShero />
      <ESheadpara />
      <ESlocation />
      <EStext />
      <ESassist />
      <WhySS />
      <ESFAQs />
    </div>
  );
};

export default ES;
