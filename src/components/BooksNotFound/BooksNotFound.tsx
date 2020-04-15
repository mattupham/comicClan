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
import PageNotFound from "components/PageNotFound/PageNotFound";
import { Box } from "rebass";

const Container = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BooksNotFound = (props: { searchValue: string }) => (
  <Container>
    <Box fontSize="10rem">No results found for "{props.searchValue}"</Box>
    <Box mt="8rem" fontSize="4rem">
      Please make sure your words are spelled correctly or use less or different
      keywords
    </Box>
  </Container>
);

export default BooksNotFound;
