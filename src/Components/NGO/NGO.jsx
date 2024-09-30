import React from "react";
import NGOhead from "./NGOhead";
import NGOwhat from "./NGOwhat";
import NGOtype from "./NGOtype";
import NGOstep from "./NGOstep";
import NGOdocument from "./NGOdocument";
import NGOEligibilityAndApprovals from "./NGOEligibilityAndApprovals";

const NGO = () => {
  return (
    <div>
      <NGOhead />
      <NGOwhat />
      <NGOtype />
      <NGOstep />
      <NGOdocument />
      <NGOEligibilityAndApprovals />
    </div>
  );
};

export default NGO;
