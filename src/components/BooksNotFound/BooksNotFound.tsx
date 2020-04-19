import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import { RobotoBold } from "components/Styled/Styled";

const Container = styled(Flex)`
  color: #cccccc;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1 1 auto;
`;

const CenterBox = styled(RobotoBold)`
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
