import Header from "components/Header/Header";
import { ScrollToTop } from "components/ScrollToTop/ScrollToTop";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import MainContainer from "containers/MainContainer";

const App: FC = () => {
  return (
    <Box className="App">
      <ScrollToTop data-testid="scrollToTop" />
      <Flex flexDirection="column" minHeight="100vh">
        <Header />
        <MainContainer />
      </Flex>
    </Box>
  );
};

export default App;
