import { BookData } from "components/App/App";
import ComicBook from "components/ComicBook/ComicBook";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const Year = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 3.2rem;
  color: #aaaaaa;
`;

interface IProps {
  bookData: BookData[];
}

const ComicBookList: FC<IProps> = (props: IProps) => {
  return (
    <Box className="comicBookList" mt="2.8rem" mb="6.9rem">
      <Year>2019</Year>
      <Flex flexWrap="wrap">
        {props.bookData.map((book, index) => (
          <ComicBook key={index} bookName={book.name} username={book.owner} />
        ))}
      </Flex>
    </Box>
  );
};

export default ComicBookList;
