import React from "react";
import TestimonialCard from "../testimonial/TestimonialCard";
import Container from "../container/Container";
import basz from "../assets/images/basz.jpg";
import jatou from "../assets/images/jatou.jpg";
import buba from "../assets/images/buba.jpg";

function Testimonials() {
  return (
    <div className="flex justify-center items-center h-screen  bg-[#101010] " id="testimonials">
      <Container>
        <h4 className="uppercase text-[#279EFF] font-bold mb-6 text-2xl">
          Testimonials
        </h4>
        <div className="grid grid-cols-4 gap-6 ">
          
          <TestimonialCard
            name="Hadddijatou Jasseh"
            role="Graphic Designer"
            image={jatou}
            testimonial="Amazing experience working with them. Their expertise helped us achieve great results!"
          />
          <TestimonialCard
            name="Ebriama Samba"
            role="Frontend Developer"
            testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
            image={basz}
          />
          <TestimonialCard
            name="Buba Conteh"
            role="Backend Developer"
            testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
            image={buba}
          />
          <TestimonialCard
            name="Amadou Jallow"
            role="Frontend Developer"
            testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
            image={basz}
          />
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
