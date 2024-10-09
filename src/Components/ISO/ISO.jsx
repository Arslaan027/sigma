import ISOhero from "./ISOhero";
import ISOwhat from "./ISOwhat";
import ISObenefits from "./ISObenefits";
import ISOprocess from "./ISOprocess";
import ISOtype from "./ISOtype";
import ISOFAQs from "./ISOFAQs";
import ISOassist from "./ISOassist";
import ISOmainFAQs from "./ISOmainFAQs";
import ISOconclusion from "./ISOconclusion";
import ISOduration from "./ISOduration";
import ISOimportance from "./ISOimportance";
import ISOcost from "./ISOcost";

const ISO = () => {
  return (
    <div>
      <ISOhero />
      <ISOwhat />
      <ISOmainFAQs />
      <ISOcost />
      <ISOprocess />
      <ISObenefits />
      <ISOtype />
      <ISOduration />
      <ISOassist />
      <ISOimportance />
      <ISOconclusion />
      <ISOFAQs />
    </div>
  );
};

export default ISO;
