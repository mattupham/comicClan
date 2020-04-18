import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { HR } from "components/Styled/Styled";
import BookDetails from "components/BookDetails/BookDetails";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import BackLink from "components/BackLink/BackLink";
import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";

const BookImage = styled.img`
  height: 100%;
  width: 100%;
`;

const RandomBookTitle = styled(Box)`
  font-family: Roboto;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #aaaaaa;
`;

export interface IProps {
  books: IBook[];
  selectedBook: IBook;
}

const BookPage: FC<IProps> = (props: IProps) => {
  return (
    <Flex flexDirection="column" className="bookPage" data-testid="bookPage">
      <BackLink />
      <Flex mt="3.8rem" mb="7.258rem" flexDirection="row">
        <Box minHeight="51.992rem" minWidth="34rem" marginRight="2.4rem">
          <BookImage
            src={props.selectedBook.image}
            data-testid="bookPageBookImage"
          />
        </Box>
        <BookDetails book={props.selectedBook} />
      </Flex>
      <HR />
      <Flex flexDirection="column" mt="3.25rem">
        <RandomBookTitle>Other Random Books</RandomBookTitle>
      </Flex>
      {/* // TODO fix margin top */}
      <GroupedBooks selectedGroup={GROUP.RANDOM} bookData={props.books} />
    </Flex>
  );
};

export default BookPage;
