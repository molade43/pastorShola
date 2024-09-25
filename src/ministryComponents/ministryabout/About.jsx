import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import styled from "styled-components";
// import AboutImg from "../../assets/shola/pastorShola-Yellow background.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 40px;
  width: 100%;
  margin-bottom: 30px;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;
const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 20px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: var(--title-color);
  border-radius: 50%;
  margin-right: 5px;
`;

const Line = styled.div`
  width: 100px; /* Adjust the width as needed */
  height: 4px;
  background-color: var(--title-color);
  margin-left: 5px;
`;

// const Img = styled.img`
//   flex: 1;
// `;

const AboutData = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h1`
  font-size: var(--h1-font-size);
  color: var(--title-color);
  text-align: center;
  margin-top: 0;
  text-transform: capitalize;
`;
const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
`;

const GetInTouch = styled.a`
  margin: 10px 0;
`;

const About = () => {
  return (
    <section className="about section container" id="about">
      {/* <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span> */}

      <AboutContainer className="about__container  grid">
        {/* <Img src={AboutImg} alt="" className="about__img" srcset="" /> */}
        <AboutData className="about__data">
          <AboutTitle className="section__title">Ministry</AboutTitle>
          <DotContainer>
            <Dot />
            <Dot />
            <Dot />
            <Line />
          </DotContainer>
          <AboutDescription className="about__description">
            Pastor (Dr) Olushola Mark Obikanye A Life of Faith, Leadership, and
            Empowerment Pastor (Dr) Olushola Mark Obikanye has devoted his life
            to faith and service since being born again on May 14, 1987. His
            spiritual journey began at just six years old when he accepted
            Christ as his Lord and Savior, setting the foundation for a lifetime
            of spiritual growth and leadership. With more than 25 years of
            ministry experience,
          </AboutDescription>
          <Link to="/about-me">
            {" "}
            <GetInTouch href="#contact" className="button button--flex">
              Read More
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </GetInTouch>
          </Link>
        </AboutData>
      </AboutContainer>
    </section>
  );
};

export default About;
