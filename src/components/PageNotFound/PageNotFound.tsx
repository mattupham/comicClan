import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

interface IProps {
  rating: number;
}

const Container = styled(Flex)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #cccccc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;

// function that counts down from a specified number of seconds
const countDown = (seconds: number, cb: (s: number) => void) =>
  setTimeout(() => cb(seconds - 1), 1000);

const PageNotFound: FC = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    countDown(seconds, setSeconds);
  }, [seconds]);

  if (seconds <= 0) {
    return <Redirect to="/books/year" />;
  } else {
    return (
      <Container>
        <Box fontSize="10rem">Page Not Found</Box>
        <Box mt="8rem" fontSize="4rem">
          Redirecting You Back to the home page in:
        </Box>
        <Box mt="3rem" fontSize="8rem">
          {seconds}
        </Box>
      </Container>
    );
  }
};

export default PageNotFound;
