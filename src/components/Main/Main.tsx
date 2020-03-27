import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { sortByAlph, sortByYearAsc } from "utils/utils";

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

type GroupKey =
  | GROUP_OPTIONS.YEAR
  | GROUP_OPTIONS.WRITER
  | GROUP_OPTIONS.ARTIST
  | GROUP_OPTIONS.OWNER;

type GroupedTuple = [string, BookData[]];

const groupByRandom = (array: BookData[]): GroupedTuple[] => [
  ["random", array.slice()]
];
const groupByType = (
  array: BookData[],
  groupOption: GroupKey
): GroupedTuple[] => {
  const key = groupOption.toLowerCase() as GroupKey;
  const groups = array.reduce((acc, curVal: BookData) => {
    acc[curVal[key]] = acc[curVal[key]] || [];
    acc[curVal[key]].push(curVal);
    return acc;
  }, Object.create(null));
  return Object.entries(groups);
};

// I: [{},{},{}]
const groupBy = (
  array: BookData[],
  groupOption: GROUP_OPTIONS
): GroupedTuple[] => {
  if (groupOption === GROUP_OPTIONS.RANDOM) {
    return groupByRandom(array);
  } else {
    return groupByType(array, groupOption);
  }
};
// O: [
//   [key, [{},{},{}] ]
//   [key, [{},{},{}] ]
// ]

const sortBy = (
  groupedData: any,
  groupOption: GROUP_OPTIONS
): GroupedTuple[] => {
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
  return groupedData;
};

const StyledMain: FC<IProps> = (props: IProps) => {
  const [currentGroupOption, setCurrentGroupOption] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  const [sortedGroupData, setSortedGroupData] = useState<GroupedTuple[]>([]);

  useEffect(() => {
    let groupedData = groupBy(props.bookData, currentGroupOption);
    let sortedData = sortBy(groupedData, currentGroupOption);
    setSortedGroupData(sortedData);
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
