import App from "components/App/App";
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { GROUP } from "components/Groups/Groups";
import "@testing-library/jest-dom/extend-expect";
import { renderWithAll } from "utils/testUtils";
import { capitalizeFirstLetter } from "utils/utils";

// should render scroll to top
// should render header
// should render main container
// 404 should render 404 screen

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

  test("clicking book changes route", () => {
    const { history } = renderWithAll(<App />, {
      route: "/books/year",
    });
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(history.location.pathname).toContain("/book/");
  });

  test("clicking book changes route", () => {
    const { history } = renderWithAll(<App />, {
      route: "/books/year",
    });
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(history.location.pathname).toContain("/book/");
  });

  test("clicking button changes route", () => {
    const { getByText, history } = renderComponent();
    Object.values(GROUP).forEach((group) => {
      fireEvent.click(getByText(capitalizeFirstLetter(group)), { button: 0 });
      expect(history.location.pathname).toContain(`/books/${group}`);
    });
  });

  test("clicking book opens book page", () => {
    const { queryByTestId, getAllByTestId, history } = renderComponent();
    const bookElem = getAllByTestId("bookLink")[0];
    expect(queryByTestId("bookPage")).toBeNull();
    fireEvent.click(bookElem);
    expect(queryByTestId("bookPage")).not.toBeNull();
    const bookName = queryByTestId("bookDetailsName").innerHTML;
    const actualPath = decodeURIComponent(history.location.pathname);
    const expectedPath = `/book/${bookName}`;
    expect(expectedPath).toContain(actualPath);
  });

  test("landing on a bad page shows 404 page", () => {
    const { getByText } = renderWithAll(<App />, { route: "/bad" });
    expect(getByText("Page Not Found")).toBeInTheDocument();
  });
});
