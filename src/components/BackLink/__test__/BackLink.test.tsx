import BackLink from "components/BackLink/BackLink";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { cleanup } from "@testing-library/react";

const renderComponent = () => renderWithRouter(<BackLink />);

afterAll(() => {
  cleanup();
});

describe("back link", () => {
  test("renders back arrow", () => {
    const { getByTestId } = renderComponent();
    const backArrow = getByTestId("backArrow");
    expect(backArrow).toBeInTheDocument();
  });
});
