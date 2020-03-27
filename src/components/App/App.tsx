import axios from "axios";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";
import Headers from "components/Header/Header";
import Main from "components/Main/Main";
import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "rebass";

// pull into ENV
const url = "https://comicclan.vett.io/comics";
const token = "ComicClanVettIO2019";
// const term = "?q=The True Story";

const getComics = (
  url: string,
  token: string,
  queryString?: string
): Promise<BookData[]> => {
  if (queryString) {
    url = `${url}?q=${queryString}`;
  }

  return axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(({ data }) => data)
    .catch(err => console.log(err));
};

export interface BookData {
  name: string;
  [GROUP_OPTIONS.WRITER]: string;
  [GROUP_OPTIONS.ARTIST]: string;
  publication: string;
  [GROUP_OPTIONS.OWNER]: string;
  rating: number;
  image: string;
  summary: string;
  [GROUP_OPTIONS.YEAR]: number;
}

const App: FC = () => {
  const [bookData, setBookData] = useState<BookData[]>([]);

  const handleSearch = async (query: string) => {
    const data: BookData[] = await getComics(url, token, query);
    setBookData(data);
  };

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
        <Main bookData={bookData} handleSearch={handleSearch} />
      </Flex>
    </Box>
  );
};

export default App;
