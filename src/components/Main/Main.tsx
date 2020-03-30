import { IBook } from "state/ducks/book/types";
import BookList from "components/BookList/BookList";
import GroupOptions, {
  GROUP_OPTIONS,
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { groupBy, sortBy } from "utils/utils";
// import BookPage from "components/BookPage/BookPage";
// import { useParams, Route } from "react-router-dom";
import { Route } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";

interface IProps {
  bookData: IBook[];
  // handleSearch: (val: string) => void;
  // handleSearch: (val: any) => void;
}

export type GroupKey =
  | GROUP_OPTIONS.YEAR
  | GROUP_OPTIONS.WRITER
  | GROUP_OPTIONS.ARTIST
  | GROUP_OPTIONS.OWNER;

export type GroupedTuple = [string, IBook[]];

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

export const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
  margin: 0;
`;

export const groupAndSortBy = (
  book: IBook[],
  groupOption: GROUP_OPTIONS
): GroupedTuple[] => {
  let groupedData = groupBy(book, groupOption);
  let sortedData = sortBy(groupedData, groupOption);
  return sortedData;
};

type AllProps = IProps & IDispatchToProps;

const StyledMain: FC<AllProps> = ({ bookData, fetchBooks }: AllProps) => {
  const [currentGroupOption, setCurrentGroupOption] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Main className="main">
      <Route
        exact
        path="/"
        children={
          <>
            {/* <Search handleSearch={props.handleSearch} /> */}
            <Search fetchBooks={s => fetchBooks(s)} />
            <GroupOptions
              handleSetCurrentGroup={setCurrentGroupOption}
              currentGroup={currentGroupOption}
            />
            {groupAndSortBy(bookData, currentGroupOption).map(
              ([groupValue, data]: any, index: number) => (
                <Box key={index}>
                  <BookList
                    groupValue={groupValue}
                    books={data}
                    currentGroup={currentGroupOption}
                  />
                  <HR />
                </Box>
              )
            )}
          </>
        }
      />

      {/* {bookData.length && (
        <Switch>
          <Route
            path="/:id"
            children={
              <BookPageRoute
                bookDataList={bookData}
                selectedBookData={bookData[0]}
              />
            }
          />
        </Switch>
      )} */}
    </Main>
  );
};

// const BookPageRoute = (props: {
//   bookDataList: BookData[];
//   selectedBookData: BookData;
// }) => {
//   let { id } = useParams();
//   if (id === undefined) {
//     return null;
//   } else {
//     return (
//       <BookPage
//         bookDataList={props.bookDataList}
//         //@ts-ignore
//         selectedBookData={props.bookDataList.filter(book => book.id === +id)[0]}
//       />
//     );
//   }
// };

export default StyledMain;
