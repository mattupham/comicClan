import { ReactComponent as ComicClanLogoSVG } from "assets/comicClanLogo.svg";
import { ReactComponent as ComicClanTextSVG } from "assets/comicClanText.svg";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 7.3rem;
  background: #535353;
`;

const StyledHeader: FC = () => {
  return (
    <Header className="header">
      <Flex>
        <Box mt="2.3rem" mb="2rem" ml="2.8rem" mr="1.2rem">
          <ComicClanLogoSVG />
        </Box>
        <Box mt="2.537rem" mb="2.57rem">
          <ComicClanTextSVG />
        </Box>
      </Flex>
    </Header>
  );
};

export default StyledHeader;
