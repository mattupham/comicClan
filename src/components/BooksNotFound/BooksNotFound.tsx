import React from "react";
import styled from "styled-components";
import { Box, Flex } from "rebass";

const Container = styled(Flex)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #cccccc;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1 1 auto;
`;

const CenterBox = styled(Box)`
  text-align: center;
`;

const BooksNotFound = () => (
  <Container>
    <CenterBox fontSize="10rem">No results found</CenterBox>
    <CenterBox mt="6rem" fontSize="4rem">
      Please make sure your words are spelled correctly or use less or different
      keywords
    </CenterBox>
  </Container>
);

export default BooksNotFound;
