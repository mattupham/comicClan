import { IBook } from "state/ducks/book/types";
import Book from "components/Book/Book";
import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const GroupTitle = styled.div`
  font-family: Roboto;
  font-weight: normal;
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
    <Box className="bookList" mt="2.8rem" mb="6.9rem">
      {props.currentGroup !== GROUP.RANDOM && (
        <GroupTitle data-testid="groupTitle">{props.groupValue}</GroupTitle>
      )}
      <Flex flexWrap="wrap">
        {props.books.map((book, index) => (
          <Book
            key={index}
            bookName={book.name}
            username={book.owner}
            imageUrl={book.image}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default BookList;
