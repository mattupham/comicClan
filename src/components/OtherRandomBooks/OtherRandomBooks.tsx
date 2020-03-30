import React, { FC } from "react";
import { Box } from "rebass";
import { IBook } from "state/ducks/book/types";
import { groupAndSortBy } from "components/Main/Main";
import BookList from "components/BookList/BookList";
import { GROUP_OPTIONS } from "components/Groups/Groups";

interface IProps {
  books: IBook[];
}

const OtherRandomBooks: FC<IProps> = (props: IProps) => {
  return (
    <>
      {groupAndSortBy(props.books, GROUP_OPTIONS.RANDOM).map(
        ([groupValue, data]: any, index: number) => (
          <Box key={index}>
            <BookList
              groupValue={groupValue}
              books={data}
              currentGroup={GROUP_OPTIONS.RANDOM}
            />
          </Box>
        )
      )}
    </>
  );
};

export default OtherRandomBooks;
