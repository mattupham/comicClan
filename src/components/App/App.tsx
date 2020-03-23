import axios from "axios";
import Headers from "components/Header/Header";
import Main from "components/Main/Main";
import React, { FC, useEffect } from "react";
import { Box, Flex } from "rebass";

// pull into ENV
const url = "https://comicclan.vett.io/comics";
const token = "ComicClanVettIO2019";
// const term = "?q=The True Story";

const getComics = (url: string, token: string) => {
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

const App: FC = () => {
  useEffect(() => {
    getComics(url, token);
  }, []);

  return (
    <Box className="App">
      <Flex flexDirection="column">
        <Headers />
        <Main />
      </Flex>
    </Box>
  );
};

export default App;
