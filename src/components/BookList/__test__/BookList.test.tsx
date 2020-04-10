import BookList, { IProps } from "components/BookList/BookList";
import React from "react";
import { renderWithRouter, getMockBookData } from "utils/testUtils";
import { cleanup } from "@testing-library/react";
import { GROUP } from "components/Groups/Groups";
import { groupAndSortBy } from "utils/utils";

const initialProps: IProps = {
  books: getMockBookData(),
  groupValue: "",
  currentGroup: GROUP.YEAR,
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<BookList {...props} />);

afterAll(() => {
  cleanup();
});

describe("bookList", () => {
  test("does not render group value when Random and renders book list", () => {
    const { queryByTestId, queryAllByTestId } = renderComponent({
      ...initialProps,
      currentGroup: GROUP.RANDOM,
    });
    // group title isn't present
    const groupTitle = queryByTestId("groupTitle");
    expect(groupTitle).toBeNull();
    // renders book list
    const bookList = queryAllByTestId("bookLink");
    expect(bookList.length).toBeGreaterThan(0);
  });

  test("does render group value when not Random and renders book list", () => {
    Object.values(GROUP).forEach((group) => {
      // if group is not random
      if (group !== GROUP.RANDOM) {
        // extract groupValue and books from grouped data
        const [groupValue, books] = groupAndSortBy(
          initialProps.books,
          group
        )[0];
        const { queryByTestId, queryAllByTestId } = renderComponent({
          books: books,
          groupValue: groupValue,
          currentGroup: group,
        });
        // find title in DOM
        const groupTitle = queryByTestId("groupTitle").innerHTML;
        expect(groupTitle).toBe(groupValue);
        // renders book list
        const bookList = queryAllByTestId("bookLink");
        expect(bookList.length).toBeGreaterThan(0);
      }
      cleanup();
    });
  });

  test("does not render book list map when provided an empty list", () => {
    const { queryAllByTestId } = renderComponent({
      ...initialProps,
      books: [],
    });

    // doesn't render book list
    const bookList = queryAllByTestId("bookLink");
    expect(bookList.length).toBe(0);
  });
});
