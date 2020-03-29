import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";
import Headers from "components/Header/Header";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import { Provider } from "react-redux";
import configureStore from "state";
import { IDispatchToProps, IBookState } from "state/ducks/book/types";
import MainContainer from "components/MainContainer/MainContainer";

const initialState = (window as any).initialReduxState;

const store = configureStore(initialState);

// const addIdsToBookData = (bookData: BookData[]): any => {
//   if (bookData.length === 0) {
//     return [];
//   } else {
//     return bookData.map((book: BookData, index: number) => {
//       return { ...book, id: index };
//     });
//   }
// };

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

type AllProps = IBookState & IDispatchToProps;

const App: FC = () => {
  // const [bookData, setBookData] = useState<BookData[]>([]);

  // const handleSearch = async (query?: string): Promise<void> => {
  //   const data: BookData[] = await getComics(url, token, query);
  //   setBookData(data);
  // };

  // useEffect(() => {
  //   (async function getData() {
  //     handleSearch(undefined);
  //   })();
  // }, []);

  return (
    <Provider store={store}>
      <Box className="App">
        <Flex flexDirection="column">
          <Headers />
          <MainContainer />
        </Flex>
      </Box>
    </Provider>
  );
};

export default App;
