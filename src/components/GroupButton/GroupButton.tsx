import { GROUP_OPTIONS } from "components/GroupOptions/GroupOptions";
import React, { FC } from "react";
import styled, { css } from "styled-components";

const GroupButton = styled.button`
  background: none;
  border: none;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: 3.8rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #777777;
  &:focus {
    outline: none;
  }
  ${(props: { primary: boolean }) =>
    props.primary &&
    css`
      background: #f15454;
      border-radius: 1.9rem;
      color: #ffffff;
    `}
`;

interface IProps {
  primary: boolean;
  // children: ReactNode;
  index: number;
  handleClick: (groupOption: GROUP_OPTIONS) => void;
  name: GROUP_OPTIONS;
}

const StyledGroupButton: FC<IProps> = (props: IProps) => {
  return (
    <GroupButton
      primary={props.primary}
      onClick={() => props.handleClick(props.name)}
    >
      {props.name}
    </GroupButton>
  );
};

export default StyledGroupButton;