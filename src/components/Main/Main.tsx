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
