import React from "react";
import CompliancesHead from "./CompliancesHead"; // Ensure this component is correct
import Compwhat from "./Compwhat";
import AnnualCompliances from "./AnnualCompliances";
import EventBasedCompliances from "./EventBasedCompliances";

const Compliances = () => {
  return (
    <div>
      <CompliancesHead />
      <Compwhat />
      <AnnualCompliances />
      <EventBasedCompliances />
    </div>
  );
};

export default Compliances;
