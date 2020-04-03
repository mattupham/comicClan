import { IBook } from "state/ducks/book/types";
import BookList from "components/BookList/BookList";
import { GROUP } from "components/Groups/Groups";
import GroupsContainer from "containers/GroupsContainer";
import Search from "components/Search/Search";
import React, { FC, useEffect } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { groupBy, sortBy } from "utils/utils";
import { Route, Switch, Redirect } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import BookPage from "components/BookPage/BookPage";

export type GroupKey = GROUP.YEAR | GROUP.WRITER | GROUP.ARTIST | GROUP.OWNER;

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
  groupOption: GROUP = GROUP.YEAR
): GroupedTuple[] => {
  let groupedData = groupBy(book, groupOption);
  let sortedData = sortBy(groupedData, groupOption);
  return sortedData;
};

interface IProps {
  bookData: IBook[];
}

type AllProps = IProps & IDispatchToProps;

const StyledMain: FC<AllProps> = ({ bookData, fetchBooks }: AllProps) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Main className="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/books/year" />
        </Route>
        <Route
          exact
          path="/books/:group"
          children={({ match }) => (
            <>
              <Search fetchBooks={s => fetchBooks(s)} />
              <GroupsContainer />
              {groupAndSortBy(
                bookData,
                //@ts-ignore
                match.params.group as GROUP
              ).map(([groupValue, data]: any, index: number) => (
                <Box key={index}>
                  <BookList
                    groupValue={groupValue}
                    books={data}
                    // currentGroup={currentGroupOption}
                    currentGroup={
                      //@ts-ignore
                      match.params.group as GROUP
                    }
                  />
                  <HR />
                </Box>
              ))}
            </>
          )}
        />
        <Route
          path="/book/:title"
          children={({ match }) => (
            <BookPageRoute
              books={bookData}
              selectedBook={bookData[0]}
              title={match !== null ? match.params.title : ""}
            />
          )}
        />
      </Switch>
    </Main>
  );
};

const BookPageRoute = (props: {
  books: IBook[];
  selectedBook: IBook;
  title: string;
}) => {
  const title = decodeURIComponent(props.title);
  console.log("TITLE: ", title);

  if (props.title === undefined) {
    return null;
  } else {
    return (
      <BookPage
        books={props.books}
        //@ts-ignore
        selectedBook={
          props.books.filter(
            //@ts-ignore
            book => book.name === title
          )[0]
        }
      />
    );
  }
};

export default StyledMain;
