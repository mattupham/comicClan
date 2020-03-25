import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";

interface IProps {
  currentGroup: GROUP_OPTIONS;
  handleSetCurrentGroup: (group: GROUP_OPTIONS) => void;
}

export enum GROUP_OPTIONS {
  YEAR = "Year",
  WRITER = "Writer",
  ARTIST = "Artist",
  OWNER = "Owner",
  RANDOM = "Random"
}

interface GroupButton {
  name: GROUP_OPTIONS;
  selected: boolean;
}

const GroupOptions: FC<IProps> = (props: IProps) => {
  const handleClick = (groupOption: GROUP_OPTIONS) =>
    props.handleSetCurrentGroup(groupOption);

  return (
    <>
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
    </>
  );
};

export default GroupOptions;
