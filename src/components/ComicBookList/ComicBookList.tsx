import { BookData } from "components/App/App";
import ComicBook from "components/ComicBook/ComicBook";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const GroupTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 3.2rem;
  color: #aaaaaa;
`;

interface IProps {
  bookData: BookData[];
  // change below
  groupValue: string;
}

const ComicBookList: FC<IProps> = (props: IProps) => {
  return (
    <Box className="comicBookList" mt="2.8rem" mb="6.9rem">
      <GroupTitle>{props.groupValue}</GroupTitle>
      <Flex flexWrap="wrap">
        {props.bookData.map((book, index) => (
          <ComicBook
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

export default ComicBookList;
