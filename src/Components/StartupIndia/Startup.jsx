import React from "react";
import StartupFAQs from "./StartupFAQs";
import Startuphero from "./Startuphero";
import Startupwhat from "./Startupwhat";
import Startupdocument from "./Startupdocument";
import Startupprocess from "./Startupprocess";
import Startupconclusion from "./Startupconclusion";
import Startupwhy from "./Startupwhy";
import StartupEligibility from "./StartupEligibility";
import Startwhy from "./Startwhy";
import Startupiswhat from "./Startupiswhat";
import StartAssist from "./StartAssist";
import StartnewFAQs from "./StartnewFAQs";
import StartupmainFAQs from "./StartupmainFAQs";

const Startup = () => {
  return (
    <div>
      <Startuphero />
      <Startupwhat />
      <Startupiswhat />
      <StartupEligibility />
      <Startupdocument />
      <Startwhy />
      <Startupwhy />
      <StartnewFAQs />
      <StartupmainFAQs />
      <Startupprocess />
      <StartAssist />
      <Startupconclusion />
      <StartupFAQs />
    </div>
  );
};

export default Startup;
