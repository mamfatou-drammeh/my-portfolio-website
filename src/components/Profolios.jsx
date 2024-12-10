// App.js
import React from "react";
import ProfolioCard from "../profolio/ProfolioCard";
import image1 from "../assets/images/sts.png";
import image2 from "../assets/images/bge.png";
import image3 from "../assets/images/gp.png";
import image4 from "../assets/images/becl.png";
import Container from "../container/Container";
import serviceBg from "../assets/images/service-bg.jpg";

const Profolios = () => {
  const portfolioItems = [
    {
      image: image1,
      link: "https://stspictures.gm",
    },
    {
      image: image2,
      link: "https://www.babougaienterprise.com/",
    },
    {
      image: image3,
      link: "https://www.goldenpropertiesgm.com/",
    },
    {
      image: image4,
      link: "https://www.becl.gm/",
    },
  ];

  return (
    <div
      className="py-20 bg-black/90 bg-blend-overlay"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${serviceBg})`,
      }}
      id="profolios"
    >
      <Container>
        <h4 className="uppercase text-[#279EFF] font-bold mb-5 text-2xl pb-6">
          Porfolio
        </h4>
        y
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <ProfolioCard key={index} image={item.image} link={item.link} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Profolios;
