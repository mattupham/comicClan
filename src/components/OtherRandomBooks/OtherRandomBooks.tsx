import React, { FC } from "react";
import { Box } from "rebass";
import { IBook } from "state/ducks/book/types";
import { groupAndSortBy } from "components/Main/Main";
import BookList from "components/BookList/BookList";
import { GROUP } from "components/Groups/Groups";

interface IProps {
  books: IBook[];
}

const OtherRandomBooks: FC<IProps> = (props: IProps) => {
  return (
    <>
      {groupAndSortBy(props.books, GROUP.RANDOM).map(
        ([groupValue, data]: any, index: number) => (
          <Box key={index}>
            <BookList
              groupValue={groupValue}
              books={data}
              currentGroup={GROUP.RANDOM}
            />
          </Box>
        )
      )}
    </>
  );
};

export default OtherRandomBooks;
