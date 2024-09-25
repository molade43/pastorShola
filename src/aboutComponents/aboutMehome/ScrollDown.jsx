import React from "react";
import styled from "styled-components";

const HomeScroll = styled.div`
  margin-left: 9.25rem;
`;

// const HomeScrollButton = styled.a`
//   border: 1px solid var(--container-color);
//   border-radius: 10px;
//   padding: 5px;
// `;

const HomeScrollName = styled.span`
  color: var(--container-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
  margin-left: 2px;
`;

const HomeScrollArrow = styled.i`
  font-size: 1.2rem;
  color: var(--container-color);
`;

const ScrollDown = () => {
  return (
    <HomeScroll className="home__scroll">
      <a href="#about" className="home__Scroll-Button button--flex">
        <svg
          width="32px"
          height="32px"
          class="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            class="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--container-color)",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--container-color)",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <HomeScrollName className="home__scroll-name">
          Scroll down
        </HomeScrollName>
        <HomeScrollArrow className="uil uil-arrow-down home__scroll-arrow"></HomeScrollArrow>
      </a>
    </HomeScroll>
  );
};

export default ScrollDown;
