import Header from "components/Header/Header";
import React from "react";
import { renderWithRouter } from "utils/testUtils";

const renderComponent = () => renderWithRouter(<Header />);

describe("header", () => {
  test("renders SVGs", () => {
    const { getByTestId } = renderComponent();

    const comicClanLogoElem = getByTestId("comicClanLogo");
    expect(comicClanLogoElem).toBeInTheDocument();

    const comicClanTextElem = getByTestId("comicClanText");
    expect(comicClanTextElem).toBeInTheDocument();
  });
});
