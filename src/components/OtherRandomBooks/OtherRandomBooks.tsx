import React, { FC } from "react";
import { Box } from "rebass";
import { BookData } from "components/App/App";
import { groupAndSortBy } from "components/Main/Main";
import ComicBookList from "components/ComicBookList/ComicBookList";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";

interface IProps {
  bookDataList: BookData[];
}

const OtherRandomBooks: FC<IProps> = (props: IProps) => {
  return (
    <>
      {groupAndSortBy(props.bookDataList, GROUP_OPTIONS.RANDOM).map(
        ([groupValue, data]: any, index: number) => (
          <Box key={index}>
            <ComicBookList
              groupValue={groupValue}
              bookData={data}
              currentGroup={GROUP_OPTIONS.RANDOM}
            />
          </Box>
        )
      )}
    </>
  );
};

export default OtherRandomBooks;
