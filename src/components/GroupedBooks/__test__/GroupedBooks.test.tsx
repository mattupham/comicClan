import GroupedBooks, { IProps } from "components/GroupedBooks/GroupedBooks";
import React from "react";
import { renderWithRouter, getMockBookData } from "utils/testUtils";
import { GROUP } from "components/Groups/Groups";

const initialProps: IProps = {
  bookData: getMockBookData(),
  selectedGroup: GROUP.YEAR,
};

const renderComponent = () =>
  renderWithRouter(<GroupedBooks {...initialProps} />);

describe("groupedBooks", () => {
  test("renders bookList", () => {
    const { queryAllByTestId } = renderComponent();
    const groupedBookLists = queryAllByTestId("singleGroupedBookList");
    expect(groupedBookLists.length).toBeGreaterThan(1);
  });
});
