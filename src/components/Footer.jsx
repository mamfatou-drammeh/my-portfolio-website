import { Fragment } from "react";
import logo from "../assets/images/logo.png";
import Container from "../container/Container";

function Footer() {
  return (
    <Fragment>
      <div className="bg-black text-white border-t border-white/30">
        <Container>
          <div className="flex flex-col sm:flex-col md:flex-row justify-between py-20">
            <div className="w-full sm:w-full md:w-1/4 px-4">
              <div>
                <img
                  src={logo}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  voluptatem ea ey
                </p>
                <div className="flex space-x-4 items-center text-white mt-5 justify-center">
                  <a href=" https://www.facebook.com/mamfa.drammeh.5">
                    <i className="fa-brands fa-facebook fa-xl"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter fa-xl"></i>
                  </a>
                  <a href=" https://www.instagram.com/ohnomamfa__/">
                    <i className="fa-brands fa-square-instagram fa-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/4 md:w-1/4 px-4 ">
              <h2 className="font-semibold text-white tracking-widest uppercase mb-3">
                Navigate
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/about-us">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/gallery">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/contact-us">
                    Testimonial
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full sm:w-1/4 md:w-1/4 px-4">
              <h2 className="font-semibold text-white tracking-widest uppercase mb-3">
                Profolio
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="text-white" href="/photography">
                    Contact Me
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/videos">
                    services
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/equipment"></a>
                </li>
              </nav>
            </div>
            <div className="w-full sm:w-1/4 md:w-1/4 px-4">
              <h2 className="font-semibold text-white tracking-widest uppercase mb-3">
                FOLLOW MY SOCIALS
              </h2>
              <nav className="list-none mb-10 space-y-3">
                <li>
                  <a className="text-white" href="/Facebook">
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/ohnomamfa__/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/">
                    Linkedin
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </Container>
        <div className="bg-gray-900 bg-opacity-30">
          <div className="mx-auto py-4 px-5 flex items-center justify-between text-sm text-gray-100 flex-row">
            <p className="mb-2 md:mb-0">© 2023 MAMFA All right reserved</p>
            <a href="">
              Powered by
              <span className="text-primary hover:underline">DEV MAM</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
