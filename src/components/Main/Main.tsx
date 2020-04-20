import { IBook, IStateToProps } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import Groups from "components/Groups/Groups";
import Search from "components/Search/Search";
import React, { FC, useEffect } from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import BookPage from "components/BookPage/BookPage";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import styled from "styled-components";
import PageNotFound from "components/PageNotFound/PageNotFound";
import BooksNotFound from "components/BooksNotFound/BooksNotFound";
import { Flex } from "rebass";
import { Loader } from "components/Styled/Styled";
import { COLORS } from "components/Styled/Styled";

const Main = styled.main`
  background: ${COLORS.Black};
  flex: 1 1 auto;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
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

  const { group } = useParams();

  return (
    <Main className="main" data-testid="main">
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
            children={({ match }) => (
              <>
                <Search fetchBooks={(s) => fetchBooks(s)} />
                <Groups group={group as GROUP} />
                {bookData.length === 0 ? (
                  <BooksNotFound />
                ) : (
                  <GroupedBooks
                    //@ts-ignore
                    selectedGroup={match.params.group as GROUP}
                    bookData={bookData}
                  />
                )}
              </>
            )}
          />
          <Route
            path="/book/:title"
            children={({ match }) => {
              const title = decodeURIComponent(
                match !== null ? match.params.title : ""
              );
              if (title === undefined) {
                return <PageNotFound />;
              } else {
                const selectedBook = bookData.filter(
                  (book) => book.name === title
                )[0];
                return (
                  <BookPage
                    books={bookData}
                    selectedBook={selectedBook}
                    //@ts-ignore
                    title={title}
                  />
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
