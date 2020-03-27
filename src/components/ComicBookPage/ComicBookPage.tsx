import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "assets/backArrow.svg";
import { BookData } from "components/App/App";
import { HR, groupAndSortBy } from "components/Main/Main";
import ComicBookList from "components/ComicBookList/ComicBookList";
import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";
import Rating from "components/Rating/Rating";

const BackLink = styled.a`
  height: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.3rem;
  text-decoration-line: underline;
  color: #777777;
  margin-top: 0.4rem;
  margin-left: 0.659rem;
  position: relative;
  bottom: 0;
  &:hover {
    cursor: pointer;
  }
`;

interface IProps {
  bookDataList: BookData[];
  selectedBookData: BookData;
}

const ComicBookImage = styled.img`
  height: 100%;
  width: 100%;
`;

const BookName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 3.2rem;
  color: #aaaaaa;
  margin-top: 0;
  margin-bottom: 0.3rem;
  margin-right: 3.9rem;
`;

const MetaData = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
  margin-top: 1.1rem;
`;

const Val = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #cccccc;
  margin-left: 1rem;
`;

const Summary = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #cccccc;
  margin-top: 4.4rem;
  margin-bottom: 0rem;
  word-wrap: break-word;
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
      <Flex flexDirection="row" alignItems="flex-end">
        <Box mb=".05rem">
          <BackArrow />
        </Box>
        <BackLink>Back to collection</BackLink>
      </Flex>
      <Flex mt="3.8rem" mb="7.258rem" flexDirection="row">
        <Box minHeight="51.992rem" minWidth="34rem" marginRight="2.4rem">
          <ComicBookImage src={props.selectedBookData.image} />
        </Box>
        <Flex flexDirection="column" width="100%">
          <Flex flexDirection="row" width="100%">
            <BookName>
              {props.selectedBookData.name} {`(${props.selectedBookData.year})`}
            </BookName>
            <Rating rating={props.selectedBookData.rating} />
          </Flex>
          <MetaData>
            Writer:<Val>{props.selectedBookData.writer}</Val>
          </MetaData>
          <MetaData>
            Artist:<Val>{props.selectedBookData.artist}</Val>
          </MetaData>
          <MetaData>
            Publication:<Val>{props.selectedBookData.publication}</Val>
          </MetaData>
          <MetaData>
            Owner:<Val>{props.selectedBookData.owner}</Val>
          </MetaData>
          <Summary>{props.selectedBookData.summary}</Summary>
        </Flex>
      </Flex>
      <HR />
      <Flex flexDirection="column" mt="3.25rem">
        <RandomBookTitle>Other Random Books</RandomBookTitle>
      </Flex>
      {groupAndSortBy(props.bookDataList, GROUP_OPTIONS.RANDOM).map(
        ([groupValue, data]: any, index: number) => (
          <Box key={index}>
            <ComicBookList
              groupValue={groupValue}
              bookData={data}
              currentGroup={GROUP_OPTIONS.RANDOM}
            />
          </Box>
        )
      )}
    </Flex>
  );
};

export default ComicBookPage;
