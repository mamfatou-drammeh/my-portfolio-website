import Container from "../container/Container";
// eslint-disable-next-line no-unused-vars
import React from "react";
import background from "../assets/images/image.jpg";

function ContactUs() {
  return (
    <div
      className=" bg-[#101010] mx-auto px-4 py-20 items-center "
      id="contact-me"
    >
      <Container>
        <div className="grid grid-cols-1  gap-8 md:grid-cols-2">
          <div className="space-y-7 w-full md:w-[400px] ">
            <div className="pb-">
              <h3 className="uppercase mb-4 font-bold text-[#279EFF] text-4xl ">
                Contact Me
              </h3>
              <h2 className="font-semibold text-5xl uppercase text-white ">
                Get in Touch
              </h2>
            </div>
            <div className="flex space-x-4 text-white">
              <i className="fa-solid fa-mobile-button fa-2xl"></i>
              <div className="">
                <p className="text-xl font-semibold uppercase mb-2 text-[#279EFF]">
                  Phone
                </p>
                <span className="dark:text-[#ccc] text-gray-800">3281675</span>
              </div>
            </div>

            <div className="flex space-x-4 text-white">
              <i className="fa-solid fa-envelope fa-2xl"></i>
              <div className="">
                <p className="text-xl font-semibold uppercase mb-2 text-[#279EFF]">
                  Email
                </p>
                <span className="text-white">
                  mamfatoudrammeh2002@gmail.com
                </span>
              </div>
            </div>
            <div className="flex space-x-4 text-white">
              <i className="fa-solid fa-location-dot fa-2xl"></i>
              <div className="">
                <p className="text-xl font-semibold uppercase mb-2 text-[#279EFF]">
                  Address
                </p>
                <span className="text-white">Banjul,The Gambia</span>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <form action="">
              <div className="grid grid-cols-2 gap-8 text-white">
                <div className="col-span-1">
                  <input
                    type="text"
                    className="w-full block p-3 bg-opacity-10 border-none bg-white placeholder-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="email"
                    className="w-full block p-3 bg-opacity-10 border-none bg-white placeholder-white"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    className="w-full block p-3 bg-opacity-10 border-none bg-white placeholder-white"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    className="w-full block p-3 bg-opacity-10 border-none bg-white placeholder-white"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-span-2">
                  <textarea
                    cols="30"
                    rows="4"
                    className="w-full block p-3 bg-opacity-10 border-none bg-white placeholder-white"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-span-2 flex space-x-8 items-center">
                  <button className="font-semibold uppercase py-3 px-6 bg-white text-gray-800 rounded">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
