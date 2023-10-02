// PortfolioCard.js
import React from 'react';

const ProfolioCard = ({ title, description, image }) => {
  return (
    <div className="bg-whi shadow-lg   ">
      <img className="w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {/* <p className="text-gray-600">{description}</p> */}
      </div>
    </div>
  );
};

export default ProfolioCard;
