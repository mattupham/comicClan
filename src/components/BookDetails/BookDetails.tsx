import React, { FC } from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { IBook } from "state/ducks/book/types";
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
  book: IBook;
}

const BookDetails: FC<IProps> = (props: IProps) => (
  <Flex flexDirection="column" width="100%">
    <Flex flexDirection="row" width="100%">
      <BookName>
        {props.book.name} {`(${props.book.year})`}
      </BookName>
      {/* <Rating rating={props.book.rating} /> */}
    </Flex>
    <MetaData>
      Writer:<Val>{props.book.writer}</Val>
    </MetaData>
    <MetaData>
      Artist:<Val>{props.book.artist}</Val>
    </MetaData>
    <MetaData>
      Publication:<Val>{props.book.publication}</Val>
    </MetaData>
    <MetaData>
      Owner:<Val>{props.book.owner}</Val>
    </MetaData>
    <Summary>{props.book.summary}</Summary>
  </Flex>
);

export default BookDetails;
