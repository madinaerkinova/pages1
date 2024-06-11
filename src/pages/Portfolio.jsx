import React from "react";
import DeliveryService from "../components/DeliveryService";
import Smsuz from "../components/User";
import  GoodzoneService from "../components/GoodzoneService";
import FinancePlatform from "../components/FinancePlatform";

const Portfolio = () => {
  return (
    <div>
      <DeliveryService />
      <Smsuz />
      < GoodzoneService/>
      <FinancePlatform />
    </div>
  );
};

export default Portfolio;
