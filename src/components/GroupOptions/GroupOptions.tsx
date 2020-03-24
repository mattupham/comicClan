import StyledGroupButton from "components/GroupButton/GroupButton";
import React, { FC, useEffect, useState } from "react";

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

const defaultGroupButtonList: GroupButton[] = [
  {
    name: GROUP_OPTIONS.YEAR,
    selected: false
  },
  {
    name: GROUP_OPTIONS.WRITER,
    selected: false
  },
  {
    name: GROUP_OPTIONS.ARTIST,
    selected: false
  },
  {
    name: GROUP_OPTIONS.OWNER,
    selected: false
  },
  {
    name: GROUP_OPTIONS.RANDOM,
    selected: false
  }
];

// const setGroupButtonSelected = (
//   groupButtonList: GroupButton[],
//   groupOption: GROUP_OPTIONS,
//   cb: (groupButtonList: GroupButton[]) => void
// ) => {
//   const updatedButtonList = [...groupButtonList];
//   updatedButtonList.forEach(button =>
//     button.name === groupOption
//       ? (button.selected = true)
//       : (button.selected = false)
//   );
//   cb(updatedButtonList);
// };

const updateGroupButtonList = (
  groupOption: GROUP_OPTIONS,
  groupButtonsDefault: GroupButton[]
) => {
  const updatedGroupButtonList = [...defaultGroupButtonList];
  updatedGroupButtonList.forEach(button => {
    if (button.name === groupOption) {
      button.selected = true;
    } else {
      button.selected = false;
    }
  });
  return updatedGroupButtonList;
};

const GroupOptions: FC<IProps> = (props: IProps) => {
  const [buttonList, setButtonList] = useState<GroupButton[]>([
    ...defaultGroupButtonList
  ]);

  useEffect(() => {
    const updatedGroupButtonList = updateGroupButtonList(
      props.currentGroup,
      defaultGroupButtonList
    );
    setButtonList(updatedGroupButtonList);
  }, [props.currentGroup]);

  const handleClick = (groupOption: GROUP_OPTIONS) =>
    props.handleSetCurrentGroup(groupOption);

  return (
    <>
      {buttonList.map(({ name, selected }, index) => {
        return (
          <StyledGroupButton
            key={index}
            index={index}
            primary={selected}
            handleClick={handleClick}
            name={name}
          />
        );
      })}
    </>
  );
};

export default GroupOptions;
