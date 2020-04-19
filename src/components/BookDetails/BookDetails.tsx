import React, { FC } from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { IBook } from "state/ducks/book/types";
import Rating from "components/Rating/Rating";
import { RobotoBold, RobotoMed } from "components/Styled/Styled";

const BookName = styled(RobotoMed)`
  font-size: 3.2rem;
  color: #aaaaaa;
  margin-top: 0;
  margin-bottom: 0.3rem;
  margin-right: 3.9rem;
`;

const MetaData = styled(RobotoMed)`
  font-size: 16px;
  line-height: 19px;
  color: #999999;
  margin-top: 1.1rem;
`;

const Val = styled(RobotoBold)`
  display: inline;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #cccccc;
  margin-left: 1rem;
`;

const Summary = styled(RobotoBold)`
  font-size: 16px;
  line-height: 19px;
  color: #cccccc;
  margin-top: 4.4rem;
  margin-bottom: 0rem;
  word-wrap: break-word;
`;

export interface IProps {
  book: IBook;
}

const BookDetails: FC<IProps> = (props: IProps) => (
  <Flex flexDirection="column" width="100%" data-testid="bookDetails">
    <Flex flexDirection="row" width="100%">
      <BookName data-testid="bookDetailsName">
        {props.book.name} {`(${props.book.year})`}
      </BookName>
      <Rating rating={props.book.rating} />
    </Flex>
    <MetaData data-testid="bookDetailsWriter">
      Writer:<Val>{props.book.writer}</Val>
    </MetaData>
    <MetaData data-testid="bookDetailsArtist">
      Artist:<Val>{props.book.artist}</Val>
    </MetaData>
    <MetaData data-testid="bookDetailsPublication">
      Publication:<Val>{props.book.publication}</Val>
    </MetaData>
    <MetaData data-testid="bookDetailsOwner">
      Owner:<Val>{props.book.owner}</Val>
    </MetaData>
    <Summary data-testid="bookDetailsSummary">{props.book.summary}</Summary>
  </Flex>
);

export default BookDetails;
