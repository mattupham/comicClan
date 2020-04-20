import Main, { AllProps, groupRegex, groupList } from "components/Main/Main";
import React from "react";
import { cleanup, fireEvent } from "@testing-library/react";
import { GROUP } from "components/Groups/Groups";
import "@testing-library/jest-dom/extend-expect";
import { renderWithAll, renderWithRouter } from "utils/testUtils";
import { capitalizeFirstLetter } from "utils/utils";
import { getMockBookData } from "utils/testUtils";

const initialProps: AllProps = {
  bookData: getMockBookData(),
  fetchBooks: jest.fn(),
  loading: false,
};

const renderComponent = () => renderWithAll(<Main {...initialProps} />);

beforeAll(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterAll(() => {
  cleanup();
});

describe("main", () => {
  test("main renders correct components", () => {
    const { getByTestId, getAllByTestId } = renderComponent();
    expect(getByTestId("main")).toBeInTheDocument();
    expect(getByTestId("search")).toBeInTheDocument();
    expect(getByTestId("groupOptions")).toBeInTheDocument();
    expect(getByTestId("groupedBooks")).toBeInTheDocument();
    expect(getAllByTestId("bookLink").length).toBeGreaterThan(0);
    const { getByText } = renderWithAll(<Main {...initialProps} />, {
      route: "/bad",
    });
    expect(getByText("Page Not Found")).toBeInTheDocument();
  });

  test("redirects to /books/year from /", () => {
    const { history } = renderWithAll(<Main {...initialProps} />, {
      route: "/",
    });
    expect(history.location.pathname).toContain("/books/year");
  });

  test("clicking book changes route", () => {
    const { history } = renderWithAll(<Main {...initialProps} />, {
      route: "/",
    });
    const { getAllByTestId } = renderComponent();
    fireEvent.click(getAllByTestId("bookLink")[0]);
    expect(history.location.pathname).toContain("/book/");
  });

  test("clicking book opens book ", () => {
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

  test("clicking button changes route", () => {
    const { getByText, history } = renderComponent();
    Object.values(GROUP).forEach((group) => {
      fireEvent.click(getByText(capitalizeFirstLetter(group)), { button: 0 });
      expect(history.location.pathname).toContain(`/books/${group}`);
    });
  });

  test("if book list return empty, shows No Results Found page", () => {
    const { getByText, queryByTestId, queryAllByTestId } = renderWithRouter(
      <Main {...initialProps} bookData={[]} />
    );
    expect(getByText("No results found")).toBeInTheDocument();
    expect(queryByTestId("bookPage")).toBeNull();
    expect(queryAllByTestId("bookLink").length).toBe(0);
  });

  test("creates group regex correctly", () => {
    expect(groupRegex(groupList)).toBe("(year|writer|artist|owner|random)");
  });

  test("landing on a bad page / group / bookshows 404 page", () => {
    ["/bad", "/book/MyIncorrectBook", "/books/MyIncorrectGroup"].forEach(
      (route) => {
        const { getByText } = renderWithRouter(<Main {...initialProps} />, {
          route,
        });
        expect(getByText("Page Not Found")).toBeInTheDocument();
        cleanup();
      }
    );
  });
});
