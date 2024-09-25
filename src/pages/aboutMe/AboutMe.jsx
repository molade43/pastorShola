import React from "react";
import "./aboutMe.css";
import Header from "../../components/header/Header";
import Home from "../../aboutComponents/aboutMehome/Home";
import AboutShola from "../../aboutComponents/about/AboutShola";
import ImageSlider from "../../components//imageSlider/ImageSlider";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";
import Qualification from "../../components/qualification/Qualification";

const AboutMe = () => {
  return (
    <div>
      About me
      <Header />
      <main className="main">
        <Home />
        <AboutShola />
        <Qualification />
        <ImageSlider />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default AboutMe;
