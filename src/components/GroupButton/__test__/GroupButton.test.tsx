import GroupButton, { IProps } from "components/GroupButton/GroupButton";
import { GROUP } from "components/Groups/Groups";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent, cleanup } from "@testing-library/react";

const initialProps: IProps = {
  primary: false,
  handleClick: jest.fn(),
  group: GROUP.YEAR,
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<GroupButton {...props} />);

describe("group button", () => {
  test("button name is equivalent to passed in group", () => {
    const { getByText } = renderComponent(initialProps);
    const elem = getByText(initialProps.group, { exact: false });
    expect(elem.innerHTML.toLowerCase()).toBe(GROUP.YEAR);
    cleanup();
  });

  test("calls handleClick on button click", () => {
    const { getByText } = renderComponent(initialProps);
    fireEvent.click(getByText(initialProps.group, { exact: false }));
    expect(initialProps.handleClick).toHaveBeenCalled();
    cleanup();
  });
});
