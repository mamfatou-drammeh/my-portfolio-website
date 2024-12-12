import React from "react";
import PortfolioCard from "../profolio/ProfolioCard";
import Container from "../container/Container";
import image1 from "../assets/images/sts.png";
import image2 from "../assets/images/bge.png";
import image3 from "../assets/images/gp.png";
import image4 from "../assets/images/becl.png";
import serviceBg from "../assets/images/service-bg.jpg";

const portfolioItems = [
  {
    title: "STS Pictures",
    description: "Photography and videography services",
    image: image1,
    link: "https://stspictures.gm",
  },
  {
    title: "Babouga Enterprise",
    description: "Business solutions and consulting",
    image: image2,
    link: "https://www.babougaienterprise.com/",
  },
  {
    title: "Golden Properties",
    description: "Real estate and property management",
    image: image3,
    link: "https://www.goldenpropertiesgm.com/",
  },
  {
    title: "BECL",
    description: "Business and engineering consultancy",
    image: image4,
    link: "https://www.becl.gm/",
  },
];

const Portfolios = () => {
  return (
    <section
      className="py-16 md:py-20 bg-black bg-opacity-90 bg-blend-overlay bg-cover bg-center"
      style={{
        backgroundImage: `url(${serviceBg})`,
      }}
      id="portfolios"
    >
      <Container>
        <h2 className="uppercase text-[#279EFF] font-bold mb-8 text-2xl md:text-3xl text-center md:text-left">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolios;
