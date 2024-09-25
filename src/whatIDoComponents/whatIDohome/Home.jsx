import React from "react";
import styled from "styled-components";
import WhatIDoImg from "../../assets/shola/WIDB.jpg";
import "./whatIDoHome.css";

const HomeContainer = styled.div`
  row-gap: 25rem;
`;
const HomeContent = styled.div`
  grid-template-columns: 116px repeat(2, 1fr);
  padding-top: 5.5rem;
  column-gap: 2rem;
  align-items: center;
`;

const Home = () => {
  return (
    <section className="home section" id="home">
      <img src={WhatIDoImg} alt="" className="" srcset="" />
      <HomeContainer className="home__container container grid">
        <HomeContent className="home__content grid"></HomeContent>
      </HomeContainer>
    </section>
  );
};

export default Home;
