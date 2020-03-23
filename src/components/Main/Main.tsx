import BookList from "components/BookList";
import Filter from "components/Filter";
import Search from "components/Search";
import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

const StyledMain: FC = () => {
  return (
    <Main className="main">
      <Search />
      <Filter />
      <BookList />
    </Main>
  );
};

export default StyledMain;
