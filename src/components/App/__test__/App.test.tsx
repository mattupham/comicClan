import App from "components/App/App";
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { GROUP } from "components/Groups/Groups";
import "@testing-library/jest-dom/extend-expect";
import { renderWithAll } from "utils/testUtils";
import { capitalizeFirstLetter } from "utils/utils";

const renderComponent = () => renderWithAll(<App />);

beforeAll(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterAll(() => {
  cleanup();
});

describe("app", () => {
  test("app renders correct components", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("main")).toBeInTheDocument();
    expect(getByTestId("header")).toBeInTheDocument();
  });

  test("scrolls to top after clicking a book", () => {
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  test("landing on a bad page shows 404 page", () => {
    const { getByText } = renderWithAll(<App />, { route: "/bad" });
    expect(getByText("Page Not Found")).toBeInTheDocument();
  });
});
