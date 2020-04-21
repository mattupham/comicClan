import { IBook, IStateToProps } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import Groups from "components/Groups/Groups";
import Search from "components/Search/Search";
import React, { FC, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import BookPage from "components/BookPage/BookPage";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import styled from "styled-components";
import PageNotFound from "components/PageNotFound/PageNotFound";
import BooksNotFound from "components/BooksNotFound/BooksNotFound";
import { Flex, Box } from "rebass";
import { Loader } from "components/Styled/Styled";
import { COLORS } from "components/Styled/Styled";

const Main = styled(Box)`
  background: ${COLORS.Black};
  flex: 1 1 auto;
  /* padding-right: 2.8rem; */
  /* padding-left: 2.8rem; */
  display: flex;
  flex-direction: column;
`;

interface IProps {
  bookData: IBook[];
}

export const groupList: GROUP[] = Object.values(GROUP);

// generates group regex to limit routes
export const groupRegex = (arr: GROUP[]) =>
  arr.reduce((acc, cur, index) => {
    return (acc += (index === 0 ? "" : "|") + cur);
  }, "(") + ")";

export type AllProps = IProps & IDispatchToProps & IStateToProps;

const StyledMain: FC<AllProps> = ({
  bookData,
  fetchBooks,
  loading,
}: AllProps) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Main
      className="main"
      data-testid="main"
      px={["1.5rem", "1.5rem", "2.8rem"]}
    >
      {loading ? (
        <Flex justifyContent="center" alignItems="center" flex="1 1 auto">
          <Loader />
        </Flex>
      ) : (
        <Switch>
          <Route exact path="/">
            <Redirect to="/books/year" />
          </Route>
          <Route
            exact
            path={`/books/:group${groupRegex(groupList)}`}
            children={({ match }) => {
              const group = match?.params.group;
              return (
                <>
                  <Search fetchBooks={(s) => fetchBooks(s)} />
                  <Groups group={group as GROUP} />
                  {bookData.length === 0 ? (
                    <BooksNotFound />
                  ) : (
                    <GroupedBooks
                      selectedGroup={group as GROUP}
                      bookData={bookData}
                    />
                  )}
                </>
              );
            }}
          />
          <Route
            path="/book/:title"
            children={({ match }) => {
              const title = decodeURIComponent(match?.params.title);
              if (bookData.length === 0) {
                return <Loader />;
              } else {
                const selectedBook = bookData.filter(
                  (book) => book.name === title
                )[0];
                if (title === undefined || selectedBook === undefined) {
                  return <PageNotFound />;
                }
                return (
                  <BookPage books={bookData} selectedBook={selectedBook} />
                );
              }
            }}
          />
          <Route component={() => <PageNotFound />} />
        </Switch>
      )}
    </Main>
  );
};

export default StyledMain;
