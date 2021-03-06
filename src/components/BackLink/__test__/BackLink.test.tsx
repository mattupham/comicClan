import BackLink from "components/BackLink/BackLink";
import React from "react";
import { renderWithRouter } from "utils/testUtils";

const renderComponent = () => renderWithRouter(<BackLink />);

describe("back link", () => {
  test("renders back arrow", () => {
    const { getByTestId } = renderComponent();
    const backArrow = getByTestId("backArrow");
    expect(backArrow).toBeInTheDocument();
  });
});
