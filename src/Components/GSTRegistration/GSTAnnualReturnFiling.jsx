import React from "react";
import GSTARprocess from "./GSTAnnualReturnFiling/GSTARprocess";
import GSTARwhat from "./GSTAnnualReturnFiling/GSTARwhat";

const GSTAnnualReturnFiling = () => {
  return (
    <div>
      <GSTARwhat />
      <GSTARprocess />
    </div>
  );
};

export default GSTAnnualReturnFiling;
