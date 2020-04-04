import React, { FC, useEffect, useState } from "react";
import { Box } from "rebass";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

interface IProps {
  rating: number;
}

const PageNotFound = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const countDown = (seconds: number, cb: (s: number) => void) =>
  setTimeout(() => cb(seconds - 1), 1000);

const NotFound: FC = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    countDown(seconds, setSeconds);
  }, [seconds]);

  if (seconds <= 0) {
    return <Redirect to="/books/year" />;
  } else {
    return (
      <PageNotFound>
        <Box fontSize="10rem">Page Not Found</Box>
        <Box mt="8rem" fontSize="4rem">
          Redirecting You Back to the home page in:
        </Box>
        <Box mt="3rem" fontSize="8rem">
          {seconds}
        </Box>
      </PageNotFound>
    );
  }
};

export default NotFound;
