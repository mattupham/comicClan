import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import randomizeArray from "utils/randomizeArray";

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
  handleSearch: (val: string) => void;
}

const groupBy = (arr: BookData[], groupOption: GROUP_OPTIONS) => {
  if (groupOption === GROUP_OPTIONS.RANDOM) {
    const randomizedBookData = randomizeArray(arr);
    return [[GROUP_OPTIONS.RANDOM, randomizedBookData]];
  } else {
    let key = groupOption.toLowerCase() as keyof BookData;
    const groups = arr.reduce((acc, curVal) => {
      acc[curVal[key]] = acc[curVal[key]] || [];
      acc[curVal[key]].push(curVal);
      return acc;
    }, Object.create(null));
    return Object.entries(groups);
  }
};

const sortBy = (groupedData: any, groupOption: GROUP_OPTIONS) => {
  if (groupOption === GROUP_OPTIONS.YEAR) {
    return groupedData.sort((a: any, b: any) => +b[0] - +a[0]);
  } else if (
    groupOption === GROUP_OPTIONS.WRITER ||
    groupOption === GROUP_OPTIONS.ARTIST ||
    groupOption === GROUP_OPTIONS.OWNER
  ) {
    return groupedData.sort((a: any, b: any) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
  } else if (groupOption === GROUP_OPTIONS.RANDOM) {
    const randomlyGroupedData = ["random", randomizeArray(groupedData[1])];
    return randomlyGroupedData;
  } else {
    return groupedData;
  }
};

const StyledMain: FC<IProps> = (props: IProps) => {
  const [currentGroupOption, setCurrentGroupOption] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  const [sortedGroupData, setSortedGroupData] = useState<any>([]);

  useEffect(() => {
    let sortedGroupedData = groupBy(props.bookData, currentGroupOption);
    if (currentGroupOption !== GROUP_OPTIONS.RANDOM) {
      sortedGroupedData = sortBy(sortedGroupedData, currentGroupOption);
    }
    setSortedGroupData(sortedGroupedData);
  }, [currentGroupOption, props.bookData]);

  return (
    <Main className="main">
      <Search handleSearch={props.handleSearch} />
      <GroupOptions
        handleSetCurrentGroup={setCurrentGroupOption}
        currentGroup={currentGroupOption}
      />
      {sortedGroupData.map(([groupValue, data]: any, index: number) => (
        <Box key={index}>
          <ComicBookList
            groupValue={groupValue}
            bookData={data}
            currentGroup={currentGroupOption}
          />
          <HR />
        </Box>
      ))}
    </Main>
  );
};

export default StyledMain;
