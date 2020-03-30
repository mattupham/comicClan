import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";
import { Box } from "rebass";

interface IProps {
  currentGroup: GROUP_OPTIONS;
  handleSetCurrentGroup: (group: GROUP_OPTIONS) => void;
}

export enum GROUP_OPTIONS {
  YEAR = "year",
  WRITER = "writer",
  ARTIST = "artist",
  OWNER = "owner",
  RANDOM = "random",
}

interface GroupButton {
  name: GROUP_OPTIONS;
  selected: boolean;
}

const GroupOptions: FC<IProps> = (props: IProps) => {
  const handleClick = (groupOption: GROUP_OPTIONS) =>
    props.handleSetCurrentGroup(groupOption);

  return (
    <Box className="groupOptions">
      <GroupButton
        primary={props.currentGroup === GROUP_OPTIONS.YEAR}
        handleClick={handleClick}
        name={GROUP_OPTIONS.YEAR}
      />
      <GroupButton
        primary={props.currentGroup === GROUP_OPTIONS.WRITER}
        handleClick={handleClick}
        name={GROUP_OPTIONS.WRITER}
      />
      <GroupButton
        primary={props.currentGroup === GROUP_OPTIONS.ARTIST}
        handleClick={handleClick}
        name={GROUP_OPTIONS.ARTIST}
      />
      <GroupButton
        primary={props.currentGroup === GROUP_OPTIONS.OWNER}
        handleClick={handleClick}
        name={GROUP_OPTIONS.OWNER}
      />
      <GroupButton
        primary={props.currentGroup === GROUP_OPTIONS.RANDOM}
        handleClick={handleClick}
        name={GROUP_OPTIONS.RANDOM}
      />
    </Box>
  );
};

export default GroupOptions;
