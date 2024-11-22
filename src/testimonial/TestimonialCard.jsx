// TestimonialCard.js
import React from "react";

const TestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className="bg-[#222] shadow-lg p-6 rounded-xl h-full">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-[75px] w-[75px] rounded-full object-cover  object-top"
            src={image}
          />
        </div>
        <div className="ml-3">
          <p className="text-[#ccc] font-semibold">{name}</p>
          <p className="text-[#279EFF] text-[13px]">{role}</p>
        </div>
      </div>
      <p className="text-[#ccc] italic mb-4 mt-7 text-[14px]">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
