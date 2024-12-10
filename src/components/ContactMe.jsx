import React, { useState } from "react";
import Container from "../container/Container";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div
      className="bg-gradient-to-b from-[#101010] to-[#1a1a1a] mx-auto px-4 py-20 items-center"
      id="contact-me"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8 w-full md:w-[400px]">
            <div className="space-y-4">
              <h3 className="uppercase text-[#279EFF] font-bold text-2xl">
                Contact Me
              </h3>
              <h2 className="font-bold text-[18px]  text-white leading-tigh">
                Let's Create Something Amazing Together
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "fa-mobile-button",
                  title: "Phone",
                  content: "3281675",
                },
                {
                  icon: "fa-envelope",
                  title: "Email",
                  content: "gurlcoder@gmail.com",
                },
                {
                  icon: "fa-location-dot",
                  title: "Address",
                  content: "Banjul, The Gambia",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 text-white group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#279EFF] bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                    <i
                      className={`fa-solid ${item.icon} text-2xl text-[#279EFF] group-hover:text-white`}
                    ></i>
                  </div>
                  <div>
                    <p className="text-xl font-semibold uppercase mb-1 text-[#279EFF]">
                      {item.title}
                    </p>
                    <span className="text-gray-400">{item.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "name", type: "text", placeholder: "Your Name" },
                  { name: "email", type: "email", placeholder: "Your Email" },
                  { name: "phone", type: "tel", placeholder: "Phone" },
                  { name: "subject", type: "text", placeholder: "Subject" },
                ].map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="w-full block p-3 bg-white bg-opacity-10 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#279EFF] focus:border-transparent transition-all duration-300"
                    placeholder={input.placeholder}
                    required
                  />
                ))}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full block p-3 bg-white bg-opacity-10 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#279EFF] focus:border-transparent transition-all duration-300"
                placeholder="Message"
                required
              ></textarea>

              <div className="flex items-center">
                <button
                  type="submit"
                  className="font-semibold uppercase py-3 px-8 bg-[#279EFF] text-white rounded-md hover:bg-[#1a7ac7] transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactUs;
