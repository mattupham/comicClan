import axios from "axios";
import Headers from "components/Header";
import Main from "components/Main";
import React, { FC, useEffect } from "react";
import { Flex } from "rebass";

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
    <div className="App">
      <Flex flexDirection="column">
        <Headers />
        <Main />
      </Flex>
    </div>
  );
};

export default App;
