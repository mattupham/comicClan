import BookPage, { IProps } from "components/BookPage/BookPage";
import React from "react";
import { renderWithRouter, getMockBookData } from "utils/testUtils";
import { cleanup } from "@testing-library/react";

const initialProps: IProps = {
  books: getMockBookData(),
  selectedBook: getMockBookData()[0],
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<BookPage {...props} />);

describe("bookPage", () => {
  test("bookPage contains all child components", () => {
    const { getByTestId, queryAllByTestId } = renderComponent(initialProps);

    const backLink = getByTestId("backLink");
    expect(backLink).toBeInTheDocument();

    const bookImage = getByTestId("bookPageBookImage");
    expect(bookImage).toBeInTheDocument();
    expect(bookImage).toHaveAttribute("src", initialProps.selectedBook.image);

    const bookDetails = getByTestId("bookDetails");
    expect(bookDetails).toBeInTheDocument();

    const groupedBookLists = queryAllByTestId("singleGroupedBookList");
    expect(groupedBookLists.length).toBeGreaterThan(0);

    cleanup();
  });
});

// renders backlink
// renders bookImage
// renders bookDetails
// renders groupedBooks
