import React from "react";
import styled, { keyframes } from "styled-components";
import { Box } from "rebass";
import { COLORS } from "components/Styled/Styled";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoaderContainer = styled(Box)`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
`;

const LoaderDiv = styled(Box)<{
  delay?: string;
}>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0.8rem;
  border: 0.8rem solid ${COLORS.White};
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  border-color: #fff transparent transparent transparent;
`;

const Loader = () => (
  <LoaderContainer data-testid="loader">
    <LoaderDiv></LoaderDiv>
    <LoaderDiv delay="-.45s"></LoaderDiv>
    <LoaderDiv delay="-0.3s"></LoaderDiv>
    <LoaderDiv delay="-0.15s"></LoaderDiv>
  </LoaderContainer>
);

export default Loader;
