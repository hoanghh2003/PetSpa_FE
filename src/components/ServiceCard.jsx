import serviceImg from "../assets/images/main-img.jpg";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";

const ServiceCard = () => {
  return (
    <Card className="montserrat-regular bg-gray-200">
      <div>
        <img
          src={serviceImg}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="h-auto flex flex-col py-5 px-2 gap-y-2">
        <div className="text-sm montserrat-sb">Name of service</div>
        <Button className="w-24 h-7 bg-white border-[1px] border-black text-black rounded-full text-xs">
          Book now
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
