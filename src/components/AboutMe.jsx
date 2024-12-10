import React from "react";
import image from "../assets/images/image.jpg";
import Container from "../container/Container";

function AboutMe() {
  const skills = [
    { name: "Node Js", percentage: 50 },
    { name: "Tailwind CSS", percentage: 76 },
    { name: "Laravel", percentage: 80 },
    { name: "React Js", percentage: 78 },
  ];

  return (
    <div
      className="bg-[#101010] mx-auto px-4 py-12 md:py-20 items-center"
      id="about-me"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <h4 className="uppercase text-[#279EFF] font-bold mb-3 md:mb-5 text-xl md:text-2xl">
              about me
            </h4>
            <h2 className="text-3xl md:text-4xl text-white capitalize font-extrabold leading-relaxed mb-4">
              I'm an inventive <br className="hidden md:inline" /> software
              <span className="text-[#279EFF]"> developer</span>
            </h2>
            <p className="pb-7 text-base md:text-lg text-[#ccc]">
              who prioritizes attention to detail and values teamwork to tackle
              challenges. I stay updated on the latest technologies to drive
              success.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="border-[2px] border-[#23415b] grid grid-cols-2 gap-4 p-4 rounded-xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative bg-[#fff] rounded-xl overflow-hidden aspect-video"
                >
                  <div className="grid grid-cols-2 h-full">
                    <div
                      className={skill.percentage >= 50 ? "bg-[#279EFF]" : ""}
                    ></div>
                    <div
                      className={skill.percentage >= 80 ? "bg-[#279EFF]" : ""}
                    ></div>
                    <div
                      className={skill.percentage >= 75 ? "bg-[#279EFF]" : ""}
                    ></div>
                    <div
                      className={skill.percentage == 100 ? "bg-[#279EFF]" : ""}
                    ></div>
                  </div>
                  <div className="bg-[#333] flex flex-col justify-center items-center rounded-xl absolute top-[50%] left-[50%] w-[95%] h-[90%] -translate-x-1/2 -translate-y-1/2">
                    <p className="text-[#ccc] text-2xl md:text-4xl font-bold">
                      {skill.percentage}%
                    </p>
                    <p className="text-[#ccc] text-sm md:text-base font-semibold text-center">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
