import React, { useState, useEffect } from "react";
import mam from "../assets/images/mam.png";
import logo from "../assets/images/logo2.png";
import Container from "../container/Container";

const navItems = [
  { href: "#about-me", label: "ABOUT ME" },
  { href: "#services", label: "SERVICES" },
  { href: "#testimonials", label: "TESTIMONIAL" },
  { href: "#portfolios", label: "PORTFOLIO" },
  { href: "#contact-me", label: "CONTACT ME" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-black min-h-screen">
      <Container>
        <nav className="flex items-center justify-between h-20 relative z-50">
          <a href="/" className="text-[#279EFF]">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover"
            />
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center justify-center md:space-x-8 bg-black bg-opacity-95 text-[#ccc] fixed inset-0 z-40 md:relative md:bg-transparent`}
          >
            {navItems.map((item) => (
              <li key={item.href} className="my-6 md:my-0">
                <a
                  href={item.href}
                  className="font-extrabold text-2xl md:text-base hover:text-[#279EFF] transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-screen flex flex-col md:flex-row items-center justify-between pt-10 md:pt-0">
          <div className="mt-10 md:mt-20 w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#ccc] mb-2 mt-5 uppercase font-extrabold leading-tight">
              Crafting Tech Experiences, One Line of Code at a Time.
            </h1>
            <h5 className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-10 tracking-wider text-[#ccc]">
              Experiences that combine innovation and elegance one line of code
              at a time.
            </h5>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 md:mt-10 justify-center md:justify-start">
              <a
                href="#get-started"
                className="inline-block bg-[#279EFF] text-white py-3 px-6 md:px-8 font-bold rounded-md uppercase tracking-wider text-sm md:text-base lg:text-lg transition-colors hover:bg-[#1E7AC6]"
              >
                Get Started
              </a>
              <a
                href="#contact-me"
                className="inline-block bg-[#279EFF] text-white py-3 px-6 md:px-8 font-bold rounded-md uppercase tracking-wider text-sm md:text-base lg:text-lg transition-colors hover:bg-[#1E7AC6]"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 hidden md:block">
            <img
              src={mam}
              alt="Profile"
              className="h-[450px] lg:h-[550px] w-auto mx-auto md:mx-0"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
