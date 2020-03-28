import React, { FC } from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { BookData } from "components/App/App";
import Rating from "components/Rating/Rating";

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

interface IProps {
  bookData: BookData;
}

const ComicBookDetails: FC<IProps> = (props: IProps) => (
  <Flex flexDirection="column" width="100%">
    <Flex flexDirection="row" width="100%">
      <BookName>
        {props.bookData.name} {`(${props.bookData.year})`}
      </BookName>
      <Rating rating={props.bookData.rating} />
    </Flex>
    <MetaData>
      Writer:<Val>{props.bookData.writer}</Val>
    </MetaData>
    <MetaData>
      Artist:<Val>{props.bookData.artist}</Val>
    </MetaData>
    <MetaData>
      Publication:<Val>{props.bookData.publication}</Val>
    </MetaData>
    <MetaData>
      Owner:<Val>{props.bookData.owner}</Val>
    </MetaData>
    <Summary>{props.bookData.summary}</Summary>
  </Flex>
);

export default ComicBookDetails;
