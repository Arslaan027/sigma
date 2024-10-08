import React from "react";
import TrademarkRectification from "./TrademarkRectification";
import TrademarkObjection from "./TrademarkObjection";
import TrademarkRenewal from "./TrademarkRenewal";

const TrademarkText = () => {
  return (
    <div>
      <TrademarkRenewal />
      <TrademarkObjection />
      <TrademarkRectification />
    </div>
  );
};

export default TrademarkText;
