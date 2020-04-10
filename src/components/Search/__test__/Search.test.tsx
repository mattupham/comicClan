import Search from "components/Search/Search";
import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

const initialProps = {
  fetchBooks: jest.fn(),
};

afterAll(() => {
  cleanup();
});

describe("search", () => {
  test("search icon renders correctly", () => {
    const { getByTestId } = render(
      <Search fetchBooks={initialProps.fetchBooks} />
    );
    const searchIconElem = getByTestId("searchIcon");
    expect(searchIconElem).toBeInTheDocument();
  });

  test("it should update local state on change", () => {
    const { getByPlaceholderText } = render(
      <Search fetchBooks={initialProps.fetchBooks} />
    );

    const inputElem = getByPlaceholderText(
      "Search by book name"
    ) as HTMLInputElement;

    expect(inputElem.value).toBe("");
    const searchValue = "My Book";
    fireEvent.change(inputElem, { target: { value: searchValue } });
    expect(inputElem.value).toBe(searchValue);
  });

  test("calls fetchBooks correctly on submit", () => {
    const { getByTestId } = render(
      <Search fetchBooks={initialProps.fetchBooks} />
    );
    fireEvent.submit(getByTestId("searchForm"));
    expect(initialProps.fetchBooks).toHaveBeenCalled();
  });
});
