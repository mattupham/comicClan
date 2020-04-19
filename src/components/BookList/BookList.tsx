import { IBook } from "state/ducks/book/types";
import Book from "components/Book/Book";
import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { Roboto } from "components/Styled/Styled";

const GroupTitle = styled(Roboto)`
  font-size: 3.2rem;
  color: #aaaaaa;
`;

export interface IProps {
  books: IBook[];
  groupValue: string;
  currentGroup: GROUP;
}

// renders a list of books, and displays the groupedBy key (i.e. for year, 2020)
const BookList: FC<IProps> = (props: IProps) => {
  return (
    <Box className="bookList">
      {props.currentGroup !== GROUP.RANDOM && (
        <GroupTitle data-testid="groupTitle" mb="3.2rem">
          {props.groupValue}
        </GroupTitle>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 20rem)",
          gridGap: "6rem 9.6rem",
        }}
      >
        {props.books.map((book, index) => (
          <Book
            key={index}
            bookName={book.name}
            username={book.owner}
            imageUrl={book.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BookList;
