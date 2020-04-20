import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { RobotoBold, COLORS } from "components/Styled/Styled";

interface IProps {
  rating: number;
}

const Container = styled(Flex)`
  color: ${COLORS.LightGrayLight};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;

const PageNotFound: FC = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    // function that counts down from a specified number of seconds
    const countDown = setTimeout(() => setSeconds(seconds - 1), 1000);

    return () => clearTimeout(countDown);
  }, [seconds]);

  if (seconds <= 0) {
    return <Redirect to="/books/year" />;
  } else {
    return (
      <Container>
        <Box fontSize="10rem">
          <RobotoBold>Page Not Found</RobotoBold>
        </Box>
        <Box mt="8rem" fontSize="4rem">
          <RobotoBold>Redirecting You Back to the home page in:</RobotoBold>
        </Box>
        <Box mt="3rem" fontSize="8rem">
          <RobotoBold>{seconds}</RobotoBold>
        </Box>
      </Container>
    );
  }
};

export default PageNotFound;
