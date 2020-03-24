import BookList from "components/ComicBookList/ComicBookList";
import Filter from "components/Filter/Filter";
import Search from "components/Search/Search";
import React, { FC } from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
`;

const StyledMain: FC = () => {
  return (
    <Main className="main">
      <Search />
      <Filter />
      <BookList />
      <HR />
      <BookList />
      <HR />
    </Main>
  );
};

export default StyledMain;
