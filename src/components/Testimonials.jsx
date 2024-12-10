import React from "react";
import TestimonialCard from "../testimonial/TestimonialCard";
import Container from "../container/Container";
import basz from "../assets/images/basz.jpg";
import jatou from "../assets/images/jatou.jpg";
import buba from "../assets/images/buba.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Testimonials() {
  return (
    <div className="w-full h-aut py-16 bg-[#101010]" id="testimonials">
      <Container>
        <h4 className="uppercase text-[#279EFF] font-bold mb-6 text-2xl text-center">
          Testimonials
        </h4>
        <Splide
          options={{
            perPage: 4,
            type: "loop",
            autoplay: true,
            interval: 4000,
            gap: "1.5rem",
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          <SplideSlide>
            <TestimonialCard
              name="Hadddijatou Jasseh"
              role="Graphic Designer"
              image={jatou}
              testimonial="Amazing experience working with them. Their expertise helped us achieve great results!"
            />
          </SplideSlide>
          <SplideSlide>
            <TestimonialCard
              name="Amadou Jallow"
              role="Frontend Developer"
              testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
              image={basz}
            />
          </SplideSlide>
          <SplideSlide>
            <TestimonialCard
              name="Ebrima Samba"
              role="Frontend Developer"
              testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
              image={basz}
            />
          </SplideSlide>
          <SplideSlide>
            <TestimonialCard
              name="Buba Conteh"
              role="Backend Developer"
              testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
              image={buba}
            />
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
}

export default Testimonials;
