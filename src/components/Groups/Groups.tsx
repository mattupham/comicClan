import GroupButton from "components/GroupButton/GroupButton";
import React, { FC, useEffect } from "react";
import { Box } from "rebass";
import { IDispatchToProps } from "state/ducks/group/types";
import { useParams } from "react-router-dom";

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

type AllProps = IProps & IDispatchToProps;

// renders a list of group buttons
const Groups: FC<AllProps> = (props: AllProps) => {
  const { setGroup } = props;
  const { group } = useParams();
  useEffect(() => {
    setGroup(group as GROUP);
    console.log("SETTING GROUP");
  }, [group, setGroup]);

  return (
    <Box className="groupOptions" data-testid="groupOptions">
      <GroupButton primary={props.group === GROUP.YEAR} group={GROUP.YEAR} />
      <GroupButton
        primary={props.group === GROUP.WRITER}
        group={GROUP.WRITER}
      />
      <GroupButton
        primary={props.group === GROUP.ARTIST}
        group={GROUP.ARTIST}
      />
      <GroupButton primary={props.group === GROUP.OWNER} group={GROUP.OWNER} />
      <GroupButton
        primary={props.group === GROUP.RANDOM}
        group={GROUP.RANDOM}
      />
    </Box>
  );
};

export default Groups;
