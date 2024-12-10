import React from "react";
import logo from "../assets/images/logo.png";
import Container from "../container/Container";

function Footer() {
  const socialLinks = [
    { icon: "fa-facebook", url: "https://www.facebook.com/mamfa.drammeh.5" },
    { icon: "fa-twitter", url: "#" },
    { icon: "fa-instagram", url: "https://www.instagram.com/ohnomamfa__/" },
    { icon: "fa-linkedin", url: "#" },
  ];

  const navLinks = [
    {
      title: "Navigate",
      links: [
        { name: "Home", url: "/" },
        { name: "About Me", url: "/about-us" },
        { name: "Services", url: "/gallery" },
        { name: "Testimonial", url: "/contact-us" },
      ],
    },
    {
      title: "Portfolio",
      links: [
        { name: "Contact Me", url: "/photography" },
        { name: "Services", url: "/videos" },
      ],
    },
    {
      title: "Follow My Socials",
      links: [
        { name: "Facebook", url: "https://www.facebook.com/mamfa.drammeh.5" },
        { name: "Instagram", url: "https://www.instagram.com/ohnomamfa__/" },
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white border-t border-white/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <img
              src={logo}
              alt="MAMFA Logo"
              className="h-20 w-20 rounded-full object-cover border-2 border-[#279EFF] p-1"
            />
            <p className="text-gray-300 max-w-xs">
              Empowering your digital presence with innovative solutions and
              creative designs.
            </p>
            <div className="flex space-x-4 items-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#279EFF] transition-colors duration-300"
                >
                  <i className={`fa-brands ${social.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {navLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="font-semibold text-[#279EFF] tracking-wider uppercase text-lg">
                {section.title}
              </h2>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300"
                    href={link.url}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-gray-900 bg-opacity-30">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2023 MAMFA. All rights reserved.</p>
            <a href="#" className="mt-2 sm:mt-0">
              Powered by{" "}
              <span className="text-[#279EFF] hover:underline">DEV MAM</span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
