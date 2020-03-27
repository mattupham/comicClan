import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { BookData } from "components/App/App";
import { HR } from "components/Main/Main";
import ComicBookDetails from "components/ComicBookDetails/ComicBookDetails";
import OtherRandomBooks from "components/OtherRandomBooks/OtherRandomBooks";
import BackLink from "components/BackLink/BackLink";

interface IProps {
  bookDataList: BookData[];
  selectedBookData: BookData;
}

const ComicBookImage = styled.img`
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

const ComicBookPage: FC<IProps> = (props: IProps) => {
  return (
    <Flex flexDirection="column" className="comicBookPage">
      <BackLink />
      <Flex mt="3.8rem" mb="7.258rem" flexDirection="row">
        <Box minHeight="51.992rem" minWidth="34rem" marginRight="2.4rem">
          <ComicBookImage src={props.selectedBookData.image} />
        </Box>
        <ComicBookDetails bookData={props.selectedBookData} />
      </Flex>
      <HR />
      <Flex flexDirection="column" mt="3.25rem">
        <RandomBookTitle>Other Random Books</RandomBookTitle>
      </Flex>
      <OtherRandomBooks bookDataList={props.bookDataList} />
    </Flex>
  );
};

export default ComicBookPage;
