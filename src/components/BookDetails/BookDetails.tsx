import React, { FC } from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { IBook } from "state/ducks/book/types";
import Rating from "components/Rating/Rating";
import { RobotoBold, RobotoMed, COLORS } from "components/Styled/Styled";

const BookName = styled(RobotoMed)`
  font-size: 3.2rem;
  color: ${COLORS.LightGrayMed};
  margin-bottom: 0.3rem;
`;

const MetaData = styled(RobotoMed)`
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.LightGrayDark};
`;

const Val = styled(RobotoBold)`
  display: inline;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${COLORS.LightGrayLight};
  margin-left: 1rem;
`;

const Summary = styled(RobotoBold)`
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.LightGrayLight};
  margin-bottom: 0rem;
  word-wrap: break-word;
`;

export interface IProps {
  book: IBook;
}

const BookDetails: FC<IProps> = (props: IProps) => (
  <Flex flexDirection="column" width="100%" data-testid="bookDetails">
    <Flex flexDirection={["column", "column", "row"]} width="100%">
      <BookName
        data-testid="bookDetailsName"
        mt={["1rem", "0rem", "0rem"]}
        mr={["0rem", "3.9rem", "3.9rem"]}
        textAlign={["center", "left", "left"]}
      >
        {props.book.name} {`(${props.book.year})`}
      </BookName>
      <Rating rating={props.book.rating} />
    </Flex>
    <Flex flexDirection="column" width="100%" mt={["2rem", "2rem", "1.1rem"]}>
      <MetaData data-testid="bookDetailsWriter">
        Writer:<Val>{props.book.writer}</Val>
      </MetaData>
      <MetaData data-testid="bookDetailsArtist" mt="1.1rem">
        Artist:<Val>{props.book.artist}</Val>
      </MetaData>
      <MetaData data-testid="bookDetailsPublication" mt="1.1rem">
        Publication:<Val>{props.book.publication}</Val>
      </MetaData>
      <MetaData data-testid="bookDetailsOwner" mt="1.1rem">
        Owner:<Val>{props.book.owner}</Val>
      </MetaData>
    </Flex>
    <Summary data-testid="bookDetailsSummary" mt={["2rem", "2rem", "4.4rem"]}>
      {props.book.summary}
    </Summary>
  </Flex>
);

export default BookDetails;
