import React from "react";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <div className="relative bg-white shadow-lg group overflow-hidden rounded-lg">
      <img
        className="w-full h-64 object-cover transition-transform duration-700 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
        src={image}
        alt={title}
      />

      <div className="absolute inset-0 bg-[#279EFF] opacity-0 group-hover:opacity-90 transition duration-700 ease-in-out transform group-hover:translate-y-0 translate-y-full flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-4">{title}</h3>

          <a
            href={link}
            className="text-white text-lg font-semibold  hover:text-gray-200 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
