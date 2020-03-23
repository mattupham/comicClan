import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 73px;
  left: 0px;
  top: 0px;
  background: #535353;
`;

const StyledHeader = () => {
  return <Header className="header">Hello World</Header>;
};

export default StyledHeader;
