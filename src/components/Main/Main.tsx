import { BookData } from "components/App/App";
import ComicBookList from "components/ComicBookList/ComicBookList";
import GroupOptions, {
  GROUP_OPTIONS,
} from "components/GroupOptions/GroupOptions";
import Search from "components/Search/Search";
import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { groupBy, sortBy } from "utils/utils";
import ComicBookPage from "components/ComicBookPage/ComicBookPage";
import { useParams, Switch, Route } from "react-router-dom";

interface IProps {
  bookData: BookData[];
  handleSearch: (val: string) => void;
}

export type GroupKey =
  | GROUP_OPTIONS.YEAR
  | GROUP_OPTIONS.WRITER
  | GROUP_OPTIONS.ARTIST
  | GROUP_OPTIONS.OWNER;

export type GroupedTuple = [string, BookData[]];

const Main = styled.main`
  background: #333333;
  height: 100%;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  padding-top: 2.8rem;
`;

export const HR = styled.hr`
  border: 1px solid #535353;
  width: 100%;
  margin: 0;
`;

export const groupAndSortBy = (
  bookData: BookData[],
  groupOption: GROUP_OPTIONS
): GroupedTuple[] => {
  let groupedData = groupBy(bookData, groupOption);
  let sortedData = sortBy(groupedData, groupOption);
  return sortedData;
};

const StyledMain: FC<IProps> = (props: IProps) => {
  const [currentGroupOption, setCurrentGroupOption] = useState<GROUP_OPTIONS>(
    GROUP_OPTIONS.YEAR
  );

  const [sortedGroupData, setSortedGroupData] = useState<GroupedTuple[]>([]);

  useEffect(() => {
    const data = groupAndSortBy(props.bookData, currentGroupOption);
    setSortedGroupData(data);
  }, [currentGroupOption, props.bookData]);

  return (
    <Main className="main">
      <Route
        exact
        path="/"
        children={
          <>
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
          </>
        }
      />

      {props.bookData.length && (
        <Switch>
          <Route
            path="/:id"
            children={
              <ComicBookPageRoute
                bookDataList={props.bookData}
                selectedBookData={props.bookData[0]}
              />
            }
          />
        </Switch>
      )}
    </Main>
  );
};

const ComicBookPageRoute = (props: {
  bookDataList: BookData[];
  selectedBookData: BookData;
}) => {
  let { id } = useParams();
  if (id === undefined) {
    return null;
  } else {
    return (
      <ComicBookPage
        bookDataList={props.bookDataList}
        //@ts-ignore
        selectedBookData={props.bookDataList.filter(book => book.id === +id)[0]}
      />
    );
  }
};

export default StyledMain;
