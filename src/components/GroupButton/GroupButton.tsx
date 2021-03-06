import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import { capitalizeFirstLetter } from "utils/utils";
import { Link } from "react-router-dom";
import { RobotoBold, COLORS } from "components/Styled/Styled";
import { Button } from "rebass";

const GroupButton = styled(Button)`
  background: none;
  border: none;
  height: 3.8rem;
  line-height: 2.1rem;
  color: ${COLORS.MedGray};
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props: { primary: boolean }) =>
    props.primary &&
    css`
      background: ${COLORS.Red};
      border-radius: 1.9rem;
      color: ${COLORS.White};
    `}
`;

export interface IProps {
  primary: boolean;
  group: GROUP;
}

const StyledGroupButton: FC<IProps> = (props: IProps) => (
  <Link
    to={`/books/${props.group}`}
    data-testid={`groupButton${capitalizeFirstLetter(props.group)}`}
  >
    <GroupButton
      primary={props.primary}
      fontSize={["1.4rem", "1.8rem", "1.8rem"]}
      px={[".9rem", "1.5rem", "1.5rem"]}
      data-testid={`groupButton${props.primary ? "Primary" : "Secondary"}`}
    >
      <RobotoBold>{capitalizeFirstLetter(props.group)}</RobotoBold>
    </GroupButton>
  </Link>
);

export default StyledGroupButton;
