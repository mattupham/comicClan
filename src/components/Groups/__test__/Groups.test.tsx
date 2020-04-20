import Groups from "components/Groups/Groups";
import { GROUP } from "components/Groups/Groups";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent, cleanup, getByTestId } from "@testing-library/react";
import { capitalizeFirstLetter } from "utils/utils";

afterAll(() => {
  cleanup();
});

describe("groups", () => {
  test("should render all 5 group buttons", () => {
    const { queryAllByTestId } = renderWithRouter(
      <Groups group={GROUP.YEAR} />
    );
    const groupButtonPrimaryElem = queryAllByTestId("groupButtonPrimary");
    const groupButtonSecondaryElems = queryAllByTestId("groupButtonSecondary");
    expect(groupButtonPrimaryElem.length).toBe(1);
    expect(groupButtonSecondaryElems.length).toBe(4);
  });

  test("changes to correct route on button click", () => {
    Object.values(GROUP).forEach((group) => {
      const { history, getByText } = renderWithRouter(
        <Groups group={GROUP.RANDOM} />
      );
      const route = `/books/${group}`;
      const testid = `groupButton${capitalizeFirstLetter(group)}`;
      fireEvent.click(getByText(capitalizeFirstLetter(group)));
      // fireEvent.click(getByTestId(testid));
      expect(history.location.pathname).toBe(route);
      cleanup();
    });
  });
});
