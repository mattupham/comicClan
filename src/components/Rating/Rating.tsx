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

const Star = (type: StarType) => (
  <Box mr="1rem">
    {type === StarType.FULL && <StarFull />}
    {type === StarType.EMPTY && <StarEmpty />}
  </Box>
);

interface IProps {
  rating: number;
}

const Rating: FC<IProps> = (props: IProps) => (
  <Flex pt="1.125rem" minWidth="17.342rem">
    {createArrayFromRange(props.rating).map(num => Star(StarType.FULL))}
    {createArrayFromRange(5 - props.rating).map(num => Star(StarType.EMPTY))}
  </Flex>
);

export default Rating;
