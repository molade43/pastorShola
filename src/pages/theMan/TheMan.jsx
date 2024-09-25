import React from "react";
import Header from "../../components/header/Header";
import Home from "../../themanComponents/themanhome/Home";
import About from "../../themanComponents/themanabout/About";
import Skills from "../../themanComponents/themanskills/Skills";
import Services from "../../themanComponents/themanservices/Services";
import Qualification from "../../themanComponents/themanqualification/Qualification";
import Testimonials from "../../themanComponents/themantestimonials/Testimonials";
import Contact from "../../themanComponents/themancontact/Contact";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";

const TheMan = () => {
  return (
    <>
      <Header />;
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default TheMan;
