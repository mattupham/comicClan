import React, { FC } from "react";
import { Box, Flex } from "rebass";
import { ReactComponent as StarFull } from "assets/starFull.svg";
import { ReactComponent as StarEmpty } from "assets/starEmpty.svg";

enum StarType {
  FULL = "FULL",
  EMPTY = "EMPTY",
}

const createArrayFromRange = (num: number) =>
  Array.apply(null, Array(num)).map(function(_, i) {
    return i;
  });

const Star = (type: StarType, index: number) => (
  <Box mr="1rem" key={index}>
    {type === StarType.FULL && <StarFull />}
    {type === StarType.EMPTY && <StarEmpty />}
  </Box>
);

interface IProps {
  rating: number;
}

const Rating: FC<IProps> = (props: IProps) => (
  <Flex pt="1.125rem" minWidth="17.342rem">
    {createArrayFromRange(props.rating).map((num, index) =>
      Star(StarType.FULL, index)
    )}
    {createArrayFromRange(5 - props.rating).map((num, index) =>
      Star(StarType.EMPTY, index)
    )}
  </Flex>
);

export default Rating;
