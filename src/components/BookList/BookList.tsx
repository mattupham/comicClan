import { IBook } from "state/ducks/book/types";
import Book from "components/Book/Book";
import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { Roboto, COLORS } from "components/Styled/Styled";

const GroupTitle = styled(Roboto)`
  font-size: 3.2rem;
  color: ${COLORS.LightGrayMed};
`;

export interface IProps {
  books: IBook[];
  groupValue: string;
  currentGroup: GROUP;
}

// renders a list of books, and displays the groupedBy key (i.e. for year, 2020)
const BookList: FC<IProps> = (props: IProps) => {
  const isRandom = props.currentGroup === GROUP.RANDOM;
  return (
    <Box className="bookList">
      {!isRandom && (
        <GroupTitle
          data-testid="groupTitle"
          mb="3.2rem"
          textAlign={["center", "center", "left"]}
          sx={{ wordWrap: "break-word" }}
        >
          {props.groupValue}
        </GroupTitle>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 20rem)",
          gridGap: "6rem 9.6rem",
          justifyContent: isRandom
            ? ["center", "center", "normal"]
            : ["center", "normal", "normal"],
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
