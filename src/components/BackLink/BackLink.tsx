import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "assets/backArrow.svg";
import { Link } from "react-router-dom";

const StyledLink = styled.a`
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
  &:hover {
    cursor: pointer;
  }
`;

const BackLink: FC = () => {
  return (
    <Link to="/">
      <Flex flexDirection="row" alignItems="flex-end">
        <Box mb=".05rem">
          <BackArrow />
        </Box>
        <StyledLink>Back to collection</StyledLink>
      </Flex>
    </Link>
  );
};

export default BackLink;
