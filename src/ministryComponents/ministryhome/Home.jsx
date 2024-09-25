import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileImage from "../../assets/shola/sholaBlackAgbada.jpg";
import "./ministryhome.css";
import Social from "./Social";
// import Data from "./Data";
import ScrollDown from "./ScrollDown";

const HomeContent = styled.div`
  grid-template-columns: 116px repeat(2, 1fr);
  padding-top: 5.5rem;
  column-gap: 2rem;
  align-items: center;
`;

const profileAnimate = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

const HomeImg = styled.img`
  background: url(${ProfileImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(255, 255, 255 / 30%);
  order: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: ${profileAnimate} 8s ease-in-out infinite 1s;
`;

const Home = () => {
  return (
    <section className="home ministry section" id="home">
      <div className="home__container container grid">
        <HomeContent className="home__content grid">
          <Social />
          {/* <HomeImg className="home__img"></HomeImg> */}
          {/* <Data /> */}
        </HomeContent>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
