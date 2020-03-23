import StyledFilterButton from "components/FilterButton";
import React, { FC, ReactNode, useState } from "react";

interface IProps {
  primary: boolean;
  children: ReactNode;
  index: number;
  handleClick: (index: number) => void;
}

const filterButtonsDefault = [
  {
    name: "Year",
    selected: true
  },
  {
    name: "Writer",
    selected: false
  },
  {
    name: "Artist",
    selected: false
  },
  {
    name: "Owner",
    selected: false
  },
  {
    name: "Random",
    selected: false
  }
];

const Filter: FC = () => {
  const [buttonList, setButtonList] = useState<
    { name: string; selected: boolean }[]
  >(filterButtonsDefault);

  console.log("SELECTED: ", buttonList);

  const handleClick = (curIndex: number) => {
    if (!buttonList[curIndex].selected) {
      const updatedButtonList = [...buttonList];
      updatedButtonList.forEach((button, index) =>
        index === curIndex
          ? (button.selected = true)
          : (button.selected = false)
      );
      setButtonList(updatedButtonList);
    }
  };

  return (
    <>
      {buttonList.map(({ name, selected }, index) => {
        return (
          <StyledFilterButton
            key={index}
            index={index}
            primary={selected}
            handleClick={handleClick}
          >
            {name}
          </StyledFilterButton>
        );
      })}
    </>
  );
};

export default Filter;
