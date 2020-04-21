import React, { FC } from "react";
import { Flex } from "rebass";
import Star, { StarType } from "components/Star/Star";
import { createArrayFromRange } from "utils/utils";

export interface IProps {
  rating: number;
}

const Rating: FC<IProps> = (props: IProps) => (
  <Flex
    pt="1.125rem"
    minWidth="17.342rem"
    data-testid="rating"
    margin={["auto", "0rem", "0rem"]}
  >
    {createArrayFromRange(props.rating).map((num, index) => (
      <Star type={StarType.FULL} index={index} key={index} />
    ))}
    {createArrayFromRange(5 - props.rating).map((num, index) => (
      <Star type={StarType.EMPTY} index={index} key={index} />
    ))}
  </Flex>
);

export default Rating;
