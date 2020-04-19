import Header from "components/Header/Header";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import MainContainer from "containers/MainContainer";

const App: FC = () => {
  return (
    <Box className="App">
      <Flex flexDirection="column" minHeight="100vh">
        <Header />
        <MainContainer />
      </Flex>
    </Box>
  );
};

export default App;
