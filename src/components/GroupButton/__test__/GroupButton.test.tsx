import GroupButton, { IProps } from "components/GroupButton/GroupButton";
import { GROUP } from "components/Groups/Groups";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent, cleanup } from "@testing-library/react";
import { capitalizeFirstLetter } from "utils/utils";

const initialProps: IProps = {
  primary: false,
  group: GROUP.YEAR,
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<GroupButton {...props} />);

describe("group button", () => {
  test("button name is equivalent to passed in group", () => {
    const { getByText } = renderComponent(initialProps);
    const elem = getByText(initialProps.group, { exact: false });
    expect(elem.innerHTML.toLowerCase()).toBe(GROUP.YEAR);
  });

  test("changes route on button click", () => {
    Object.values(GROUP).forEach((group) => {
      const { getByTestId, history } = renderComponent({
        primary: false,
        group: group,
      });
      const route = `/books/${group}`;
      fireEvent.click(
        getByTestId(`groupButton${capitalizeFirstLetter(group)}`)
      );
      expect(history.location.pathname).toBe(route);
      cleanup();
    });
  });
});
