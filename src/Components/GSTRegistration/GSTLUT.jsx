import React from "react";
import LUTwhat from "./GSTLUT/LUTwhat";
import LUTdocument from "./GSTLUT/LUTdocument";
import LUTprocess from "./GSTLUT/LUTprocess";
import LUTeligibility from "./GSTLUT/LUTeligibility";

const GSTLUT = () => {
  return (
    <div>
      <LUTwhat />
      <LUTdocument />
      <LUTeligibility />
      <LUTprocess />
    </div>
  );
};

export default GSTLUT;
