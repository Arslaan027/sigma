import UDRbenefits from "./UDRbenefits";
import UDRconclusion from "./UDRconclusion";
import UDRcrietaria from "./UDRcrietaria";
import UDRdocument from "./UDRdocument";
import UDRFAQs from "./UDRFAQs";
import UDRGSTvalidity from "./UDRGSTvalidity";
import UDRhero from "./UDRhero";
import UDRimportance from "./UDRimportance";
import UDRmainFaqs from "./UDRmainFaqs";
import UDRneedswho from "./UDRneedswho";
import UDRprocess from "./UDRprocess";
import USRwhat from "./USRwhat";

const UdyamRegistration = () => {
  return (
    <div>
      <UDRhero />
      <USRwhat />
      <UDRdocument />
      <UDRbenefits />
      <UDRimportance />
      <UDRprocess />
      <UDRmainFaqs />
      <UDRcrietaria />
      <UDRGSTvalidity />
      <UDRneedswho />
      <UDRconclusion />
      <UDRFAQs />
    </div>
  );
};

export default UdyamRegistration;
