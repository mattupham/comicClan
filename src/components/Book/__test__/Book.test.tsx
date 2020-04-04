import Book, { IProps } from "components/Book/Book";
// import { GROUP } from "components/Groups/Groups";
import React from "react";
import { renderWithRouter } from "utils/testUtils";
import { fireEvent } from "@testing-library/react";

const initialProps: IProps = {
  username: "username",
  bookName: "bookName",
  imageUrl: "https://www.placeholder.com",
};

const renderComponent = (props: IProps) =>
  renderWithRouter(<Book {...props} />);

describe("book", () => {
  test("book contains all respective props", () => {
    const { getByText, getByTestId, debug } = renderComponent(initialProps);

    const usernameElem = getByText(initialProps.username, { exact: false });
    expect(usernameElem.innerHTML).toBe(initialProps.username);

    const bookNameElem = getByText(initialProps.bookName, { exact: false });
    expect(bookNameElem.innerHTML).toBe(initialProps.bookName);

    const imageElem = getByTestId("bookImage");
    expect(imageElem).toHaveAttribute("src", initialProps.imageUrl);
  });
});
