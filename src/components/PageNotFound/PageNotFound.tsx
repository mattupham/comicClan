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

const TextCenter = styled(RobotoBold)`
  text-align: center;
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
        <Box fontSize={["6rem", "8rem", "10rem"]}>
          <TextCenter>Page Not Found</TextCenter>
        </Box>
        <Box mt="8rem" fontSize={["2.4rem", "3.2rem", "4rem"]}>
          <TextCenter>Redirecting You Back to the home page in:</TextCenter>
        </Box>
        <Box mt="3rem" fontSize={["4.8rem", "6.4rem", "8rem"]}>
          <TextCenter>{seconds}</TextCenter>
        </Box>
      </Container>
    );
  }
};

export default PageNotFound;
