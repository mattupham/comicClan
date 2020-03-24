import { ReactComponent as ComicBookBlueSVG } from "assets/comicBookBlue.svg";
import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

const ComicBookName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 2.6rem;
  color: #cccccc;
`;

const OwnedBy = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #999999;
  margin-right: 0.6rem;
`;

const Owner = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #cccccc;
`;

interface IProps {
  username: string;
  bookName: string;
}

const ComicBook: FC<IProps> = (props: IProps) => {
  return (
    <Box className="comicBook" mt="3.2rem">
      <Box>
        <ComicBookBlueSVG />
      </Box>
      <Box mt="1.605rem">
        <ComicBookName>{props.bookName}</ComicBookName>
      </Box>
      <Flex mt=".9rem">
        <OwnedBy>Owned By</OwnedBy>
        <Owner>{props.username}</Owner>
      </Flex>
    </Box>
  );
};

export default ComicBook;
