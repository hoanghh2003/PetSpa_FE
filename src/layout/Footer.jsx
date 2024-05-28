import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
const Footer = () => {
  return (
    <section className="montserrat-regular p-5 bg-gray-200 ">
      <div className="text-xl montserrat-b lg:max-w-[900px] mx-auto">
        PawParadise
      </div>
      <Separator className="bg-black my-3" />

      <div className="md:flex md:items-start md:justify-between lg:max-w-[900px] mx-auto md:h-32">
        <div className="flex items-center">
          <input
            type="text"
            className="h-8 pl-2 text-sm rounded-md bg-white md:w-52"
            placeholder="Email"
          />
          <Button className="h-8 rounded-e-md bg-gray-100">
            <MoveRight size={16} color="black" />
          </Button>
        </div>

        <div className="flex items-start gap-x-5 montserrat-regular mt-5 md:mt-0 md:mr-10">
          <ul className="text-sm">
            <li className="montserrat-sb">About</li>
            <li>Learn more</li>
            <li>About us</li>
          </ul>

          <ul className="text-sm">
            <li className="montserrat-sb">Connect</li>
            <li>Learn more</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <Separator className="bg-gray-300 my-5" />
      <div className="text-center text-xs text-gray-400">
        @2024 ALL COPYRIGHTS
      </div>
    </section>
  );
};

export default Footer;
