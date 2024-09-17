import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7"; // New step
import Step8 from "./Step8"; // New step
import Step9 from "./Step9"; // New step
import Step10 from "./Step10"; // New step
import Step11 from "./Step11"; // New step

const CostCalculator = () => {
  const [step, setStep] = useState(1); // Current step
  const [formData, setFormData] = useState({
    category: "",
    activity: "",
    reason: "",
    ownership: "",
    office: "",
    visaRequirement: "",
    dependantVisas: "",
    officeSpaceType: "",
    businessStartDate: "",
    jurisdiction: "",
    annualTurnover: "", // Ensure this is included
  }); // Consolidated form data for all 11 steps

  // Handle next step
  const nextStep = () => {
    if (step < 11) setStep(step + 1);
  };

  // Handle previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Handle form field updates
  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle form submission
  const submitForm = () => {
    console.log("Submitted Data:", formData);
    // Custom notification or confirmation here
    alert("Form Submitted"); // Replace with a styled notification if desired
  };

  // Switch to render the correct step based on current step state
  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          setCategory={(value) => handleFieldChange("category", value)}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          setActivity={(value) => handleFieldChange("activity", value)}
        />
      );
    case 3:
      return (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          setReason={(value) => handleFieldChange("reason", value)}
        />
      );
    case 4:
      return (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          setOwnership={(value) => handleFieldChange("ownership", value)}
        />
      );
    case 5:
      return (
        <Step5
          nextStep={nextStep}
          prevStep={prevStep}
          setOffice={(value) => handleFieldChange("office", value)}
        />
      );
    case 6:
      return (
        <Step6
          nextStep={nextStep}
          prevStep={prevStep}
          setVisaRequirement={(value) =>
            handleFieldChange("visaRequirement", value)
          }
        />
      );
    case 7:
      return (
        <Step7
          nextStep={nextStep}
          prevStep={prevStep}
          setDependantVisas={(value) =>
            handleFieldChange("dependantVisas", value)
          }
        />
      );
    case 8:
      return (
        <Step8
          nextStep={nextStep}
          prevStep={prevStep}
          setOfficeSpaceType={(value) =>
            handleFieldChange("officeSpaceType", value)
          }
        />
      );
    case 9:
      return (
        <Step9
          nextStep={nextStep}
          prevStep={prevStep}
          setBusinessStartDate={(value) =>
            handleFieldChange("businessStartDate", value)
          }
        />
      );
    case 10:
      return (
        <Step10
          nextStep={nextStep}
          prevStep={prevStep}
          setJurisdiction={(value) => handleFieldChange("jurisdiction", value)}
        />
      );
    case 11:
      return (
        <Step11
          prevStep={prevStep}
          submitForm={submitForm}
          setAnnualTurnover={(value) =>
            handleFieldChange("annualTurnover", value)
          }
        />
      );
    default:
      return <div>Unknown Step</div>;
  }
};

export default CostCalculator;
