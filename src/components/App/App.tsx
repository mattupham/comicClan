import axios from "axios";
import Headers from "components/Header/Header";
import Main from "components/Main/Main";
import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "rebass";

// pull into ENV
const url = "https://comicclan.vett.io/comics";
const token = "ComicClanVettIO2019";
// const term = "?q=The True Story";

const getComics = (url: string, token: string) =>
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(({ data }) => data)
    .catch(err => console.log(err));

export interface BookData {
  name: string;
  writer: string;
  artist: string;
  publication: string;
  owner: string;
  rating: number;
  image: string;
  summary: string;
  year: number;
}

const App: FC = () => {
  const [bookData, setBookData] = useState<BookData[]>([]);
  console.log("BOOK DATA: ", bookData);
  useEffect(() => {
    (async function getData() {
      const data: BookData[] = await getComics(url, token);
      setBookData(data);
    })();
  }, []);

  return (
    <Box className="App">
      <Flex flexDirection="column">
        <Headers />
        <Main bookData={bookData} />
      </Flex>
    </Box>
  );
};

export default App;
