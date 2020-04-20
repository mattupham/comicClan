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
const Groups: FC<IProps> = ({ group }: IProps) => {
  console.log("GROUP: ", group);
  return (
    <Box className="groupOptions" data-testid="groupOptions">
      <GroupButton primary={group === GROUP.YEAR} group={GROUP.YEAR} />
      <GroupButton primary={group === GROUP.WRITER} group={GROUP.WRITER} />
      <GroupButton primary={group === GROUP.ARTIST} group={GROUP.ARTIST} />
      <GroupButton primary={group === GROUP.OWNER} group={GROUP.OWNER} />
      <GroupButton primary={group === GROUP.RANDOM} group={GROUP.RANDOM} />
    </Box>
  );
};

export default Groups;
