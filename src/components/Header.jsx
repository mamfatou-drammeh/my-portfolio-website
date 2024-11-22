import React, { Fragment } from "react";
import mam from "../assets/images/mam.png";
import Container from "../container/Container";
import logo from "../assets/images/logo1.png";

function Header() {
  return (
    <Fragment>
      <div class=" bg-[#000] min-h-screen">
        <Container>
          <nav className="flex items-center justify-between h-20  bg-blck">
            <a href="" className=" text-[#279EFF]  ">
              <img
                src={logo}
                alt=""
                className="h-20 w-20 rounded-full object-cover"
              />
            </a>
            <ul
              className="bg-[#d9b flex items-center h-full pl-12  pr-12 text-[#ccc]
 bg-opacity-25  justify-between mt-10 space-x-8 mr-9 "
            >
              <a href="#about-me">
                <li className="font-extrabold text-base text-[#ccc] hover:text-[#279EFF]">
                  ABOUT ME
                </li>
              </a>
              <a href="#services">
                <li className="font-extrabold text-base text-[#ccc]  hover:text-[#279EFF]">
                  SERVICES
                </li>
              </a>
              <a a href="#testimonials">
                <li className="font-extrabold text-base text-[#ccc]  hover:text-[#279EFF] ">
                  TESTIMONIAL
                </li>
              </a>
              <a a href="#profolios">
                <li className="font-extrabold text-base text-[#ccc] hover:text-[#279EFF]  ">
                  PROFOLIO
                </li>
              </a>
              <a href="#contact-me">
                <li className="font-extrabold text-base text-[#ccc]  hover:text-[#279EFF] ">
                  CONTACT ME
                </li>
              </a>
            </ul>
          </nav>
          <div className="h-screen">
            <div className="flex">
              <div className="mt-20">
                <h1 className="text-5xl text-[#ccc] mx-auto mb-2 mt-5 uppercase font-extrabold  pt-2 leading-[1.2] ">
                  Crafting Tech Experiences, One Line of Code at a Time.
                </h1>
                <h5 className="text-2xl mt-10   tracking-wider text-[#ccc] ">
                  experiences that combine innovation and elegance one line of
                  code at a time.
                </h5>
              </div>
              <div className="  w-full  h-[] ">
                <img src={mam} alt="" className="h-[550px]" />
              </div>
            </div>
            <div className="flex gap-8 mt-[-60px]">
              <div className="">
                <a
                  href=""
                  className="inline-block bg-[#279EFF] text-white py-3 px-8  font-bold rounded-md uppercase  tracking-wider sm:text-lg"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-">
                <a
                  href=""
                  className="inline-block bg-[#279EFF] text-white py-3 px-8  font-bold rounded-md uppercase  tracking-wider sm:text-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
export default Header;
