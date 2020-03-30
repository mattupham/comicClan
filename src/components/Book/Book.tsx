import React, { FC } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookName = styled.div`
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
  imageUrl: string;
  id: number;
}

const BookImage = styled.img`
  width: "20rem";
  height: "30.595rem";
`;

const Book: FC<IProps> = (props: IProps) => {
  return (
    <Link
      to={`/${encodeURIComponent(props.bookName)}`}
      style={{ textDecoration: "none" }}
    >
      <Box className="Book" mt="3.2rem" mr="9.6rem" width="20rem">
        <Box>
          <BookImage alt={`${props.bookName}-image`} src={props.imageUrl} />
        </Box>
        <Box mt="1.605rem">
          <BookName>{props.bookName}</BookName>
        </Box>
        <Flex mt=".9rem">
          <OwnedBy>Owned By</OwnedBy>
          <Owner>{props.username}</Owner>
        </Flex>
      </Box>
    </Link>
  );
};

export default Book;
