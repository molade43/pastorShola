import React from "react";
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
// import ImageSlider from "../../components//imageSlider/ImageSlider";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Contact />
        {/* <ImageSlider /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Homepage;
