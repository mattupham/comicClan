import React, { FC } from "react";
import { ReactComponent as StarFull } from "assets/starFull.svg";
import { ReactComponent as StarEmpty } from "assets/starEmpty.svg";
import { Box } from "rebass";

export enum StarType {
  FULL = "FULL",
  EMPTY = "EMPTY",
}

interface IProps {
  type: StarType;
  index: number;
}

const Star: FC<IProps> = (props: IProps) => (
  <Box mr="1rem" key={props.index}>
    {props.type === StarType.FULL && <StarFull />}
    {props.type === StarType.EMPTY && <StarEmpty />}
  </Box>
);

export default Star;
