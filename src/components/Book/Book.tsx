import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RobotoBold, RobotoMed } from "components/Styled/Styled";
import { COLORS } from "components/Styled/Styled";

const BookName = styled(RobotoBold)`
  font-size: 2.2rem;
  line-height: 2.6rem;
  color: ${COLORS.LightGrayLight};
`;

const OwnedBy = styled(RobotoMed)`
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${COLORS.LightGrayDark};
`;

const Owner = styled(RobotoBold)`
  display: inline;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${COLORS.LightGrayLight};
  margin-left: 0.6rem;
`;

export interface IProps {
  username: string;
  bookName: string;
  imageUrl: string;
}

const BookImage = styled.img`
  width: "20rem";
  height: "30.595rem";
`;

const Book: FC<IProps> = (props: IProps) => {
  return (
    <Link
      data-testid="bookLink"
      to={`/book/${encodeURIComponent(props.bookName)}`}
      style={{ textDecoration: "none" }}
    >
      <Box className="Book" width="20rem">
        <Box>
          <BookImage
            data-testid="smallBookImage"
            alt={`${props.bookName}-image`}
            src={props.imageUrl}
          />
        </Box>
        <Box mt="1.605rem">
          <BookName>{props.bookName}</BookName>
        </Box>
        <Flex mt=".9rem">
          <OwnedBy>
            Owned By<Owner>{props.username}</Owner>
          </OwnedBy>
        </Flex>
      </Box>
    </Link>
  );
};

export default Book;
