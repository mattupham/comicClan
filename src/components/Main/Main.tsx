import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import GroupsContainer from "containers/GroupsContainer";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import BookPage from "components/BookPage/BookPage";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import styled from "styled-components";
import PageNotFound from "components/PageNotFound/PageNotFound";
import BooksNotFound from "components/BooksNotFound/BooksNotFound";
import { Box } from "rebass";

const Main = styled.main`
  background: #333333;
  flex: 1 1 auto;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  bookData: IBook[];
}

export type AllProps = IProps & IDispatchToProps;

const StyledMain: FC<AllProps> = ({ bookData, fetchBooks }: AllProps) => {
  const [lastSearchedVal, setLastSearchedVal] = useState<string | undefined>(
    ""
  );

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Main className="main" data-testid="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/books/year" />
        </Route>
        <Route
          exact
          path="/books/:group"
          children={({ match }) => {
            const isGroupValid =
              match !== null ||
              //@ts-ignore
              Object.values(GROUP).includes(match.params.group);

            return isGroupValid ? (
              <>
                <Search fetchBooks={(s) => fetchBooks(s)} />
                <GroupsContainer />
                {bookData.length === 0 ? (
                  <BooksNotFound
                    searchValue={lastSearchedVal ? lastSearchedVal : ""}
                  />
                ) : (
                  <GroupedBooks
                    // TODO add null case
                    //@ts-ignore
                    selectedGroup={match.params.group as GROUP}
                    bookData={bookData}
                  />
                )}
              </>
            ) : (
              <Redirect to="/404" />
            );
          }}
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
    </Main>
  );
};

export default StyledMain;
