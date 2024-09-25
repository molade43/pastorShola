import React from "react";
import "./comingSoon.css";
import styled from "styled-components";

const ComingSoonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 100vh;
`;

const ComingSoon = () => {
  return <ComingSoonContainer>Coming Soon...</ComingSoonContainer>;
};

export default ComingSoon;
