import { groupAndSortBy } from "utils/utils";
import { IBook } from "state/ducks/book/types";
import BookList from "components/BookList/BookList";
import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import { Box } from "rebass";
import { GroupedTuple } from "state/ducks/group/types";
import { HR } from "components/Styled/Styled";

export interface IProps {
  bookData: IBook[];
  selectedGroup: GROUP;
}

// returns sublists of books, grouped by group data type
// i.e. books grouped by years: 2020, 2019, 2018, etc
const GroupedBooks: FC<IProps> = (props: IProps) => {
  return (
    <Box data-testid="groupedBooks">
      {groupAndSortBy(props.bookData, props.selectedGroup).map(
        ([groupValue, data]: GroupedTuple, index: number) => (
          <>
            <Box
              key={index}
              mt={index === 0 ? "2.8rem" : "6.7rem"}
              mb="6.9rem"
              data-testid="singleGroupedBookList"
            >
              <BookList
                groupValue={groupValue}
                books={data}
                currentGroup={props.selectedGroup}
              />
            </Box>
            <HR />
          </>
        )
      )}
    </Box>
  );
};

export default GroupedBooks;
