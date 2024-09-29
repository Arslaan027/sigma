import React from "react";
import GSThero from "./GSThero";
import GSTwhat from "./GSTwhat";
import GSTdocument from "./GSTdocument";
import GSTSteps from "./GSTSteps";
import GSTbenefits from "./GSTbenefits";
import GSTfeature from "./GSTfeature";

const GSTRegistration = () => {
  return (
    <div>
      <GSThero />
      <GSTwhat />
      <GSTdocument />
      {/* <GSTSteps /> */}
      <GSTbenefits />
      <GSTfeature />
    </div>
  );
};

export default GSTRegistration;
