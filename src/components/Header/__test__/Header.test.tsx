import Header from "components/Header/Header";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { cleanup } from "@testing-library/react";

const renderComponent = () => renderWithRouter(<Header />);

afterAll(() => {
  cleanup();
});

describe("header", () => {
  test("renders SVGs", () => {
    const { getByTestId } = renderComponent();

    const comicClanLogoElem = getByTestId("comicClanLogo");
    expect(comicClanLogoElem).toBeInTheDocument();

    const comicClanTextElem = getByTestId("comicClanText");
    expect(comicClanTextElem).toBeInTheDocument();
  });
});
