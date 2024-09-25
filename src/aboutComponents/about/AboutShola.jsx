import React, { useState } from "react";
import Info from "./Info";
import styled from "styled-components";
import "./aboutShola.css";
import AboutImg from "../../assets/shola/pastorShola-Yellow background.jpg";
import CV from "../../assets/about.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  column-gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr !important;
    row-gap: 1.5rem;
  }
`;

const AboutDescription = styled.p`
  text-align: justify;
  font-size: 20px;
  line-height: 31px;
`;

const AboutDataInfoCv = styled.div`
  text-align: center;
`;

const GetInTouch = styled.a`
  margin: 10px 0;
`;

const About = () => {
  // Full description text
  const fullDescription = `
    Pastor (Dr) Olushola Mark Obikanye has devoted his life to faith and service since being born again on May 14, 1987. His spiritual journey began at just six years old when he accepted Christ as his Lord and Savior, setting the foundation for a lifetime of spiritual growth and leadership. With more than 25 years of ministry experience, Pastor Obikanye has become a respected spiritual leader, serving as the Minister In Charge of Rhema Chapel International Churches, Ketu Installation, and providing Zonal Oversight for Lagos Zone 4. His dynamic sermons, infused with deep prophetic insight, emphasize the importance of cultivating a personal relationship with God. Beyond his spiritual work, Dr. Obikanye is a seasoned agripreneur with significant experience in agricultural finance, corporate strategy, and project management. Holding a PhD in Credit Management, he has leveraged his expertise to empower individuals and businesses through agripreneurship consulting services. A visionary and compassionate leader, Dr. Obikanye is dedicated to inspiring others to achieve their full potential. Through his ministry, consulting, and philanthropic efforts, he continues to positively impact countless lives.
  `;

  // Split description into chunks of 100 words
  const wordLimit = 100;
  const descriptionWords = fullDescription.split(" ");
  const [visibleWords, setVisibleWords] = useState(wordLimit);

  const showMore = () => {
    setVisibleWords((prev) =>
      prev + wordLimit > descriptionWords.length
        ? descriptionWords.length
        : prev + wordLimit
    );
  };

  const showLess = () => {
    setVisibleWords(wordLimit);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">(Dr) Olushola Mark Obikanye</h2>
      <span className="section__subtitle">
        A Life of Faith, Leadership, and Empowerment
      </span>

      <AboutContainer className="about__container container grid">
        <div className="about__data">
          <AboutDescription className="about__description">
            {descriptionWords.slice(0, visibleWords).join(" ")}

            {visibleWords < descriptionWords.length ? (
              <span>
                ...{" "}
                <button onClick={showMore} className="read-more-btn">
                  Read More
                </button>
              </span>
            ) : (
              <span>
                <button onClick={showLess} className="read-more-btn">
                  Show Less
                </button>
              </span>
            )}
          </AboutDescription>

          <GetInTouch href="#contact" className="button button--flex">
            Get In Touch
            <svg
              className="button__icon"
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
        </div>
        <AboutDataInfoCv>
          <img src={AboutImg} alt="" className="about__img" />
          <Info />
          <a download="" href={CV} className="button button--flex">
            Download CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </AboutDataInfoCv>
      </AboutContainer>
    </section>
  );
};

export default About;
