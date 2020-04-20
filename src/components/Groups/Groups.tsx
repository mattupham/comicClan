import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";
import { Box } from "rebass";

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
  <Box className="groupOptions" data-testid="groupOptions">
    {Object.values(GROUP).map((group) => (
      <GroupButton key={group} primary={props.group === group} group={group} />
    ))}
  </Box>
);

export default Groups;
