import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { HR } from "components/Styled/Styled";
import BookDetails from "components/BookDetails/BookDetails";
import GroupedBooks from "components/GroupedBooks/GroupedBooks";
import BackLink from "components/BackLink/BackLink";
import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import { Roboto, COLORS } from "components/Styled/Styled";

const BookImage = styled.img`
  height: 100%;
  width: 100%;
`;

const RandomBookTitle = styled(Roboto)`
  font-size: 32px;
  line-height: 37px;
  color: ${COLORS.LightGrayMed};
`;

export interface IProps {
  books: IBook[];
  selectedBook: IBook;
}

const BookPage: FC<IProps> = (props: IProps) => {
  return (
    <Flex flexDirection="column" className="bookPage" data-testid="bookPage">
      <BackLink />
      <Flex
        mt={["2rem", "2rem", "3.8rem"]}
        mb={["4rem", "3rem", "7.258rem"]}
        flexDirection={["column", "row", "row"]}
      >
        <Box
          minHeight={["30rem", "51.992rem", "51.992rem"]}
          minWidth={["20  rem", "34rem", "34rem"]}
          marginRight={["0rem", "2.4rem", "2.4rem"]}
          flex="1 1 auto"
        >
          <BookImage
            src={props.selectedBook.image}
            data-testid="bookPageBookImage"
          />
        </Box>
        <BookDetails book={props.selectedBook} />
      </Flex>
      <HR />
      <Flex flexDirection="column" mt={["2rem", "2rem", "3.25rem"]} mb="0.4rem">
        <RandomBookTitle>Other Random Books</RandomBookTitle>
      </Flex>
      <GroupedBooks selectedGroup={GROUP.RANDOM} bookData={props.books} />
    </Flex>
  );
};

export default BookPage;
