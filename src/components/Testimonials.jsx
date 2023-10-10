import React from "react";
import TestimonialCard from "../testimonial/TestimonialCard";
import Container from "../container/Container";
import basz from "../assets/images/basz.jpg";
import jatou from "../assets/images/jatou.jpg";
import buba from "../assets/images/buba.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

function Testimonials() {
  return (
    <div
      className="flex justify-center items-center h-screen  bg-[#101010] "
      id="testimonials"
    >
      <Container>
        <h4 className="uppercase text-[#279EFF] font-bold mb-6 text-2xl">
          Testimonials
        </h4>
        <div className="">
          <Splide
            options={{
              perPage: 4,
              gap: "1.5rem",
              type: "loop",
              autoplay: true,
              interval: 4000,
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
            <SplideSlide>
              <TestimonialCard
                name="Buba Conteh"
                role="Backend Developer"
                testimonial="I'm impressed with their creativity and attention to detail. Highly recommended!"
                image={buba}
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
          </Splide>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
