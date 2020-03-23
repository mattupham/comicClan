import Search from "components/Search";
import React from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #333333;
  height: 100%;
`;

const StyledMain: React.FC = () => {
  return (
    <Main className="main">
      <Search />
    </Main>
  );
};

export default StyledMain;
