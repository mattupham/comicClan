import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "assets/backArrow.svg";
import { Link } from "react-router-dom";
import { RobotoMed } from "components/Styled/Styled";

const Title = styled(RobotoMed)`
  height: 23px;
  font-size: 2rem;
  line-height: 2.3rem;
  text-decoration-line: underline;
  color: #777777;
  margin-left: 0.659rem;
  position: relative;
  bottom: 0;
`;

const BackLink: FC = () => {
  return (
    <Box mt="3.2rem">
      <Link to="/" style={{ textDecoration: "none" }} data-testid="backLink">
        <Flex flexDirection="row" alignItems="flex-end">
          <Box mb=".05rem">
            <BackArrow data-testid="backArrow" />
          </Box>
          <Title>Back to collection</Title>
        </Flex>
      </Link>
    </Box>
  );
};

export default BackLink;
