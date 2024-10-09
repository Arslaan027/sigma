import React from "react";
import GSTASservices from "./GSTAdvisoryServices/GSTASservices";
import GSTASmendatorycomp from "./GSTAdvisoryServices/GSTASmendatorycomp";
import GSTASprocess from "./GSTAdvisoryServices/GSTASprocess";

const GSTAdvisoryServices = () => {
  return (
    <div>
      <GSTASservices />
      <GSTASmendatorycomp />
      <GSTASprocess />
    </div>
  );
};

export default GSTAdvisoryServices;
