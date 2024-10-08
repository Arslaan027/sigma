import React from "react";
import NGOhead from "./NGOhead";
import NGOwhat from "./NGOwhat";
import NGOtype from "./NGOtype";
import NGOstep from "./NGOstep";
import NGOdocument from "./NGOdocument";
import NGOEligibilityAndApprovals from "./NGOEligibilityAndApprovals";
import NGOFAQs from "./NGOFAQs";
import NGOTips from "./NGOtip";

const NGO = () => {
  return (
    <div>
      <NGOhead />
      <NGOwhat />
      <NGOtype />
      <NGOstep />
      <NGOdocument />
      <NGOEligibilityAndApprovals />
      <NGOTips />
      <NGOFAQs />
    </div>
  );
};

export default NGO;
