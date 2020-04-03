import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { HR } from "components/Shared/Shared";
import BookDetails from "components/BookDetails/BookDetails";
import OtherRandomBooks from "components/OtherRandomBooks/OtherRandomBooks";
import BackLink from "components/BackLink/BackLink";
import { IBook } from "state/ducks/book/types";

const BookImage = styled.img`
  height: 100%;
  width: 100%;
`;

const RandomBookTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #aaaaaa;
`;

interface IProps {
  books: IBook[];
  selectedBook: IBook;
  title: string;
}

const BookPage: FC<IProps> = (props: IProps) => {
  return (
    <Flex flexDirection="column" className="bookPage">
      <BackLink />
      <Flex mt="3.8rem" mb="7.258rem" flexDirection="row">
        <Box minHeight="51.992rem" minWidth="34rem" marginRight="2.4rem">
          <BookImage src={props.selectedBook.image} />
        </Box>
        <BookDetails book={props.selectedBook} />
      </Flex>
      <HR />
      <Flex flexDirection="column" mt="3.25rem">
        <RandomBookTitle>Other Random Books</RandomBookTitle>
      </Flex>
      <OtherRandomBooks books={props.books} />
    </Flex>
  );
};

export default BookPage;
