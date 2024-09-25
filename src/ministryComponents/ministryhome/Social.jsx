import React from "react";
import styled from "styled-components";

const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;

const HomeSocialIcon = styled.a`
  font-size: 1.25rem;
  color: var(--container-color);

  &:hover {
    color: var(--title-color-dark);
  }
`;

const Social = () => {
  return (
    <HomeSocial className="home__social">
      <HomeSocialIcon href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-instagram"></i>
      </HomeSocialIcon>

      <HomeSocialIcon href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-linkedin"></i>
      </HomeSocialIcon>

      <HomeSocialIcon href="#" className="home__social-icon" target="_blank">
        <i className="uil uil-github-alt"></i>
      </HomeSocialIcon>
    </HomeSocial>
  );
};

export default Social;
