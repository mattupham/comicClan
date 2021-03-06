import { ReactComponent as ComicClanLogoSVG } from "assets/comicClanLogo.svg";
import { ReactComponent as ComicClanTextSVG } from "assets/comicClanText.svg";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { COLORS } from "components/Styled/Styled";

const Header = styled.header`
  width: 100%;
  height: 7.3rem;
  background: ${COLORS.DarkGrayDark};
`;

const StyledHeader: FC = () => {
  return (
    <Header className="header" data-testid="header">
      <Flex>
        <Box mt="2.3rem" mb="2rem" ml="2.8rem" mr="1.2rem">
          <ComicClanLogoSVG data-testid="comicClanLogo" />
        </Box>
        <Box mt="2.537rem" mb="2.57rem">
          <ComicClanTextSVG data-testid="comicClanText" />
        </Box>
      </Flex>
    </Header>
  );
};

export default StyledHeader;
