import { GROUP } from "components/Groups/Groups";
import React, { FC } from "react";
import styled, { css } from "styled-components";
import { capitalizeFirstLetter } from "utils/utils";
import { Link } from "react-router-dom";
import { RobotoBold } from "components/Styled/Styled";

const GroupButton = styled.button`
  background: none;
  border: none;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: 3.8rem;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #777777;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props: { primary: boolean }) =>
    props.primary &&
    css`
      background: #f15454;
      border-radius: 1.9rem;
      color: #ffffff;
    `}
`;

export interface IProps {
  primary: boolean;
  handleClick: (groupOption: GROUP) => void;
  group: GROUP;
}

const StyledGroupButton: FC<IProps> = (props: IProps) => (
  <Link to={`/books/${props.group}`} data-testid="groupButton">
    <GroupButton
      primary={props.primary}
      onClick={() => props.handleClick(props.group)}
    >
      <RobotoBold>{capitalizeFirstLetter(props.group)}</RobotoBold>
    </GroupButton>
  </Link>
);

export default StyledGroupButton;
