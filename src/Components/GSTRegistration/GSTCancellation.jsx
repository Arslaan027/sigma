import React from "react";
import GSTCwhat from "./GSTCancellation/GSTCwhat";
import GSTCwhen from "./GSTCancellation/GSTCwhen";
import GSTCprocess from "./GSTCancellation/GSTCprocess";

const GSTCancellation = () => {
  return (
    <div>
      <GSTCwhat />
      <GSTCwhen />
      <GSTCprocess />
    </div>
  );
};

export default GSTCancellation;
