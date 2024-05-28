import { Button } from "@/components/ui/button";
import mainImg from "../../assets/images/main-img.jpg";
import mainImg2 from "../../assets/images/main-2-img.jpg";
import FilterBadge from "@/components/FilterBadge";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
  return (
    <>
      {/* section 1 */}
      <section className="montserrat-regular">
        <div className="w-full h-52 relative">
          <img src={mainImg} alt="" className="w-full h-full object-cover" />
          <div className="w-full h-full absolute opacity-15 bg-black top-0"></div>
          <div className="w-auto h-full absolute bg-transparent top-0 flex flex-col justify-center gap-y-2 pl-3">
            <div className="w-40 text-white montserrat-sb text-lg">
              Pampered Pets, Happy Hearts.
            </div>
            <Button className="bg-white h-7 w-28 text-xs text-black">
              Come with us
            </Button>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="bg-gray-300 flex overflow-x-auto gap-x-2 p-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <FilterBadge key={index} />
        ))}
      </section>

      {/* section 3 */}

      <section className="mt-10 p-3 montserrat-regular">
        <div className="text-2xl">Our best service</div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>

      {/* section 4 */}

      <section className="mt-10 p-3 montserrat-regular">
        <div className="text-2xl">Combos</div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>

      {/* section 5 */}
      <section className="montserrat-regular">
        <div className="w-full h-52 relative">
          <img src={mainImg2} alt="" className="w-full h-full object-cover" />
          <div className="w-full h-full absolute opacity-30 bg-black top-0"></div>
          <div className="w-full h-full absolute bg-transparent top-0 flex flex-col items-center text-center justify-center gap-y-2 pl-3">
            <div className="w-full text-white montserrat-sb text-base">
              We believe every pet deserves a day of pampering. Book their spa
              day today!
            </div>
            <Button className="bg-white h-7 w-28 text-xs text-black">
              Book us now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
