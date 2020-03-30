import React, { FC } from "react";
import { Flex } from "rebass";
import Star, { StarType } from "components/Star/Star";
import { createArrayFromRange } from "utils/utils";

interface IProps {
  rating: number;
}

const Rating: FC<IProps> = (props: IProps) => (
  <Flex pt="1.125rem" minWidth="17.342rem">
    {createArrayFromRange(props.rating).map((num, index) => (
      <Star type={StarType.FULL} index={index} />
    ))}
    {createArrayFromRange(5 - props.rating).map((num, index) => (
      <Star type={StarType.EMPTY} index={index} />
    ))}
  </Flex>
);

export default Rating;
