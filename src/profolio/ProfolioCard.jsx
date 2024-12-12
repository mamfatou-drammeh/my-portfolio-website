import React from "react";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative aspect overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#279EFF] bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-700 flex items-center justify-center">
          <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
              {title}
            </h3>
            <a
              href={link}
              className="inline-block bg-white text-[#279EFF] px-3 py-1.5 text-sm rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
