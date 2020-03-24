import ComicBook from "components/ComicBook/ComicBook";
import React, { FC } from "react";
import { Box } from "rebass";
import styled from "styled-components";

const Year = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 3.2rem;

  color: #aaaaaa;
`;

const BookList: FC = () => {
  return (
    <Box className="bookList" mt="2.8rem" mb="6.9rem">
      <Year>2019</Year>
      <Box>
        <ComicBook />
      </Box>
    </Box>
  );
};

export default BookList;
