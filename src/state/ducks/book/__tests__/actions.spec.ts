// TODO UPDATE
import { action } from "typesafe-actions";
import { fetchBooks, fetchBooksSuccess } from "../actions";
import { BookActionTypes } from "../types";
import * as bookData from "./__mockData__/comicBookData.json";

describe("book actions", () => {
  it("should create an action to fetch all books", () => {
    const expectedAction = action(BookActionTypes.FETCH_BOOKS, [], {
      method: "get",
      route: "/books",
    });

    expect(fetchBooks()).toEqual(expectedAction);
  });

  it("should create a success action", () => {
    const expectedAction = action(
      BookActionTypes.FETCH_BOOKS_SUCCESS,
      bookData
    );

    expect(fetchBooksSuccess(bookData)).toEqual(expectedAction);
  });
});
