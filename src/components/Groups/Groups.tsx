import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";
import { Flex } from "rebass";

export enum GROUP {
  YEAR = "year",
  WRITER = "writer",
  ARTIST = "artist",
  OWNER = "owner",
  RANDOM = "random",
}

interface GroupButton {
  name: GROUP;
  selected: boolean;
}

export interface IProps {
  group: GROUP;
}

// renders a list of group buttons
const Groups: FC<IProps> = (props: IProps) => (
  <Flex
    className="groupOptions"
    data-testid="groupOptions"
    justifyContent={["space-evenly", "flex-start", "flex-start"]}
  >
    {Object.values(GROUP).map((group) => (
      <GroupButton key={group} primary={props.group === group} group={group} />
    ))}
  </Flex>
);

export default Groups;
