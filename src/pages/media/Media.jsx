import React from "react";
import "./media.css";
import Header from "../../ministryComponents/ministryheader/Header";
import Home from "../../ministryComponents/ministryhome/Home";
import About from "../../ministryComponents/ministryabout/About";
import Audio from "../../ministryComponents/ministryAudio/Audio";
import Videos from "../../ministryComponents/ministryVideos/Videos";
import Qualification from "../../ministryComponents/ministryqualification/Qualification";
import Testimonials from "../../ministryComponents/ministrytestimonials/Testimonials";
import Contact from "../../ministryComponents/ministrycontact/Contact";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";

const Media = () => {
  return (
    <>
      <Header />;
      <main className="main">
        <Home />
        <About />
        <Audio />
        <Videos />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Media;
