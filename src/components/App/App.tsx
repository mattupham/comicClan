import Header from "components/Header/Header";
import { ScrollToTop } from "components/Shared/Shared";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import MainContainer from "containers/MainContainer";

const App: FC = () => {
  return (
    <Box className="App">
      <ScrollToTop data-testid="scrollToTop" />
      <Flex flexDirection="column">
        <Header />
        <MainContainer />
      </Flex>
    </Box>
  );
};

export default App;
