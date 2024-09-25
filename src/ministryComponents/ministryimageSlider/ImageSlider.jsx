import AboutImg from "../../assets/shola/pastorShola-Yellow background.jpg";
import AboutImg2 from "../../assets/shola/IMG-20240709-WA0009.jpg";
import React from "react";
import "./imageslider.css";

const ImageSlider = () => {
  return (
    <section className="image section">
      <h2 className="section__title">Images</h2>
      <span className="section__subtitle">How he looks</span>

      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={AboutImg2} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 8 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 9 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
          <div className="item" style={{ "--position": 10 }}>
            <img src={AboutImg} alt="Pastor Shola" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
