import React, { FC } from "react";
import { ReactComponent as StarFull } from "assets/starFull.svg";
import { ReactComponent as StarEmpty } from "assets/starEmpty.svg";
import { Box } from "rebass";

export enum StarType {
  FULL = "FULL",
  EMPTY = "EMPTY",
}

export interface IProps {
  type: StarType;
  index: number;
}

const Star: FC<IProps> = (props: IProps) => (
  <Box className="star" mr="1rem" key={props.index}>
    {props.type === StarType.FULL && <StarFull data-testid="starFull" />}
    {props.type === StarType.EMPTY && <StarEmpty data-testid="starEmpty" />}
  </Box>
);

export default Star;
