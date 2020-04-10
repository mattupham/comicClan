import Groups, { IProps } from "components/Groups/Groups";
import { GROUP } from "components/Groups/Groups";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent, cleanup } from "@testing-library/react";
import { IDispatchToProps } from "state/ducks/group/types";
import { capitalizeFirstLetter } from "utils/utils";

type AllProps = IProps & IDispatchToProps;

const initialProps: AllProps = {
  group: GROUP.YEAR,
  setGroup: jest.fn(),
};

const renderComponent = (props: AllProps) =>
  renderWithRouter(<Groups {...props} />);

afterAll(() => {
  cleanup();
});

describe("groups", () => {
  test("should render all 5 group buttons", () => {
    const { queryAllByTestId } = renderComponent(initialProps);
    const groupButtonElems = queryAllByTestId("groupButton");
    expect(groupButtonElems.length).toBe(5);
  });

  test("calls setGroup when button is clicked", () => {
    Object.values(GROUP).forEach((group) => {
      const { getByText } = renderComponent(initialProps);
      fireEvent.click(getByText(capitalizeFirstLetter(group)));
      expect(initialProps.setGroup).toHaveBeenCalled();
      cleanup();
    });
  });
});
