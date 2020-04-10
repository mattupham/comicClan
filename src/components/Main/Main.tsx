import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import GroupsContainer from "containers/GroupsContainer";
import Search from "components/Search/Search";
import React, { FC, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { IDispatchToProps } from "state/ducks/book/types";
import BookPage from "components/BookPage/BookPage";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import styled from "styled-components";
import NotFound from "components/NotFound/NotFound";

const Main = styled.main`
  background: #333333;
  min-height: 100vh;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

interface IProps {
  bookData: IBook[];
}

export type AllProps = IProps & IDispatchToProps;

const StyledMain: FC<AllProps> = ({ bookData, fetchBooks }: AllProps) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Main className="main" data-testid="main">
      <Switch>
        <Route exact path="/">
          <Redirect to="/books/year" />
        </Route>
        <Route
          exact
          path="/books/:group"
          children={({ match }) => (
            <>
              <Search fetchBooks={(s) => fetchBooks(s)} />
              <GroupsContainer />
              <GroupedBooks
                // TODO add null case
                //@ts-ignore
                selectedGroup={match.params.group as GROUP}
                bookData={bookData}
              />
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
              // TODO add redirect here
              return null;
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
        <Route component={() => <NotFound />} />
      </Switch>
    </Main>
  );
};

export default StyledMain;
