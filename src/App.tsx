import Header from "components/Header/Header";
import { ScrollToTop } from "components/Shared/Shared";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import { Provider } from "react-redux";
import configureStore from "state";
import MainContainer from "containers/MainContainer";

const initialState = (window as any).initialReduxState;

const store = configureStore(initialState);

const App: FC = () => {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <Box className="App">
        <Flex flexDirection="column">
          <Header />
          <MainContainer />
        </Flex>
      </Box>
    </Provider>
  );
};

export default App;
