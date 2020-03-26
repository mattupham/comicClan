import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import {
  randomizeArray,
  sortByAlph,
  sortByYearAsc
} from "utils/randomizeArray";

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

const groupByCommonValues = (array: BookData[], groupOption: GROUP_OPTIONS) => {
  let key = groupOption.toLowerCase() as keyof BookData;
  const groups = array.reduce((acc, curVal) => {
    acc[curVal[key]] = acc[curVal[key]] || [];
    acc[curVal[key]].push(curVal);
    return acc;
  }, Object.create(null));
  return Object.entries(groups);
};

const groupBy = (array: BookData[], groupOption: GROUP_OPTIONS) => {
  // I: [{},{},{}]
  if (groupOption === GROUP_OPTIONS.RANDOM) {
    return [["random", randomizeArray(array)]];
  } else {
    return groupByCommonValues(array, groupOption);
  }
  // O: [
  //   [key, [{},{},{}] ]
  //   [key, [{},{},{}] ]
  // ]
};

const sortBy = (groupedData: any, groupOption: GROUP_OPTIONS) => {
  if (groupOption === GROUP_OPTIONS.YEAR) {
    return sortByYearAsc(groupedData);
  }
  if (groupOption === GROUP_OPTIONS.WRITER) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP_OPTIONS.ARTIST) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP_OPTIONS.OWNER) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP_OPTIONS.RANDOM) {
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
    if (currentGroupOption) {
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
