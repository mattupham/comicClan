import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useState } from "react";
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

interface IProps {
  bookData: BookData[];
}

const StyledMain: FC<IProps> = (props: IProps) => {
  const [currentGroup, setCurrentGroup] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  console.log("CURRENT GROUP: ", currentGroup);

  return (
    <Main className="main">
      <Search />
      <GroupOptions
        handleSetCurrentGroup={setCurrentGroup}
        currentGroup={currentGroup}
      />
      <ComicBookList bookData={props.bookData} />
      <HR />
      {/* <ComicBookList /> */}
      <HR />
    </Main>
  );
};

export default StyledMain;
