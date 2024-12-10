// ServiceCard.js
import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#222] shadow-lg p-8 rounded-xl text-[#ccc]">
      <i className={`mb-4 text-4xl ${icon}`}></i>
      <h3 className="text-xl font-semibold mb-2 text-[#279EFF]">{title}</h3>
      <p className="text-gray00">{description}</p>
    </div>
  );
};

export default ServiceCard;
