//import serviceImg from "../assets/images/main-img.jpg";

import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
// import { useEffect, useState } from "react";
// import axios from "axios";

const ServiceCard = ({ serviceID, serviceName, serviceImg, onBookNow }) => {
  const handleBookNowClick = () => {
    onBookNow(serviceID);
  };
  return (
    <Card className="montserrat-regular bg-gray-200 md:w-60 lg:w-72">
      <div>
        <img
          src={serviceImg}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="h-auto flex flex-col py-5 px-2 gap-y-2">
        <div className="text-sm montserrat-sb">{serviceName}</div>
        <Button
          onClick={handleBookNowClick}
          className="w-24 h-7 bg-white border-[1px] border-black text-black rounded-full text-xs"
        >
          Book now
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
