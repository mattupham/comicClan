import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";
import { RobotoBold, COLORS } from "components/Styled/Styled";

const Container = styled(Flex)`
  color: ${COLORS.LightGrayLight};
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex: 1 1 auto;
`;

const TextCenter = styled(RobotoBold)`
  text-align: center;
`;

const BooksNotFound = () => (
  <Container>
    <TextCenter fontSize={["6rem", "8rem", "10rem"]}>
      No results found
    </TextCenter>
    <TextCenter mt="6rem" fontSize={["2.4rem", "3.2rem", "4rem"]}>
      Please make sure your words are spelled correctly or use less or different
      keywords
    </TextCenter>
  </Container>
);

export default BooksNotFound;
