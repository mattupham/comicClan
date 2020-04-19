import React from "react";
import styled, { keyframes } from "styled-components";
import { Box, Text } from "rebass";

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
  border: 0.8rem solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  border-color: #fff transparent transparent transparent;
`;

export const Loader = () => (
  <LoaderContainer data-testid="loader">
    <LoaderDiv></LoaderDiv>
    <LoaderDiv delay="-.45s"></LoaderDiv>
    <LoaderDiv delay="-0.3s"></LoaderDiv>
    <LoaderDiv delay="-0.15s"></LoaderDiv>
  </LoaderContainer>
);

export const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
  margin: 0;
`;

export const Roboto = styled(Text)`
  font-family: Roboto;
`;

export const RobotoMed = styled(Roboto)`
  font-weight: 500;
`;

export const RobotoBold = styled(Roboto)`
  font-weight: bold;
`;
