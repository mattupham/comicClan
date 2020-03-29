import axios from "axios";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";
import Headers from "components/Header/Header";
import Main from "components/Main/Main";
import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "rebass";
import { Provider } from "react-redux";
import configureStore from "state";

const initialState = (window as any).initialReduxState;

const store = configureStore(initialState);

const url = "https://comicclan.vett.io/comics";
const token = "ComicClanVettIO2019";

const addIdsToBookData = (bookData: BookData[]): any => {
  if (bookData.length === 0) {
    return [];
  } else {
    return bookData.map((book: BookData, index: number) => {
      return { ...book, id: index };
    });
  }
};

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
    .then(({ data }) => addIdsToBookData(data))
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
  // id: number;
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
    <Provider store={store}>
      <Box className="App">
        <Flex flexDirection="column">
          <Headers />
          <Main bookData={bookData} handleSearch={handleSearch} />
        </Flex>
      </Box>
    </Provider>
  );
};

export default App;
