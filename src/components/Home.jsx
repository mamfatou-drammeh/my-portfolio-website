import React, { Fragment } from "react";
import "../../src/index.css";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Profolios from "../components/Profolios";
import Footer from "../components/Footer";
import ContactMe from "../components/ContactMe";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <AboutMe></AboutMe>
      <Services></Services>
      <Testimonials></Testimonials>
      <Profolios></Profolios>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
