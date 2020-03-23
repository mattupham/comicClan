import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

const FilterButton = styled.button`
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
  children: ReactNode;
  index: number;
  handleClick: (index: number) => void;
}

const StyledFilterButton: FC<IProps> = (props: IProps) => {
  return (
    <FilterButton
      primary={props.primary}
      onClick={() => props.handleClick(props.index)}
    >
      {props.children}
    </FilterButton>
  );
};

export default StyledFilterButton;
