import React from "react";
import DSFAQs from "./DSFAQs";
import DShero from "./DShero";
import DSwhat from "./DSwhat";
import DStype from "./DStype";
import DSuses from "./DSuses";
import DSdocument from "./DSdocument";
import DSprocess from "./DSprocess";
import DSasisst from "./DSasisst";
import DSbenefits from "./DSbenefits";
import DSconclusion from "./DSconclusion";

const DigitalSignature = () => {
  return (
    <div>
      <DShero />
      <DSwhat />
      <DSprocess />
      <DSdocument />
      <DSconclusion />
      <DSbenefits />
      <DSuses />
      <DStype />
      <DSasisst />
      <DSFAQs />
    </div>
  );
};

export default DigitalSignature;
