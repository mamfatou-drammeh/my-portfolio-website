import React from "react";
import ServiceCard from "../service/ServiceCard";
import Container from "../container/Container";
import serviceBg from "../assets/images/service-bg.jpg";

function Services() {
  return (
    <div
      className="bg-black/90 bg-blend-overlay flex items-center py-12 md:py-20 px-4"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${serviceBg})`,
      }}
      id="services"
    >
      <Container>
        <div>
          <h4 className="uppercase text-[#279EFF] font-bold mb-3 md:mb-5 text-xl md:text-2xl">
            Services
          </h4>
          {/* <p className='dark:text-[#ccc] text-gray-800 pb-5 font-bold'>The top quality services I offer</p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          <ServiceCard
            title="Web Design"
            description="Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites. Crafting visually stunning and user-friendly websites."
          />
          <ServiceCard
            title="Mobile App Development"
            description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites."
          />
          <ServiceCard
            title="Content Management"
            description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites."
          />
          <ServiceCard
            title="Graphic Design"
            description="Creating compelling graphics for digital and print media. Crafting visually stunning and user-friendly websites."
          />
        </div>
      </Container>
    </div>
  );
}

export default Services;
