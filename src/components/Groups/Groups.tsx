import GroupButton from "components/GroupButton/GroupButton";
import React, { FC } from "react";
import { Box } from "rebass";
import { IDispatchToProps } from "state/ducks/group/types";

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

interface IProps {
  group: GROUP;
}

type AllProps = IProps & IDispatchToProps;

const Groups: FC<AllProps> = ({ setGroup, group }: AllProps) => {
  const handleClick = (groupOption: GROUP) => setGroup(groupOption);

  return (
    <Box className="groupOptions">
      <GroupButton
        primary={group === GROUP.YEAR}
        handleClick={handleClick}
        group={GROUP.YEAR}
      />
      <GroupButton
        primary={group === GROUP.WRITER}
        handleClick={handleClick}
        group={GROUP.WRITER}
      />
      <GroupButton
        primary={group === GROUP.ARTIST}
        handleClick={handleClick}
        group={GROUP.ARTIST}
      />
      <GroupButton
        primary={group === GROUP.OWNER}
        handleClick={handleClick}
        group={GROUP.OWNER}
      />
      <GroupButton
        primary={group === GROUP.RANDOM}
        handleClick={handleClick}
        group={GROUP.RANDOM}
      />
    </Box>
  );
};

export default Groups;
