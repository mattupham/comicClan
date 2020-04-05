import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "assets/backArrow.svg";
import { Link } from "react-router-dom";

const Title = styled.div`
  height: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.3rem;
  text-decoration-line: underline;
  color: #777777;
  margin-top: 0.4rem;
  margin-left: 0.659rem;
  position: relative;
  bottom: 0;
`;

const BackLink: FC = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }} data-testid="backLink">
      <Flex flexDirection="row" alignItems="flex-end">
        <Box mb=".05rem">
          <BackArrow data-testid="backArrow" />
        </Box>
        <Title>Back to collection</Title>
      </Flex>
    </Link>
  );
};

export default BackLink;
