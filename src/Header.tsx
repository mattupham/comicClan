import React from "react";
import styled from "styled-components";
import ComicClanLogo from "../

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 73px;
  left: 0px;
  top: 0px;
  background: #535353;
`;

const ComicClanLogo = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

const StyledHeader = () => {
  return <Header className="header"></Header>;
};

export default StyledHeader;
