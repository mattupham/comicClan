import { groupAndSortBy } from "utils/utils";
import { IBook } from "state/ducks/book/types";
import BookList from "components/BookList/BookList";
import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import { Box } from "rebass";
import { GroupedTuple } from "state/ducks/group/types";
import { HR } from "components/Shared/Shared";

export interface IProps {
  bookData: IBook[];
  selectedGroup: GROUP;
}

const GroupedBooks: FC<IProps> = (props: IProps) => {
  return (
    <>
      {groupAndSortBy(props.bookData, props.selectedGroup).map(
        ([groupValue, data]: GroupedTuple, index: number) => (
          <Box key={index} data-testid="singleGroupedBookList">
            <BookList
              groupValue={groupValue}
              books={data}
              currentGroup={props.selectedGroup}
            />
            <HR />
          </Box>
        )
      )}
    </>
  );
};

export default GroupedBooks;
