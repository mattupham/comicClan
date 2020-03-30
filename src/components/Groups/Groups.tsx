import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";
import { Box } from "rebass";
import { IDispatchToProps } from "state/ducks/group/types";

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

interface IProps {
  group: GROUP_OPTIONS;
  // handleSetCurrentGroup: (group: GROUP_OPTIONS) => void;
}

type AllProps = IProps & IDispatchToProps;
// type AllProps = IDispatchToProps;

const Groups: FC<AllProps> = ({ setGroup, group }: AllProps) => {
  const handleClick = (groupOption: GROUP_OPTIONS) => setGroup(groupOption);

  return (
    <Box className="groupOptions">
      <GroupButton
        primary={group === GROUP_OPTIONS.YEAR}
        handleClick={handleClick}
        name={GROUP_OPTIONS.YEAR}
      />
      <GroupButton
        primary={group === GROUP_OPTIONS.WRITER}
        handleClick={handleClick}
        name={GROUP_OPTIONS.WRITER}
      />
      <GroupButton
        primary={group === GROUP_OPTIONS.ARTIST}
        handleClick={handleClick}
        name={GROUP_OPTIONS.ARTIST}
      />
      <GroupButton
        primary={group === GROUP_OPTIONS.OWNER}
        handleClick={handleClick}
        name={GROUP_OPTIONS.OWNER}
      />
      <GroupButton
        primary={group === GROUP_OPTIONS.RANDOM}
        handleClick={handleClick}
        name={GROUP_OPTIONS.RANDOM}
      />
    </Box>
  );
};

export default Groups;
