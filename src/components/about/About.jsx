import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Info from "./Info";
import "./about.css";
import AboutImg from "../../assets/shola/pastorShola-Yellow background.jpg";
import CV from "../../assets/about.jpg";

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const AboutDescription = styled.p`
  text-align: justify;
  color: #111633;
  font-size: 20px;
  line-height: 31px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    padding: 0;
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1.5rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// Your React component
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">
        A Life of Faith, Leadership, and Empowerment
      </span>

      <AboutContainer className="about__container container grid">
        <AboutImage src={AboutImg} alt="Pastor Shola" />

        <div className="about__data">
          <AboutDescription className="about__description">
            Pastor (Dr) Olushola Mark Obikanye A Life of Faith, Leadership, and
            Empowerment Pastor (Dr) Olushola Mark Obikanye has devoted his life
            to faith and service since being born again on May 14, 1987. His
            spiritual journey began at just six years old when he accepted
            Christ as his Lord and Savior, setting the foundation for a lifetime
            of spiritual growth and leadership. With more than 25 years of
            ministry experience,
          </AboutDescription>
          <Link to="/about-me" className="button button--flex">
            More About Me
          </Link>
        </div>
      </AboutContainer>
    </section>
  );
};

export default About;
