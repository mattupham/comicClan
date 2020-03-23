import StyledFilterButton from "components/FilterButton";
import React, { FC, ReactNode, useState } from "react";
import { Box } from "rebass";

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
  const [selected, setSelected] = useState<
    { name: string; selected: boolean }[]
  >(filterButtonsDefault);
  console.log("SELECTED: ", selected);
  const handleClick = (selectedIndex: number) => {
    if (!selected[selectedIndex].selected) {
      const updatedSelected = [...selected];
      updatedSelected.forEach((button, index) => {
        index === selectedIndex
          ? (button.selected = true)
          : (button.selected = false);
      });
      setSelected(updatedSelected);
    }
  };

  return (
    <Box>
      {selected.map(({ name, selected }, index) => {
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
    </Box>
  );
};

export default Filter;
