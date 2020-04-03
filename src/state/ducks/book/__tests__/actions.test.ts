import { action } from "typesafe-actions";
import { fetchBooks, fetchBooksSuccess } from "state/ducks/book/actions";
import { BookActionTypes } from "state/ducks/book/types";
import * as bookData from "state/ducks/book/__tests__/__mockData__/comicBookData.json";

describe("book actions", () => {
  it("should create an action to fetch all books", () => {
    const expectedAction = action(BookActionTypes.FETCH_BOOKS, [], {
      queryString: "",
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
