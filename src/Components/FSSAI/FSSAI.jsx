import FSSAIhero from "./FSSAIhero";
import FSSAIwhat from "./FSSAIwhat";
import FSSAIFAQs from "./FSSAIFAQs";
import FSSAImainFAQs from "./FSSAImainFAQs";
import FSSAIprocess from "./FSSAIprocess";
import FSSAIadvantage from "./FSSAIadvantage";
import FSSAIvalrenew from "./FSSAIvalrenew";
import FSSAIfee from "./FSSAIfee";
import FSSAIdocument from "./FSSAIdocument";
import FSSAItype from "./FSSAItype";
import FSSAIeligibility from "./FSSAIeligibility";
import FSSAIkey from "./FSSAIkey";

const FSSAI = () => {
  return (
    <div>
      <FSSAIhero />
      <FSSAIwhat />
      <FSSAIdocument />
      <FSSAImainFAQs />
      <FSSAIfee />
      <FSSAItype />
      <FSSAIeligibility />
      <FSSAIprocess />
      <FSSAIadvantage />
      <FSSAIkey />
      <FSSAIvalrenew />
      <FSSAIFAQs />
    </div>
  );
};

export default FSSAI;
